import BPriceBox2 from '@/components/features/bPriceBox2'

export default function PriceSection({ prices }: any) {
    return (
        <section id="compare-plans" className="no-bottom">
            {/* <img src="images/background/5.webp" class="jarallax-img" alt="">
        <div class="de-gradient-edge-top"></div>
        <div class="de-gradient-edge-bottom"></div> */}
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
                    {
                        prices.map((one: any) => (
                            <BPriceBox2
                                active={one.active}
                                slot={one.slot}
                                price={one.price}
                                normal={one.noraml}
                                country={one.country}
                                features={one.features}
                                delay={one.delay}
                            />
                        ))
                    }

                </div>
            </div>
        </section>
    )
}