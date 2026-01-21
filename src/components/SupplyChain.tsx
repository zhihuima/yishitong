"use client";

import React, { useState } from 'react';

type Tab = 'scholar' | 'business';

const resources = {
    scholar: [
        { name: "国际出版支持服务", standard: "含 8 篇", price: "¥ 34,000", desc: "提供选题策划、期刊匹配及投稿指导，助力成果被国际核心数据库收录。" },
        { name: "学术成就影响力提升/推广服务", standard: "学术影响力引证提升", price: "¥ 18,000", desc: "通过学术社区推广与同行交流，自然提升论文的国际关注度与被引频次。" },
        { name: "同行评审席位推荐", standard: "含 5 次 国际审稿机会", price: "¥ 9,000", desc: "提供期刊/会议审稿资格申请咨询与材料准备辅导。" },
        { name: "权威专家证言采集", standard: "含 2 封 顶尖专家签字推荐信", price: "¥ 18,000", desc: "在申请人真实经历基础上，提供推荐信结构与表达优化及专家沟通协调支持。" },
        { name: "成果商业价值评估函", standard: "含 1 封 权威机构价值证明", price: "¥ 14,500", desc: "由权威机构出具的“技术应用价值”或“商业落地前景”评估报告。" },
        { name: "国际会议受邀/任职", standard: "含 1 个 关键角色证明", price: "¥ 7,200", desc: "协助获取国际学术会议的演讲邀请、组委会聘书或关键角色证明。" },
        { name: "国际学术组织会籍", standard: "含 3 个 行业协会", price: "¥ 7,200", desc: "分析资质，指导并协助申请加入国家级/国际级学术组织。" },
        { name: "技术产权布局与确权", standard: "含 4 个 原创专利/软著", price: "¥ 20,000", desc: "协助将您的隐性科研成果转化为显性的专利或软著资产，完成法律确权。" },
    ],
    business: [
        { name: "行业领袖舆论矩阵", standard: "含 3 篇 主流网媒专访策划", price: "¥ 7,200", desc: "提供媒体传播策划与发布协调，内容须基于真实经历与可核验信息。" },
        { name: "商业模式知识产权固化", standard: "含 5 个 商业软著/课题协助申报", price: "¥ 25,000", desc: "挖掘企业管理与商业模式中的创新点，协助申请软件著作权或商业方法专利。" },
        { name: "行业赛事/标准评审", standard: "含 5 次", price: "¥ 9,000", desc: "提供学术成就支持服务以提升审稿可能性" },
        { name: "商业刊物发表", standard: "含 5 篇 学术文章辅导", price: "¥ 20,000", desc: "协助您在商业评论期刊或行业垂直媒体上发表专业署名文章。" },
        { name: "行业大咖独立推荐", standard: "含 2 封 推荐信辅导", price: "¥ 18,000", desc: "提供内容优化服务，帮助打造贴合经历、凸显优势的优质推荐信。" },
        { name: "北美商业合作意向", standard: "含 1 份 合作意向书 (LOI)辅导", price: "¥ 12,800", desc: "协助对接美国本土企业，获取真实有效的合作意向书或业务邀请函。" },
        { name: "国际商会/协会会籍", standard: "含 3 个 行业协会入会协助", price: "¥ 7,200", desc: "指导您申请加入高门槛的国际商会、理事会或行业联合会。" },
    ]
};

export const SupplyChain: React.FC = () => {
    const [activeTab, setActiveTab] = useState<Tab>('scholar');

    return (
        <div className="w-full max-w-6xl mx-auto py-16 px-4">
            <div className="flex flex-col items-center mb-12">
                <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-6">供应链资源专区 (Supply Chain)</h2>
                <div className="flex p-1 bg-zinc-100 dark:bg-zinc-800 rounded-xl">
                    <button
                        onClick={() => setActiveTab('scholar')}
                        className={`px-6 py-2.5 rounded-lg text-sm font-medium transition-all ${activeTab === 'scholar'
                                ? 'bg-white text-zinc-900 shadow-sm dark:bg-zinc-700 dark:text-white'
                                : 'text-zinc-500 hover:text-zinc-900 dark:text-zinc-400'
                            }`}
                    >
                        学术科研加速包 (Scholar Boost)
                    </button>
                    <button
                        onClick={() => setActiveTab('business')}
                        className={`px-6 py-2.5 rounded-lg text-sm font-medium transition-all ${activeTab === 'business'
                                ? 'bg-white text-zinc-900 shadow-sm dark:bg-zinc-700 dark:text-white'
                                : 'text-zinc-500 hover:text-zinc-900 dark:text-zinc-400'
                            }`}
                    >
                        商业领袖影响力包 (Business Boost)
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {resources[activeTab].map((item, index) => (
                    <div key={index} className="flex flex-col p-6 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl hover:border-blue-500/50 transition-colors">
                        <div className="flex justify-between items-start mb-2">
                            <h3 className="font-semibold text-zinc-900 dark:text-white">{item.name}</h3>
                            <span className="text-blue-600 font-bold">{item.price}</span>
                        </div>
                        <p className="text-xs text-zinc-500 font-mono mb-3 bg-zinc-50 dark:bg-zinc-800/50 inline-block px-2 py-1 rounded w-fit">
                            {item.standard}
                        </p>
                        <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                            {item.desc}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};
