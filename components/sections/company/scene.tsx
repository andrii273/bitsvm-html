import Image from "next/image"

export default function Scene() {
    return (
        <section className="no-bottom wow fadeInUp">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3">
                        <div className="subtitle mb20">Our solid team</div>
                        <h2 className="mb20 wow fadeInUp">Behind the scene</h2>
                    </div>

                    <div className="col-lg-3 col-md-6 col-sm-6 mb-sm-30">
                        <div className="f-profile text-center">
                            <div className="fp-wrap f-invert">
                                <div className="fpw-overlay">
                                    <div className="fpwo-wrap">
                                        <div className="fpwow-icons">
                                            <a href="#"><i className="fa-brands fa-facebook fa-lg"></i></a>
                                            <a href="#"><i className="fa-brands fa-twitter fa-lg"></i></a>
                                            <a href="#"><i className="fa-brands fa-linkedin fa-lg"></i></a>
                                            <a href="#"><i className="fa-brands fa-instagram fa-lg"></i></a>
                                            <a href="#"><i className="fa-brands fa-tiktok fa-lg"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="fpw-overlay-btm"></div>
                                <Image src="/assets/images/team/1.webp" className="fp-image img-fluid" width={301} height={301} alt="" />
                            </div>

                            <h4>Robyn Peel</h4>
                            CEO Founder
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 col-sm-6 mb-sm-30">
                        <div className="f-profile text-center">
                            <div className="fp-wrap f-invert">
                                <div className="fpw-overlay">
                                    <div className="fpwo-wrap">
                                        <div className="fpwow-icons">
                                            <a href="#"><i className="fa-brands fa-facebook fa-lg"></i></a>
                                            <a href="#"><i className="fa-brands fa-twitter fa-lg"></i></a>
                                            <a href="#"><i className="fa-brands fa-linkedin fa-lg"></i></a>
                                            <a href="#"><i className="fa-brands fa-instagram fa-lg"></i></a>
                                            <a href="#"><i className="fa-brands fa-tiktok fa-lg"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="fpw-overlay-btm"></div>
                                <Image src="/assets/images/team/3.webp" className="fp-image img-fluid" width={301} height={301} alt="" />
                            </div>

                            <h4>Anna Shepard</h4>
                            Director
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 col-sm-6 mb-sm-30">
                        <div className="f-profile text-center">
                            <div className="fp-wrap f-invert">
                                <div className="fpw-overlay">
                                    <div className="fpwo-wrap">
                                        <div className="fpwow-icons">
                                            <a href="#"><i className="fa-brands fa-facebook fa-lg"></i></a>
                                            <a href="#"><i className="fa-brands fa-twitter fa-lg"></i></a>
                                            <a href="#"><i className="fa-brands fa-linkedin fa-lg"></i></a>
                                            <a href="#"><i className="fa-brands fa-instagram fa-lg"></i></a>
                                            <a href="#"><i className="fa-brands fa-tiktok fa-lg"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="fpw-overlay-btm"></div>
                                <Image src="/assets/images/team/4.webp" className="fp-image img-fluid" width={301} height={301} alt="" />
                            </div>

                            <h4>Fynley Wilkinson</h4>
                            Developer
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}