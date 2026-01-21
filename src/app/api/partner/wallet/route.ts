import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const MOCK_USER_EMAIL = 'partner@example.com';

export async function GET() {
    try {
        const user = await prisma.user.findUnique({
            where: { email: MOCK_USER_EMAIL },
            include: { wallet: true },
        });

        if (!user || !user.wallet) {
            return NextResponse.json({ principal: 0, bonus: 0 });
        }

        return NextResponse.json({
            principal: user.wallet.principalBalance,
            bonus: user.wallet.bonusBalance
        });
    } catch (e) {
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
