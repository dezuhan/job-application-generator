
import React from 'react';
import { FormData, OllamaConfig } from '../types';

interface LetterFormProps {
    formData: FormData;
    setFormData: React.Dispatch<React.SetStateAction<FormData>>;
    ollamaConfig: OllamaConfig;
    setOllamaConfig: React.Dispatch<React.SetStateAction<OllamaConfig>>;
    onOllamaSubmit: () => void;
    isLoading: boolean;
}

export const LetterForm: React.FC<LetterFormProps> = ({ 
    formData, 
    setFormData, 
    ollamaConfig, 
    setOllamaConfig, 
    onOllamaSubmit, 
    isLoading 
}) => {

    const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };
    
    const handleOllamaChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value, type, checked } = e.target as HTMLInputElement;
        setOllamaConfig(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onOllamaSubmit();
    };
    
    const inputClass = "w-full px-4 py-2 bg-light-bg dark:bg-dark-bg-secondary border border-light-border dark:border-dark-border rounded-md focus:outline-none focus:ring-2 focus:ring-light-accent dark:focus:ring-dark-accent transition-colors";
    const labelClass = "block text-sm font-medium text-light-text-secondary dark:text-dark-text-secondary mb-1";
    const buttonDisabledClass = "disabled:bg-gray-400 dark:disabled:bg-gray-700 disabled:cursor-not-allowed";

    return (
        <form onSubmit={handleSubmit} className="space-y-6 bg-light-bg-secondary dark:bg-dark-bg-secondary p-6 rounded-lg shadow-lg">
            <div>
                <h2 className="text-xl font-semibold text-light-text dark:text-dark-text">Your Information</h2>
                <p className="text-sm text-light-text-secondary dark:text-dark-text-secondary">Provide your personal and application details.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <label htmlFor="name" className={labelClass}>Full Name</label>
                    <input type="text" id="name" name="name" value={formData.name} onChange={handleFormChange} className={inputClass} required />
                </div>
                <div>
                    <label htmlFor="phone" className={labelClass}>Phone Number</label>
                    <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleFormChange} className={inputClass} required />
                </div>
                <div>
                    <label htmlFor="email" className={labelClass}>Your Email</label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleFormChange} className={inputClass} required />
                </div>
                <div>
                    <label htmlFor="address" className={labelClass}>Address (City, Province)</label>
                    <input type="text" id="address" name="address" value={formData.address} onChange={handleFormChange} className={inputClass} required />
                </div>
                 <div>
                    <label htmlFor="companyName" className={labelClass}>Company Name</label>
                    <input type="text" id="companyName" name="companyName" value={formData.companyName} onChange={handleFormChange} className={inputClass} required />
                </div>
                 <div>
                    <label htmlFor="companyEmail" className={labelClass}>Company Email (Optional)</label>
                    <input type="email" id="companyEmail" name="companyEmail" value={formData.companyEmail} onChange={handleFormChange} className={inputClass} placeholder="e.g., hiring@example.com" />
                </div>
                <div className="md:col-span-2">
                    <label htmlFor="position" className={labelClass}>Position Applied For</label>
                    <input type="text" id="position" name="position" value={formData.position} onChange={handleFormChange} className={inputClass} required />
                </div>
            </div>
            
            <div>
                <label htmlFor="experience" className={labelClass}>Skills & Experience (Briefly)</label>
                <textarea id="experience" name="experience" value={formData.experience} onChange={handleFormChange} rows={4} className={inputClass} placeholder="e.g., I have 3 years of experience in graphic design..." required />
            </div>

            <div>
                <label htmlFor="language" className={labelClass}>Output Language</label>
                <select id="language" name="language" value={formData.language} onChange={handleFormChange} className={inputClass}>
                    <option value="id">Bahasa Indonesia</option>
                    <option value="en">English</option>
                </select>
            </div>

            <div className="border-t border-light-border dark:border-dark-border pt-6">
                <div className="flex items-center">
                    <input
                        type="checkbox"
                        id="useOllama"
                        name="useOllama"
                        checked={ollamaConfig.useOllama}
                        onChange={handleOllamaChange}
                        className="h-4 w-4 rounded border-gray-300 text-light-accent focus:ring-light-accent"
                    />
                    <label htmlFor="useOllama" className="ml-2 block text-sm font-medium text-light-text dark:text-dark-text">
                        Use Ollama (Optional)
                    </label>
                </div>
            </div>

            {ollamaConfig.useOllama && (
                <div className="space-y-4 p-4 border border-light-border dark:border-dark-border rounded-md">
                    <div>
                        <label htmlFor="endpoint" className={labelClass}>Ollama Endpoint</label>
                        <input type="url" id="endpoint" name="endpoint" value={ollamaConfig.endpoint} onChange={handleOllamaChange} className={inputClass} />
                    </div>
                    <div>
                        <label htmlFor="model" className={labelClass}>Model Name</label>
                        <input type="text" id="model" name="model" value={ollamaConfig.model} onChange={handleOllamaChange} className={inputClass} />
                    </div>
                     <div>
                        <label htmlFor="prompt" className={labelClass}>Custom Prompt</label>
                        <textarea id="prompt" name="prompt" value={ollamaConfig.prompt} onChange={handleOllamaChange} rows={5} className={inputClass} />
                         <p className="text-xs mt-1 text-light-text-secondary dark:text-dark-text-secondary">Use {'{name}'}, {'{email}'}, {'{companyName}'}, etc. as placeholders.</p>
                    </div>
                </div>
            )}
            
            <button
                type="submit"
                disabled={isLoading || !ollamaConfig.useOllama}
                className={`w-full flex justify-center items-center px-4 py-3 bg-light-accent dark:bg-dark-accent text-white font-bold rounded-md hover:bg-light-accent-hover dark:hover:bg-dark-accent-hover ${buttonDisabledClass} transition-colors`}
            >
                {isLoading ? (
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                ) : null}
                {isLoading ? 'Generating...' : (ollamaConfig.useOllama ? 'Generate with Ollama' : 'Generate Letter')}
            </button>
        </form>
    );
};
