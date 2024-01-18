import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import Header from '@/components/common/header'
import IntroSection from '@/components/sections/home/intro'
import PremiumSection from '@/components/sections/home/premium'
import BCollection from '@/components/features/bCollection'
import BButton from '@/components/features/bButton'


export default function GameSection() {
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
                    <BCollection
                        classname="col-lg-3 col-md-6 gallery-item"
                        offsale={20}
                        start={14.99}
                        title="Thunder and City"
                        src="/assets/images/covers/1.webp"
                    />

                    <div className="col-lg-3 col-md-6 gallery-item">
                        <div className="de-item wow">
                            <div className="d-overlay">
                                <div className="d-label">
                                    20% OFF
                                </div>
                                <div className="d-text">
                                    <h4>Mystic Racing Z</h4>
                                    <p className="d-price">Starting at <span className="price">$14.99</span></p>
                                    <Link className="btn-main btn-fullwidth" href="pricing-table-one.html"><span>Order Now</span></Link>
                                </div>
                            </div>
                            <Image src="/assets/images/covers/2.webp" className="Image-fluid" width={261} height={0} style={{ width: "100%", height: "auto" }} alt="" />
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 gallery-item">
                        <div className="de-item wow">
                            <div className="d-overlay">
                                <div className="d-label">
                                    20% OFF
                                </div>
                                <div className="d-text">
                                    <h4>Silent Wrath</h4>
                                    <p className="d-price">Starting at <span className="price">$14.99</span></p>
                                    <Link className="btn-main btn-fullwidth" href="pricing-table-one.html"><span>Order Now</span></Link>
                                </div>
                            </div>
                            <Image src="/assets/images/covers/3.webp" className="Image-fluid " width={261} height={0} style={{ width: "100%", height: "auto" }} alt="" />
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 gallery-item">
                        <div className="de-item wow">
                            <div className="d-overlay">
                                <div className="d-label">
                                    20% OFF
                                </div>
                                <div className="d-text">
                                    <h4>Funk Dungeon</h4>
                                    <p className="d-price">Starting at <span className="price">$14.99</span></p>
                                    <Link className="btn-main btn-fullwidth" href="pricing-table-one.html"><span>Order Now</span></Link>
                                </div>
                            </div>
                            <Image src="/assets/images/covers/4.webp" className="Image-fluid " width={261} height={0} style={{ width: "100%", height: "auto" }} alt="" />
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 gallery-item">
                        <div className="de-item wow">
                            <div className="d-overlay">
                                <div className="d-label">
                                    20% OFF
                                </div>
                                <div className="d-text">
                                    <h4>Galactic Odyssey</h4>
                                    <p className="d-price">Starting at <span className="price">$14.99</span></p>
                                    <Link className="btn-main btn-fullwidth" href="pricing-table-one.html"><span>Order Now</span></Link>
                                </div>
                            </div>
                            <Image src="/assets/images/covers/5.webp" className="Image-fluid " width={261} height={0} style={{ width: "100%", height: "auto" }} alt="" />
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 gallery-item">
                        <div className="de-item wow">
                            <div className="d-overlay">
                                <div className="d-label">
                                    20% OFF
                                </div>
                                <div className="d-text">
                                    <h4>Warfare Legends</h4>
                                    <p className="d-price">Starting at <span className="price">$14.99</span></p>
                                    <Link className="btn-main btn-fullwidth" href="pricing-table-one.html"><span>Order Now</span></Link>
                                </div>
                            </div>
                            <Image src="/assets/images/covers/6.webp" className="Image-fluid " width={261} height={0} style={{ width: "100%", height: "auto" }} alt="" />
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 gallery-item">
                        <div className="de-item wow">
                            <div className="d-overlay">
                                <div className="d-label">
                                    20% OFF
                                </div>
                                <div className="d-text">
                                    <h4>Raceway Revolution</h4>
                                    <p className="d-price">Starting at <span className="price">$14.99</span></p>
                                    <Link className="btn-main btn-fullwidth" href="pricing-table-one.html"><span>Order Now</span></Link>
                                </div>
                            </div>
                            <Image src="/assets/images/covers/7.webp" className="Image-fluid " width={261} height={0} style={{ width: "100%", height: "auto" }} alt="" />
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 gallery-item sandbox">
                        <div className="de-item wow">
                            <div className="d-overlay">
                                <div className="d-label">
                                    20% OFF
                                </div>
                                <div className="d-text">
                                    <h4>Starborne Odyssey</h4>
                                    <p className="d-price">Starting at <span className="price">$14.99</span></p>
                                    <Link className="btn-main btn-fullwidth" href="pricing-table-one.html"><span>Order Now</span></Link>
                                </div>
                            </div>
                            <Image src="/assets/images/covers/8.webp" className="Image-fluid" width={261} height={0} style={{ width: "100%", height: "auto" }} alt="" />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}