"use client";

import React, { useState } from 'react';

type Tab = 'scholar' | 'business';

// B-end specific data with wholesale prices
const wholesaleResources = {
    scholar: [
        { id: 1, name: "国际科研成果发表策划", unit: "1 篇", price: 300, desc: "普通刊物 $300/篇" },
        { id: 2, name: "学术影响力引证建设", unit: "50 次/组", price: 1500, desc: "50 次/组" },
        { id: 3, name: "同行评审席位推荐", unit: "1 次", price: 144, desc: "$144/次" },
        { id: 4, name: "权威专家证言采集", unit: "1 封", price: 900, desc: "$900/封" },
        { id: 5, name: "技术产权布局与确权", unit: "1 个", price: 400, desc: "$400/个" },
        { id: 6, name: "成果商业价值评估函", unit: "1 封", price: 1500, desc: "$1,500/封" },
        { id: 7, name: "国际会议受邀/任职规划", unit: "1 个", price: 500, desc: "$500/个" },
        { id: 8, name: "国际学术组织会籍咨询", unit: "1 个", price: 250, desc: "$250/个" },
    ],
    business: [
        { id: 9, name: "行业领袖舆论矩阵构建", unit: "1 篇", price: 170, desc: "$170/篇" },
        { id: 10, name: "商业模式知识产权布局", unit: "1 个", price: 400, desc: "$400/个" },
        { id: 11, name: "行业赛事/标准评审席位", unit: "1 次", price: 144, desc: "$144/次" },
        { id: 12, name: "商业刊物发表指导", unit: "1 篇", price: 320, desc: "$320/篇" },
        { id: 13, name: "行业大咖独立推荐", unit: "1 封", price: 900, desc: "$900/封" },
        { id: 14, name: "北美商业合作意向规划", unit: "1 份", price: 1200, desc: "$1,200/份" },
        { id: 15, name: "国际商会/协会会籍咨询", unit: "1 个", price: 250, desc: "$250/个" },
    ]
};

