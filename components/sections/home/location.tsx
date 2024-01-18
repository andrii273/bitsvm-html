import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import Header from '@/components/common/header'
import IntroSection from '@/components/sections/home/intro'
import PremiumSection from '@/components/sections/home/premium'
import BMap from '@/components/features/bMap'

export default function Locations() {
    return (
        <section className="no-top no-bottom jarallax">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 offset-lg-3 text-center">
                        <div className="subtitle wow fadeInUp mb-3">Server locations</div>
                        <h2 className="wow fadeInUp mb20" data-wow-delay=".2s">25 Servers Worldwide</h2>
                    </div>

                    <div className="spacer-10"></div>

                    <div className="col-lg-12 wow fadeInUp">
                        <div className="p-sm-30 pb-sm-0 mb-sm-0">
                            <BMap />
                        </div>
                    </div>
                </div>
            </div>

            <div className="no-bottom wow fadeInRight d-flex z-1000">
                <div className="de-marquee-list wow">
                    <div className="d-item">
                        <span className="d-item-txt">London</span>
                        <span className="d-item-display">
                            <i className="d-item-block"></i>
                        </span>
                        <span className="d-item-txt">Paris</span>
                        <span className="d-item-display">
                            <i className="d-item-block"></i>
                        </span>
                        <span className="d-item-txt">Frankurt</span>
                        <span className="d-item-display">
                            <i className="d-item-block"></i>
                        </span>
                        <span className="d-item-txt">Amsterdam</span>
                        <span className="d-item-display">
                            <i className="d-item-block"></i>
                        </span>
                        <span className="d-item-txt">Stockholm</span>
                        <span className="d-item-display">
                            <i className="d-item-block"></i>
                        </span>
                        <span className="d-item-txt">Helsinki</span>
                        <span className="d-item-display">
                            <i className="d-item-block"></i>
                        </span>
                        <span className="d-item-txt">Los Angeles</span>
                        <span className="d-item-display">
                            <i className="d-item-block"></i>
                        </span>
                        <span className="d-item-txt">Quebec</span>
                        <span className="d-item-display">
                            <i className="d-item-block"></i>
                        </span>
                        <span className="d-item-txt">Singapore</span>
                        <span className="d-item-display">
                            <i className="d-item-block"></i>
                        </span>
                        <span className="d-item-txt">Sydney</span>
                        <span className="d-item-display">
                            <i className="d-item-block"></i>
                        </span>
                        <span className="d-item-txt">Sau Paulo</span>
                        <span className="d-item-display">
                            <i className="d-item-block"></i>
                        </span>
                        <span className="d-item-txt">Bangkok</span>
                        <span className="d-item-display">
                            <i className="d-item-block"></i>
                        </span>
                        <span className="d-item-txt">Jakarta</span>
                        <span className="d-item-display">
                            <i className="d-item-block"></i>
                        </span>
                    </div>
                </div>
            </div>
        </section>
    )
}