import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'

import FaqSection from '@/components/sections/faq'
import CollectionTab from '@/components/sections/servers/collectionTab'
import { collections } from '@/utils/constants/game-server-1'



const inter = Inter({ subsets: ['latin'] });

export default function Home() {
    return (
        <>
            <CollectionTab
                collections={collections}
            />
            <FaqSection
                align="left"
            />
        </>
    )
}
