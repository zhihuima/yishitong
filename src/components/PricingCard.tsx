import React from 'react';

interface PricingCardProps {
    title: string;
    englishTitle: string;
    price: string;
    slogan: string;
    description: string;
    features: string[];
    buttonText: string;
    isPro?: boolean;
}

export const PricingCard: React.FC<PricingCardProps> = ({
    title,
    englishTitle,
    price,
    slogan,
    description,
    features,
    buttonText,
    isPro = false,
}) => {
    return (
        <div className={`relative flex flex-col p-6 rounded-2xl border ${isPro ? 'border-blue-500 bg-blue-50/10 shadow-xl' : 'border-zinc-200 bg-white dark:bg-zinc-900/50 dark:border-zinc-800'}`}>
            {isPro && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-600 to-violet-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                </div>
            )}

            <div className="mb-8">
                <h3 className="text-lg font-medium text-zinc-950 dark:text-white">{title}</h3>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 font-mono mt-1">{englishTitle}</p>
            </div>

            <div className="mb-8">
                <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold tracking-tight text-zinc-950 dark:text-white">{price}</span>
                </div>
                <p className="mt-4 text-sm font-medium text-blue-600 dark:text-blue-400">{slogan}</p>
                <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">{description}</p>
            </div>

            <ul className="flex-1 space-y-4 mb-8">
                {features.map((feature, index) => (
                    <li key={index} className="flex gap-3 text-sm text-zinc-600 dark:text-zinc-300">
                        <svg className="w-5 h-5 flex-none text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {feature}
                    </li>
                ))}
            </ul>

            <button className={`w-full py-3 px-4 rounded-xl text-sm font-semibold transition-colors ${isPro
                    ? 'bg-blue-600 text-white hover:bg-blue-500'
                    : 'bg-zinc-950 text-white hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200'
                }`}>
                {buttonText}
            </button>
        </div>
    );
};
