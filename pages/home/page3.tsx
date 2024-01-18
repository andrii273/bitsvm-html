
import { Inter } from 'next/font/google'



import FaqSection from '@/components/sections/faq';
import PaymentSection from '@/components/sections/home2/payment';
import IntroSection from '@/components/sections/home3/intro';

const inter = Inter({ subsets: ['latin'] });
import { intro, prices, collections, testis } from '@/utils/constants/home3';
import { premiums } from '@/utils/constants/common';


import Marquee from '@/components/sections/home3/marquee';
import PriceSection from '@/components/sections/home3/price';
import GameSection from '@/components/sections/home3/game';
import PremiumSection from '@/components/sections/home/premium';
import TestmonialSection from '@/components/sections/home3/testimonials';


export default function Home() {
    return (
        <>
            <IntroSection
                data={intro}
            />
            <Marquee />
            <PriceSection
                prices={prices}
            />
            <GameSection
                collections={collections}
            />
            <PremiumSection
                premiums={premiums}
            />
            <TestmonialSection
                testis={testis}
            />
            <FaqSection
                align="left"
            />
            <PaymentSection />
        </>
    )
}
