import BTestimonial from "@/components/features/bTestimonial"
import Image from "next/image"


export default function TestmonialSection({ testis }: any) {
    return (
        <section className="jarallax">
            {/* <Image src="/assets/images/background/6.webp" className="jarallax-img" alt="" />
            <div className="de-gradient-edge-top"></div>
            <div className="de-gradient-edge-bottom"></div> */}
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="subtitle mb20">Customer reviews</div>
                        <h2 className="wow fadeInUp">4.85 out of 5</h2>
                        <div className="spacer-20"></div>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <div className="row">
                    <div className="wow fadeInUp d-flex" id="testimonial-carousel">
                        {
                            testis.map((testi: any) => (
                                <BTestimonial
                                    rating={testi.rating}
                                    author={testi.author}
                                    src={testi.src}
                                    content={testi.content}
                                />
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}