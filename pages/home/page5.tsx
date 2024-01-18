import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'

import Header from '@/components/common/header'
import IntroSection from '@/components/sections/home/intro'
import PremiumSection from '@/components/sections/home/premium'
import PaymentSection from '@/components/sections/home/payment'
import PriceSection from '@/components/sections/home/price'
import BlogSection from '@/components/sections/home/blog'
import FaqSection from '@/components/sections/faq'
import Locations from '@/components/sections/home/location'
import GameSection from '@/components/sections/home/game'

import { premiums, payments } from '@/utils/constants/common'

export default function Home(props: any) {


    return (
        <>
            <IntroSection />
            <PremiumSection
                premiums={premiums}
            />
            <PriceSection />
            <GameSection />
            <Locations />
            <FaqSection
                classname="no-bottom"
                align="center"
            />
            <BlogSection />
            <PaymentSection
                payments={payments}
            />
        </>
    )
}
