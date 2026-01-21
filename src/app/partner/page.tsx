import { WalletStatus } from "@/components/partner/WalletStatus";
import { ServiceMatrix } from "@/components/partner/ServiceMatrix";
import { SupplyChainWholesale } from "@/components/partner/SupplyChainWholesale";

export default function PartnerDashboard() {
    return (
        <div className="max-w-7xl mx-auto px-4 py-8 space-y-8">
            {/* 1. Top Status Bar (Two Wallets) */}
            <section>
                <WalletStatus />
            </section>

            {/* 2. Case Processing Matrix (SaaS) */}
            <section>
                <div className="flex items-center justify-between mb-4">
                    <h2 className="text-xl font-bold text-slate-900 dark:text-white">核心办案服务矩阵 (Case Processing Matrix)</h2>
                </div>
                <ServiceMatrix />
            </section>

            {/* 3. Supply Chain Procurement */}
            <section>
                <SupplyChainWholesale />
            </section>
        </div>
    );
}
