import React from 'react';

export const WalletStatus: React.FC = () => {
    const [balance, setBalance] = React.useState({ principal: 0, bonus: 0 });

    React.useEffect(() => {
        fetch('/api/partner/wallet')
            .then(res => res.json())
            .then(data => setBalance(data));
    }, []);

    const { principal, bonus } = balance;
    return (
        <div className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 p-6 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-amber-100 flex items-center justify-center text-amber-600 font-bold text-xl">
                    👑
                </div>
                <div>
                    <h3 className="font-bold text-slate-900 dark:text-white">金牌合伙人 (Partner)</h3>
                    <p className="text-sm text-green-600">有效期至：2026-01-01</p>
                </div>
            </div>

            <div className="flex flex-1 w-full md:w-auto gap-4">
                <div className="flex-1 bg-slate-50 dark:bg-slate-800 p-4 rounded-lg border border-slate-100 dark:border-slate-700">
                    <p className="text-xs text-slate-500 mb-1">本金余额 (Principal)</p>
                    <div className="text-2xl font-bold text-slate-900 dark:text-white font-mono">
                        ${principal.toLocaleString()}
                    </div>
                    <p className="text-xs text-slate-400 mt-1">可提现 / 通用</p>
                </div>

                <div className="flex-1 bg-red-50 dark:bg-red-900/20 p-4 rounded-lg border border-red-100 dark:border-red-900/30">
                    <p className="text-xs text-red-500 mb-1">赠送余额 (Bonus)</p>
                    <div className="text-2xl font-bold text-red-600 dark:text-red-400 font-mono">
                        ${bonus.toLocaleString()}
                    </div>
                    <p className="text-xs text-red-400 mt-1">不可提现 / 仅限部分服务</p>
                </div>
            </div>

            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors shadow-sm whitespace-nowrap">
                立即充值
            </button>
        </div>
    );
};
