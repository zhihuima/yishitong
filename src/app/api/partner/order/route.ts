import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const MOCK_USER_EMAIL = 'partner@example.com';

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { productName, quantity, productCategory } = body;

        if (!productName || !quantity || quantity <= 0) {
            return NextResponse.json({ error: 'Invalid parameters' }, { status: 400 });
        }

        // 1. Get User and Wallet
        const user = await prisma.user.findUnique({
            where: { email: MOCK_USER_EMAIL },
            include: { wallet: true },
        });

        if (!user || !user.wallet) {
            return NextResponse.json({ error: 'User or Wallet not found' }, { status: 404 });
        }

        // 2. Find Product by Name
        const product = await prisma.product.findFirst({
            where: { name: productName },
        });

        if (!product) {
            return NextResponse.json({ error: `Product not found: ${productName}` }, { status: 404 });
        }

        const totalCost = product.price * quantity;
        const wallet = user.wallet;

        // 3. FINANCIAL LOGIC & RISK CONTROL
        let principalDeduction = 0;
        let bonusDeduction = 0;

        if (product.category === 'SUPPLY_CHAIN') {
            // [CRITICAL] Supply Chain MUST use Principal ONLY
            if (wallet.principalBalance < totalCost) {
                return NextResponse.json({
                    error: 'Insufficient Principal Balance. Supply Chain items cannot use Bonus.',
                    code: 'INSUFFICIENT_PRINCIPAL'
                }, { status: 403 });
            }
            principalDeduction = totalCost;
        } else {
            // SaaS / Standard can use Bonus first
            if (wallet.bonusBalance >= totalCost) {
                bonusDeduction = totalCost;
            } else {
                // Partial deduction
                bonusDeduction = wallet.bonusBalance;
                const remaining = totalCost - bonusDeduction;
                if (wallet.principalBalance < remaining) {
                    return NextResponse.json({ error: 'Insufficient Funds (Bonus + Principal)' }, { status: 403 });
                }
                principalDeduction = remaining;
            }
        }

        // 4. Transaction & Update (Atomic)
        await prisma.$transaction([
            prisma.wallet.update({
                where: { id: wallet.id },
                data: {
                    principalBalance: { increment: -principalDeduction },
                    bonusBalance: { increment: -bonusDeduction }
                }
            }),
            prisma.order.create({
                data: {
                    userId: user.id,
                    productId: product.id,
                    quantity: quantity,
                    totalAmount: totalCost,
                    pincipalDeducted: principalDeduction,
                    bonusDeducted: bonusDeduction,
                    status: 'COMPLETED'
                }
            })
        ]);

        return NextResponse.json({
            success: true,
            message: 'Order Processed',
            deduction: { principal: principalDeduction, bonus: bonusDeduction }
        });

    } catch (e) {
        console.error(e);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
