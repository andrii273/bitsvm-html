import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import Header from '@/components/common/header'
import IntroSection from '@/components/sections/home/intro'
import PremiumSection from '@/components/sections/home/premium'
import BPriceBox from '@/components/features/bPriceBox'

export default function PriceSection() {
    return (
        <section id="compare-plans" className="no-bottom">
            <div className="container z-1000">
                <div className="row">
                    <div className="col-lg-6 offset-lg-3 text-center">
                        <div className="subtitle wow fadeInUp mb-3">Pricing Plans</div>
                        <h2 className="wow fadeInUp mb20" data-wow-delay=".2s">Choose plan for you</h2>
                        <div className="switch-set">
                            <div>Monthly Plan</div>
                            <div><input id="sw-1" className="switch" type="checkbox" /></div>
                            <div>Yearly Plan</div>
                            <div className="spacer-20"></div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="row">
                        <BPriceBox
                            classname="col-lg-4 mb-sm-30 wow fadeInRight"
                            title="Warrior"
                            stars={1}
                            slots="40"
                            memory="4"
                            value="14.99"
                            perslot="0.50"
                            feature={false}
                            delay=".2s"
                        />

                        <BPriceBox
                            classname="col-lg-4 mb-sm-30 wow fadeInRight"
                            title="General"
                            stars={3}
                            slots="60"
                            memory="8"
                            value="19.99"
                            perslot="0.50"
                            feature={true}
                            delay=".4s"
                        />
                        <BPriceBox
                            classname="col-lg-4 mb-sm-30 wow fadeInRight"
                            title="Warrior"
                            stars={5}
                            slots="125"
                            memory="46"
                            value="29.99"
                            perslot="0.40"
                            feature={false}
                            delay=".6s"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}