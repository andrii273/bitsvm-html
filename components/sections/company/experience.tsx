import Image from "next/image"

export default function Experience() {
    return (
        <section className="no-bottom">
            <div className="container">
                <div className="row align-items-center gh-5">
                    <div className="col-lg-6 position-relative">
                        <div className="images-deco-1">
                            <Image src="/assets/images/misc/building.webp" className="d-img-1 wow zoomIn" width={563} height={322} data-wow-delay="0s" alt="" />
                            <Image src="/assets/images/misc/girl-ai.webp" className="d-img-2 wow zoomIn" width={195} height={195} data-wow-delay=".5s" alt="" />
                            <div className="d-img-3 bg-color wow zoomIn" data-wow-delay=".6s"></div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="subtitle mb20">We are Playhost</div>
                        <h2 className="wow fadeInUp">The beginning</h2>
                        <p className="wow fadeInUp">Lorem ipsum ea ut magna nisi amet reprehenderit eu adipisicing nisi incididunt est sint fugiat deserunt tempor ea culpa nostrud commodo deserunt et do ullamco non tempor veniam id culpa mollit veniam ut non adipisicing ad commodo laborum esse do sunt in cillum irure incididunt officia quis ut.</p>
                        <div className="year-card wow fadeInUp">
                            <h1><span className="id-color">25</span></h1>
                            <div className="atr-desc">Years<br />Experience<br />Hosting</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}