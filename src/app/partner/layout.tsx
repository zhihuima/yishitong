import Link from "next/link";

export default function PartnerLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
            {/* Top Navigation / Status Bar would go here if not part of the page */}
            <div className="border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 px-4 py-2 flex justify-between items-center text-sm">
                <div className="font-semibold text-slate-700 dark:text-slate-200">
                    移事通合伙人中台 (Partner Console)
                </div>
                <div className="flex gap-4">
                    {/* Placeholder for simple status checks or links */}
                    <Link href="/" className="text-slate-500 hover:text-blue-600">返回官网</Link>
                </div>
            </div>

            {children}
        </div>
    );
}