export const SupplyChainWholesale: React.FC = () => {
    const [activeTab, setActiveTab] = useState<Tab>('scholar');
    const [quantities, setQuantities] = useState<Record<number, number>>({});

    const updateQuantity = (id: number, delta: number) => {
        setQuantities(prev => {
            const current = prev[id] || 0;
            const next = Math.max(0, current + delta);
            return { ...prev, [id]: next };
        });
    };

    const calculateTotal = () => {
        let total = 0;
        Object.entries(quantities).forEach(([idStr, qty]) => {
            const id = parseInt(idStr);
            const item = [...wholesaleResources.scholar, ...wholesaleResources.business].find(i => i.id === id);
            if (item) {
                total += item.price * qty;
            }
        });
        return total;
    };

    const totalAmount = calculateTotal();

    return (
        <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm">
            <div className="flex flex-col md:flex-row justify-between items-center mb-6">
                <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4 md:mb-0">供应链资源采购 (Supply Chain)</h2>
                <div className="flex bg-slate-100 dark:bg-slate-800 rounded-lg p-1">
                    <button
                        onClick={() => setActiveTab('scholar')}
                        className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${activeTab === 'scholar' ? 'bg-white dark:bg-slate-700 shadow text-slate-900 dark:text-white' : 'text-slate-500 hover:text-slate-900'}`}
                    >
                        学术科研包
                    </button>
                    <button
                        onClick={() => setActiveTab('business')}
                        className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${activeTab === 'business' ? 'bg-white dark:bg-slate-700 shadow text-slate-900 dark:text-white' : 'text-slate-500 hover:text-slate-900'}`}
                    >
                        商业领袖包
                    </button>
                </div>
            </div>

            <div className="overflow-x-auto">
                <table className="w-full text-left text-sm">
                    <thead>
                        <tr className="border-b border-slate-200 dark:border-slate-800">
                            <th className="pb-3 text-slate-500 font-medium">资源名称</th>
                            <th className="pb-3 text-slate-500 font-medium">B 端进货单位</th>
                            <th className="pb-3 text-slate-500 font-medium">B 端会员单价</th>
                            <th className="pb-3 text-slate-500 font-medium text-right">采购数量</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                        {wholesaleResources[activeTab].map((item) => (
                            <tr key={item.id} className="group hover:bg-slate-50 dark:hover:bg-slate-800/50">
                                <td className="py-3 pr-4 font-medium text-slate-900 dark:text-white">{item.name}</td>
                                <td className="py-3 px-4 text-slate-500">{item.unit}</td>
                                <td className="py-3 px-4 font-mono font-bold text-blue-600">${item.price}</td>
                                <td className="py-3 pl-4 text-right">
                                    <div className="inline-flex items-center border border-slate-300 dark:border-slate-700 rounded-lg bg-white dark:bg-slate-800">
                                        <button
                                            onClick={() => updateQuantity(item.id, -1)}
                                            className="px-3 py-1 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-l-lg disabled:opacity-50"
                                            disabled={!quantities[item.id]}
                                        >
                                            -
                                        </button>
                                        <span className="w-12 text-center font-mono text-slate-900 dark:text-white">
                                            {quantities[item.id] || 0}
                                        </span>
                                        <button
                                            onClick={() => updateQuantity(item.id, 1)}
                                            className="px-3 py-1 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-r-lg"
                                        >
                                            +
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Checkout Bar Logic Preview */}
            {totalAmount > 0 && (
                <div className="mt-8 border-t border-slate-200 dark:border-slate-800 pt-6">
                    <div className="flex flex-col md:flex-row justify-between items-end gap-4">
                        <div className="space-y-1 w-full md:w-auto">
                            <h4 className="font-medium text-slate-900 dark:text-white mb-2">已选清单:</h4>
                            {Object.entries(quantities).map(([idStr, qty]) => {
                                if (qty === 0) return null;
                                const id = parseInt(idStr);
                                const item = [...wholesaleResources.scholar, ...wholesaleResources.business].find(i => i.id === id);
                                if (!item) return null;
                                return (
                                    <div key={id} className="text-sm text-slate-500 flex justify-between gap-8">
                                        <span>{item.name} x {qty}</span>
                                        <span>${item.price * qty}</span>
                                    </div>
                                );
                            })}
                        </div>

                        <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-lg w-full md:w-80">
                            <div className="flex justify-between items-baseline mb-4">
                                <span className="text-slate-500">总金额 (Total):</span>
                                <span className="text-2xl font-bold text-slate-900 dark:text-white">${totalAmount}</span>
                            </div>

                            <div className="mb-4">
                                <p className="text-xs font-semibold text-slate-900 dark:text-white mb-2">支付方式:</p>
                                <label className="flex items-center gap-2 text-sm cursor-pointer p-2 border border-blue-200 bg-blue-50 rounded-lg text-blue-900">
                                    <input type="radio" name="payment" checked readOnly className="text-blue-600" />
                                    <span>余额支付 (Balance) - 仅扣除本金</span>
                                </label>
                            </div>

                            <button
                                onClick={async () => {
                                    try {
                                        // Check out each item in the quantities map
                                        for (const [idStr, qty] of Object.entries(quantities)) {
                                            if (qty <= 0) continue;
                                            const id = parseInt(idStr);
                                            const item = [...wholesaleResources.scholar, ...wholesaleResources.business].find(i => i.id === id);
                                            if (!item) continue;

                                            const res = await fetch('/api/partner/order', {
                                                method: 'POST',
                                                headers: { 'Content-Type': 'application/json' },
                                                body: JSON.stringify({
                                                    productName: item.name,
                                                    quantity: qty,
                                                    productCategory: 'SUPPLY_CHAIN' // Hint to backend
                                                })
                                            });

                                            if (!res.ok) {
                                                const err = await res.json();
                                                alert(`Error buying ${item.name}: ${err.error}`);
                                                return;
                                            }
                                        }
                                        alert('Order Placed Successfully! Balance updated.');
                                        window.location.reload(); // Simple refresh to show new balance
                                    } catch (e) {
                                        alert('Network Error');
                                    }
                                }}
                                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg shadow-sm"
                            >
                                确认下单
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};
