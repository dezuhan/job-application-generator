
import { FormData, OllamaConfig } from '../types';

export const generateWithOllama = async (formData: FormData, ollamaConfig: OllamaConfig): Promise<string> => {
    const { name, phone, email, address, language, companyName, position, experience } = formData;
    const { endpoint, model, prompt } = ollamaConfig;

    if (!endpoint || !model) {
        throw new Error('Ollama endpoint and model name are required.');
    }
    
    const languageFullName = language === 'id' ? 'Indonesian' : 'English';

    let finalPrompt = prompt
        .replace(/{name}/g, name)
        .replace(/{email}/g, email)
        .replace(/{phone}/g, phone)
        .replace(/{address}/g, address)
        .replace(/{language}/g, languageFullName)
        .replace(/{companyName}/g, companyName)
        .replace(/{position}/g, position)
        .replace(/{experience}/g, experience);

    try {
        const response = await fetch(endpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                model: model,
                prompt: finalPrompt,
                stream: false,
            }),
        });

        if (!response.ok) {
            const errorBody = await response.json().catch(() => ({ error: 'Unknown error structure' }));
            throw new Error(`Ollama API error: ${response.status} ${response.statusText}. ${errorBody.error || ''}`);
        }

        const data = await response.json();

        if (data.response) {
            return data.response.trim();
        } else {
            throw new Error('Invalid response structure from Ollama API.');
        }
    } catch (error) {
        if (error instanceof TypeError) { // Network error
             throw new Error(`Network error or could not connect to Ollama endpoint: ${endpoint}`);
        }
        throw error;
    }
};
