import Image from "next/image"

export default function PricingBrand(props: any) {
    return (
        <section id="subheader" className="jarallax">
            {/* <div className="de-gradient-edge-bottom"></div> */}
            {/* <Image src="/asssets/images/background/subheader-game.webp" className="jarallax-img" width={173} height={230} alt="" /> */}
            <div className="container z-1000">
                <div className="row gx-5 align-items-center">
                    <div className="col-lg-2 d-lg-block d-none">
                        <Image src="/assets/images/covers/1.webp" className="img-fluid wow fadeInUp" width={173} height={230} alt="" />
                    </div>
                    <div className="col-lg-6">
                        <div className="subtitle wow fadeInUp mb-3">Server hosting</div>
                        <h2 className="wow fadeInUp mb20" data-wow-delay=".2s">Thunder and City</h2>
                        <div className="de-rating-ext wow fadeInUp" data-wow-delay=".4s">
                            <span className="d-stars">
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star-half"></i>
                            </span>
                            <span className="d-val">4.75</span>
                            based on <strong>4086</strong> reviews.
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}