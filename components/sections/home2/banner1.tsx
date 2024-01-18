import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import Header from '@/components/common/header'
import IntroSection from '@/components/sections/home/intro'
import PremiumSection from '@/components/sections/home/premium'
import BCollection from '@/components/features/bCollection'
import BButton from '@/components/features/bButton'


export default function Banner1() {
    return (
        <section className="no-bottom">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="padding60 sm-padding40 jarallax position-relative">
                            {/* <Image src="/assets/images/background/1.webp" width={1116} height={737} style={{ width: "auto", height: "auto" }} className="jarallax-img" alt="" /> */}
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="subtitle wow fadeInUp mb-3">Start your game</div>
                                    <h2 className="wow fadeInUp" data-wow-delay=".2s">Unlock Your Gaming Full Potential</h2>
                                    <p className="wow fadeInUp">Aute esse non magna elit dolore dolore dolor sit est. Ea occaecat ea duis laborum reprehenderit id cillum tempor cupidatat qui nisi proident nostrud dolore.</p>
                                    <div className="spacer-10"></div>
                                    <a className="btn-main mb10 wow fadeInUp" href="game-server-1.html"><span>Order Your Game Server Now</span></a>
                                </div>
                            </div>

                            <Image src="/assets/images/misc/avatar.webp" className="sm-hide position-absolute bottom-0 end-0 wow fadeIn" width={406} height={550} style={{ width: "auto", height: "auto" }} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}