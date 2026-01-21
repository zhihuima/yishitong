import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    // 1. Clean up existing data
    await prisma.transaction.deleteMany();
    await prisma.order.deleteMany();
    await prisma.product.deleteMany();
    await prisma.wallet.deleteMany();
    await prisma.user.deleteMany();

    console.log('🧹 Cleaned up database');

    // 2. Create Partner User
    const partner = await prisma.user.create({
        data: {
            email: 'partner@example.com',
            name: '金牌合伙人',
            role: 'PARTNER',
            membershipExpiry: new Date('2026-01-01'),
            wallet: {
                create: {
                    principalBalance: 5000.0, // $5,000 Real Money
                    bonusBalance: 2000.0,     // $2,000 Gift Money
                },
            },
        },
    });

    console.log(`👤 Created Partner: ${partner.email}`);

    // 3. Create Products (SaaS)
    await prisma.product.createMany({
        data: [
            {
                name: '单案智能生成 (AI Generation)',
                category: 'SAAS',
                price: 1000,
                memberPrice: 200,
                description: 'Self-Service AI Generation',
            },
            {
                name: 'VIP 全案托管服务 (Managed)',
                category: 'SAAS',
                price: 4800,
                memberPrice: 1500,
                description: 'Full Service Managed by Experts',
            },
        ],
    });

    // 4. Create Products (Supply Chain - Scholar)
    // prices strictly from requirements
    const scholarItems = [
        { name: "国际科研成果发表策划", price: 300 },
        { name: "学术影响力引证建设", price: 1500 },
        { name: "同行评审席位推荐", price: 144 },
        { name: "权威专家证言采集", price: 900 },
        { name: "技术产权布局与确权", price: 400 },
        { name: "成果商业价值评估函", price: 1500 },
        { name: "国际会议受邀/任职规划", price: 500 },
        { name: "国际学术组织会籍咨询", price: 250 },
    ];

    for (const item of scholarItems) {
        await prisma.product.create({
            data: {
                name: item.name,
                category: 'SUPPLY_CHAIN',
                price: item.price, // B-end price is the standard price here
                memberPrice: item.price,
                description: 'Scholar Boost SKU',
            }
        });
    }

    // 5. Create Products (Supply Chain - Business)
    const businessItems = [
        { name: "行业领袖舆论矩阵构建", price: 170 },
        { name: "商业模式知识产权布局", price: 400 },
        { name: "行业赛事/标准评审席位", price: 144 },
        { name: "商业刊物发表指导", price: 320 },
        { name: "行业大咖独立推荐", price: 900 },
        { name: "北美商业合作意向规划", price: 1200 },
        { name: "国际商会/协会会籍咨询", price: 250 },
    ];

    for (const item of businessItems) {
        await prisma.product.create({
            data: {
                name: item.name,
                category: 'SUPPLY_CHAIN',
                price: item.price,
                memberPrice: item.price,
                description: 'Business Boost SKU',
            }
        });
    }

    console.log('📦 Created Products');
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
