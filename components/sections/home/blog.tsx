import BBlog from '@/components/features/bBlog'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'


export default function BlogSection() {
    return (
        <section className="no-bottom">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 offset-lg-3 text-center">
                        <div className="subtitle wow fadeInUp mb-3">Latest From Us</div>
                        <h2 className="wow fadeInUp" data-wow-delay=".2s">News &amp; Promo</h2>
                        <div className="spacer-20"></div>
                    </div>
                </div>
                <div className="row g-4">
                    <BBlog
                        src="/assets/images/news/1.webp"
                        date="25.10.2023"
                        title="How to Set Up Your Own Game Server"
                        content="Dolore officia sint incididunt non excepteur ea mollit commodo ut enim reprehenderit cupidatat labore ad laborum consectetur consequat..."
                    />

                    <div className="col-lg-4 col-md-6 mb10">
                        <div className="bloglist item">
                            <div className="post-content">
                                <div className="post-image">
                                    <div className="d-tagline">
                                        <span>games</span>
                                        <span>guide</span>
                                    </div>
                                    <Image alt="" src="/assets/images/news/2.webp" width={356} height={200} style={{ height: "auto" }} />
                                </div>
                                <div className="post-text">
                                    <div className="d-date">25.10.2023</div>
                                    <h4><Link href="news-single.html">Rise in Demand for Private Game Servers<span></span></Link></h4>
                                    <p>Dolore officia sint incididunt non excepteur ea mollit commodo ut enim reprehenderit cupidatat labore ad laborum consectetur consequat...</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 mb10">
                        <div className="bloglist item">
                            <div className="post-content">
                                <div className="post-image">
                                    <div className="d-tagline">
                                        <span>games</span>
                                        <span>guide</span>
                                    </div>
                                    <Image alt="" src="/assets/images/news/3.webp" width={356} height={200} style={{ height: "auto" }} />
                                </div>
                                <div className="post-text">
                                    <div className="d-date">25.10.2023</div>
                                    <h4><Link href="news-single.html">Top Hosting Providers for Game Servers<span></span></Link></h4>
                                    <p>Dolore officia sint incididunt non excepteur ea mollit commodo ut enim reprehenderit cupidatat labore ad laborum consectetur consequat...</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}