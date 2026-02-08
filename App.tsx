
import React, { useState, useCallback, useEffect } from 'react';
import { Header } from './components/Header';
import { LetterForm } from './components/LetterForm';
import { LetterPreview } from './components/LetterPreview';
import { generateFromTemplate } from './services/templateService';
import { generateWithOllama } from './services/ollamaService';
import { FormData, OllamaConfig } from './types';
import { Toast } from './components/Toast';
import { OLLAMA_DEFAULT_PROMPT } from './constants';
import { Footer } from './components/Footer';

const App: React.FC = () => {
    const [generatedLetter, setGeneratedLetter] = useState<string>('');
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const [toastMessage, setToastMessage] = useState<string | null>(null);

    const [formData, setFormData] = useState<FormData>({
        name: '',
        phone: '',
        email: '',
        address: '',
        language: 'id',
        companyName: '',
        companyEmail: '',
        position: '',
        experience: '',
    });

    const [ollamaConfig, setOllamaConfig] = useState<OllamaConfig>({
        useOllama: false,
        endpoint: 'http://localhost:11434/api/generate',
        model: 'llama3',
        prompt: OLLAMA_DEFAULT_PROMPT,
    });

    const showToast = (message: string) => {
        setToastMessage(message);
        setTimeout(() => setToastMessage(null), 3000);
    };

    // Real-time generation for the template
    useEffect(() => {
        if (!ollamaConfig.useOllama) {
            const letter = generateFromTemplate(formData);
            setGeneratedLetter(letter);
            setError(null);
        }
    }, [formData, ollamaConfig.useOllama]);

    const handleOllamaSubmit = useCallback(async () => {
        if (!ollamaConfig.useOllama) return;
        
        setIsLoading(true);
        setError(null);
        
        try {
            const letter = await generateWithOllama(formData, ollamaConfig);
            setGeneratedLetter(letter);
        } catch (e: any) {
            setError(e.message || 'An unknown error occurred.');
            showToast('Error generating letter with Ollama.');
        } finally {
            setIsLoading(false);
        }
    }, [formData, ollamaConfig]);

    const handleCopy = useCallback(() => {
        if (generatedLetter) {
            navigator.clipboard.writeText(generatedLetter)
                .then(() => showToast('Letter copied to clipboard!'))
                .catch(() => showToast('Failed to copy letter.'));
        }
    }, [generatedLetter]);

    const handleSendEmail = useCallback(() => {
        if (generatedLetter && formData.companyEmail) {
            navigator.clipboard.writeText(generatedLetter)
                .then(() => {
                    showToast('Letter copied! Opening email client...');
                    const mailtoLink = `mailto:${formData.companyEmail}`;
                    window.open(mailtoLink, '_blank');
                })
                .catch(() => showToast('Failed to copy letter.'));
        }
    }, [generatedLetter, formData.companyEmail]);
    
    return (
        <div className="min-h-screen flex flex-col bg-light-bg text-light-text dark:bg-dark-bg dark:text-dark-text font-sans transition-colors duration-300">
            <Header />
            <main className="flex-grow container mx-auto px-4 py-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <LetterForm 
                        formData={formData}
                        setFormData={setFormData}
                        ollamaConfig={ollamaConfig}
                        setOllamaConfig={setOllamaConfig}
                        onOllamaSubmit={handleOllamaSubmit} 
                        isLoading={isLoading} 
                    />
                    <LetterPreview 
                        content={generatedLetter} 
                        isLoading={isLoading} 
                        error={error}
                        onCopy={handleCopy}
                        onSendEmail={handleSendEmail}
                        companyEmail={formData.companyEmail}
                    />
                </div>
            </main>
            {toastMessage && <Toast message={toastMessage} />}
            <Footer />
        </div>
    );
};

export default App;
