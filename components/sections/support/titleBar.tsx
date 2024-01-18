import Image from "next/image"

export default function TitleBar() {
    return (
        <section id="subheader" className="jarallax">
            {/* <Image src="/assets/images/background/subheader-faq.webp" className="jarallax-img" width={1483} height={653} style={{ width: 'auth', height: 'auto' }} alt="" /> */}
            <div className="container z-1000">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="subtitle wow fadeInUp mb-3">Do you have</div>
                    </div>
                    <div className="col-lg-6">
                        <h2 className="wow fadeInUp mb20" data-wow-delay=".2s">Any questions?</h2>
                    </div>
                </div>
            </div>
        </section>
    )
}