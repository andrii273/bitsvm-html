import BButton from '@/components/features/bButton'
import Link from 'next/link'

export default function IntroSection() {
    return (
        <section className="full-height no-top no-bottom jarallax" data-video-src="https://www.youtube.com/watch?v=QB2DfxkaBeU">
            {/* <div className="de-gradient-edge-top"></div>
              <div className="de-gradient-edge-bottom"></div> */}
            <div className="intro-video">
                <video loop autoPlay>
                    <source
                        src="https://www.youtube.com/watch?v=QB2DfxkaBeU"
                        type="video/mp4"
                    />
                </video>
            </div>
            <div className="overlay-bg t50 no-top no-bottom">
                <div className="v-center">
                    <div className="container z-1000">
                        <div className="row align-items-center">
                            <div className="col-lg-10 offset-lg-1 text-center">
                                <div className="subtitle blink mb-4">Servers Are Available</div>
                                <h1 className="mb-0 wow fadeInUp">Minecraft Server Hosting</h1>
                            </div>
                            <div className="col-lg-6 offset-lg-3 text-center text-white">
                                <p className="wow fadeInUp">Aute velit non excepteur in eiusmod proident aute qui ullamco incididunt aliqua aliqua velit cillum deserunt dolore consectetur excepteur magna dolor enim voluptate dolore irure nulla culpa sint nulla do.</p>
                                <BButton
                                    classname="btn-main wow fadeInUp"
                                    url="#compare-plans"
                                    content="COMPARE OUR PLANS"
                                />

                                <div className="spacer-single"></div>

                                <div className="de-rating-ext wow fadeInUp" data-wow-delay=".4s">
                                    <span className="d-stars">
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                    </span>
                                    <span className="d-val">4.85</span>
                                    based on <strong>14086</strong> reviews.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}