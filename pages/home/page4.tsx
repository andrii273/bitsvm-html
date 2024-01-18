
import { Inter } from 'next/font/google'

import InfoSection from '@/components/sections/home2/infoSection';
import GameSection from '@/components/sections/home2/game';
import Locations from '@/components/sections/home2/location';
import BMaquee from '@/components/features/bMaquee';
import Banner1 from '@/components/sections/home2/banner1';
import PremiumSection from '@/components/sections/home2/premium';
import Banner2 from '@/components/sections/home2/banner2';
import Banner0 from '@/components/sections/home4/banner0';


import { premiums } from '@/utils/constants/common';
import FaqSection from '@/components/sections/faq';
import PaymentSection from '@/components/sections/home2/payment';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
    return (
        <>
            <Banner0 />
            <InfoSection />
            <GameSection />
            <Banner1 />
            <PremiumSection
                premiums={premiums}
            />
            <Banner2 />
            <FaqSection
                align="left"
            />
            <PaymentSection />
        </>
    )
}
