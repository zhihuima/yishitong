import Link from "next/link";
import { PricingCard } from "@/components/PricingCard";
import { SupplyChain } from "@/components/SupplyChain";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-zinc-50 dark:bg-black">
      {/* 1. Sticky Bar */}
      <div className="sticky top-0 z-50 w-full bg-amber-100 text-amber-900 border-b border-amber-200 px-4 py-3 text-center text-sm font-medium">
        <p>
          拿不准？先花 ¥9.9 让易博士为您做一次系统性的体检和评估：基于您提供信息生成方向性分析，仅供参考，不构成法律意见或结果保证 &gt;
        </p>
      </div>

      <main className="flex-1 w-full max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        {/* 2. Core Product Matrix */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-5xl mb-4">
              核心 SaaS 产品矩阵
            </h1>
            <p className="text-lg text-zinc-600 dark:text-zinc-400">
              三级火箭：规划版 · 文书版 · 专家版
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <PricingCard
              title="规划版 (Framework)"
              englishTitle="Easier Plan"
              price="¥ 2,980"
              slogan="“骨架我搭好，血肉您来填”"
              description="全案框架搭建与证据组装系统"
              buttonText="获取全案框架"
              features={[
                "全案龙骨搭建：系统为您生成符合 EB-1A 逻辑的申请结构",
                "证据包 (Exhibit) 自动组装：生成正式证据索引与装订格式",
                "论证逻辑锁死：预设‘法律钩子’，防止逻辑跑偏",
                "避坑指南：独家收录 500+ 拒签点排查手册",
                "❌ 不含 AI 正文撰写"
              ]}
            />
            <PricingCard
              title="文书版 (AI Writer)"
              englishTitle="Easier Draft"
              price="¥ 7,980"
              slogan="更贴合审查要点的 AI 文书辅助起草"
              description="全套文书智能生成系统"
              isPro={true}
              buttonText="立即生成文案"
              features={[
                "💎 包含 ¥2980 所有框架功能",
                "🧠 法律大模型驱动：基于 INA 移民法、25,300+ 判例训练",
                "⚖️ 审案级逻辑：预判审核点，自动生成推荐信与 PL",
                "📝 可编辑 Word：交付完整底稿",
                "🔒 实名锁定：账号绑定申请人，防中介盗用"
              ]}
            />
            <PricingCard
              title="专家版 (Expert Pro)"
              englishTitle="Easier Pro"
              price="¥ 35,800"
              slogan="“前移民官坐镇，人工双保险”"
              description="人机协同·无忧审核服务"
              buttonText="申请审核名额"
              features={[
                "💎 包含 ¥7980 所有功能",
                "👨‍⚖️ 人工介入：前移民官/资深专家 2 轮深度精修",
                "🛡️ 风控报告：模拟签证官视角，出具修改意见书",
                "✨ 表格信息录入支持：专员协助录入（需授权）"
              ]}
            />
          </div>
        </div>

        {/* 3. Anchor Section (VIP) */}
        <div className="mb-24 rounded-3xl bg-zinc-900 py-16 px-8 text-center sm:px-16 relative overflow-hidden">
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight text-white mb-2">
              Easier VIP (全案托管版)
            </h2>
            <p className="text-4xl font-bold text-amber-500 mb-6">$30,000</p>
            <p className="text-lg text-zinc-300 mb-8">
              “需要律师代理 + 全流程支持？预约首席顾问”
            </p>
            <button className="bg-white text-zinc-900 px-8 py-3 rounded-full font-semibold hover:bg-zinc-100 transition-colors">
              预约首席顾问 &gt;
            </button>
          </div>
          {/* Decorative background element could go here */}
        </div>

        {/* 4. Tech Info Section (Equivalent to Pop-up for display) */}
        <div className="mb-24 bg-blue-50 dark:bg-zinc-900/50 rounded-2xl p-8 border border-blue-100 dark:border-zinc-800">
          <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-6">Easier AI 核心技术声明</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-lg font-medium text-zinc-900 dark:text-white mb-4">为什么我们不同于通用 AI？</p>
              <p className="text-zinc-600 dark:text-zinc-400">
                我们的底层模型不仅仅是语言模型，更是法律逻辑模型。您买的不是一份文案，是一次通过大数据的“模拟法庭辩护”。
              </p>
            </div>
            <ul className="space-y-3 text-zinc-600 dark:text-zinc-400">
              <li className="flex gap-2">
                <span>①</span> <span><strong>深度学习美国移民法 (INA)：</strong> 每一句陈述都建立在合法合规的法条基础之上。</span>
              </li>
              <li className="flex gap-2">
                <span>②</span> <span><strong>实时同步政策手册 (Policy Manual)：</strong> USCIS 的审核标准在变，我们的 AI 也在变。</span>
              </li>
              <li className="flex gap-2">
                <span>③</span> <span><strong>内化 25,300 卷 AAO 判例：</strong> 系统吞噬了过去 10 年所有的上诉案例。</span>
              </li>
            </ul>
          </div>
        </div>

        {/* 5. Supply Chain Section */}
        <SupplyChain />

      </main>

      {/* Footer */}
      <footer className="bg-zinc-100 dark:bg-zinc-900 border-t border-zinc-200 dark:border-zinc-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm text-zinc-500">
            © 2024 EasierTong. All rights reserved. 移事通产品定价与展示系统
          </p>
        </div>
      </footer>
    </div>
  );
}
