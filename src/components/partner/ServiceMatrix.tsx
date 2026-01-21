import React from 'react';

export const ServiceMatrix: React.FC = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Card A: Self-Service */}
            <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start mb-4">
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">单案智能生成 (AI Generation)</h3>
                    <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs font-semibold">Self-Service</span>
                </div>

                <div className="flex flex-col gap-1 mb-6">
                    <div className="flex items-baseline gap-2">
                        <span className="text-sm text-slate-500">会员进货价:</span>
                        <span className="text-3xl font-bold text-green-600">$200</span>
                        <span className="text-sm text-slate-500">/案</span>
                    </div>
                    <div className="flex items-baseline gap-2 text-sm text-slate-400">
                        <span>散户原价:</span>
                        <span className="line-through">$1,000 /案</span>
                    </div>
                    <div className="mt-2 inline-block bg-red-100 text-red-600 text-xs px-2 py-1 rounded font-medium self-start">
                        单案立省 $800
                    </div>
                </div>

                <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-100 dark:border-slate-800">
                    <div className="flex items-center border border-slate-300 rounded-lg">
                        <button className="px-3 py-1 text-slate-500 hover:bg-slate-100">-</button>
                        <span className="px-3 py-1 text-sm font-mono border-x border-slate-300">1</span>
                        <button className="px-3 py-1 text-slate-500 hover:bg-slate-100">+</button>
                    </div>
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700">
                        立即充值生成
                    </button>
                </div>
            </div>

            {/* Card B: Managed Service */}
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-xl p-6 shadow-lg relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10 text-9xl">👑</div>
                <div className="relative z-10">
                    <div className="flex justify-between items-start mb-4">
                        <div className="flex items-center gap-2">
                            <span className="text-amber-400">👑</span>
                            <h3 className="text-lg font-bold">VIP 全案托管服务</h3>
                        </div>
                        <span className="bg-amber-500/20 text-amber-300 px-2 py-1 rounded text-xs font-semibold">Managed</span>
                    </div>

                    <div className="flex flex-col gap-1 mb-6">
                        <div className="flex items-baseline gap-2">
                            <span className="text-sm text-slate-400">会员进货价:</span>
                            <span className="text-3xl font-bold text-green-400">$1,500</span>
                            <span className="text-sm text-slate-400">/案</span>
                        </div>
                        <div className="flex items-baseline gap-2 text-sm text-slate-500">
                            <span>散户原价:</span>
                            <span className="line-through">$4,800 /案</span>
                        </div>
                        <div className="mt-2 inline-block bg-red-500 text-white text-xs px-2 py-1 rounded font-medium self-start">
                            单案立省 $3,300
                        </div>
                    </div>

                    <div className="mb-6 space-y-1 text-sm text-slate-300">
                        <p>✅ 自身文案代填表</p>
                        <p>✅ AI 全套生成</p>
                        <p>✅ 专家深度润色</p>
                    </div>

                    <button className="w-full bg-amber-500 hover:bg-amber-600 text-black font-bold py-3 rounded-lg transition-colors">
                        提交托管需求
                    </button>
                </div>
            </div>
        </div>
    );
};
