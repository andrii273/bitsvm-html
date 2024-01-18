import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import Header from '@/components/common/header'
import IntroSection from '@/components/sections/home/intro'
import PremiumSection from '@/components/sections/home/premium'
import BCollection from '@/components/features/bCollection'
import BButton from '@/components/features/bButton'


export default function GameSection({ collections }: any) {
    return (
        <section>
            <div className="container z-1000">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="subtitle wow fadeInUp mb-3">Most complete</div>
                        <h2 className="wow fadeInUp mb20" data-wow-delay=".2s">Game Collection</h2>
                    </div>
                    <div className="col-lg-6 text-lg-end">
                        <BButton
                            classname="btn-main mb-sm-30"
                            content="View all games"
                            url="/servers/game-server-1"
                        />
                    </div>
                </div>
                <div className="row g-4 sequence">
                    {collections.map((collection: any) => (
                        <BCollection
                            classname="col-lg-4 col-md-6 gallery-item"
                            offsale={collection.offsale}
                            start={collection.start}
                            title={collection.title}
                            src={collection.src}
                        />
                    ))}

                </div>
            </div>
        </section>
    )
}