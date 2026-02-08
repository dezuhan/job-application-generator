
import React from 'react';

interface ToastProps {
    message: string;
}

export const Toast: React.FC<ToastProps> = ({ message }) => {
    return (
        <div className="fixed bottom-5 right-5 bg-dark-bg-secondary dark:bg-light-bg-secondary text-dark-text dark:text-light-text px-4 py-2 rounded-md shadow-lg animate-fade-in-out">
            {message}
        </div>
    );
};
