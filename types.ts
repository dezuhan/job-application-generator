
export interface FormData {
    name: string;
    phone: string;
    email: string;
    address: string;
    language: 'id' | 'en';
    companyName: string;
    companyEmail: string;
    position: string;
    experience: string;
}

export interface OllamaConfig {
    useOllama: boolean;
    endpoint: string;
    model: string;
    prompt: string;
}
