import Image from 'next/image'


export default function PaymentSection() {
    return (
        <section>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="subtitle wow fadeInUp mb-3">Payment Methods</div>
                        <h2 className="wow fadeInUp" data-wow-delay=".2s">We accept</h2>
                    </div>
                    <div className="col-lg-6">
                        <div className="row g-4">
                            <div className="col-sm-2 col-4">
                                <div className="p-2 rounded-10 bg-custom" data-bgcolor="rgba(255, 255, 255, .05)">
                                    <Image src="/assets/images/payments/visa.webp" className="img-fluid" width={68} height={46} style={{ width: "auto", height: "auto" }} alt="" />
                                </div>
                            </div>
                            <div className="col-sm-2 col-4">
                                <div className="p-2 rounded-10 bg-custom" data-bgcolor="rgba(255, 255, 255, .05)">
                                    <Image src="/assets/images/payments/mastercard.webp" className="img-fluid" width={68} height={46} style={{ width: "auto", height: "auto" }} alt="" />
                                </div>
                            </div>
                            <div className="col-sm-2 col-4">
                                <div className="p-2 rounded-10 bg-custom" data-bgcolor="rgba(255, 255, 255, .05)">
                                    <Image src="/assets/images/payments/paypal.webp" className="img-fluid" width={68} height={46} style={{ width: "auto", height: "auto" }} alt="" />
                                </div>
                            </div>
                            <div className="col-sm-2 col-4">
                                <div className="p-2 rounded-10 bg-custom" data-bgcolor="rgba(255, 255, 255, .05)">
                                    <Image src="/assets/images/payments/skrill.webp" className="img-fluid" width={68} height={46} style={{ width: "auto", height: "auto" }} alt="" />
                                </div>
                            </div>
                            <div className="col-sm-2 col-4">
                                <div className="p-2 rounded-10 bg-custom" data-bgcolor="rgba(255, 255, 255, .05)">
                                    <Image src="/assets/images/payments/jcb.webp" className="img-fluid" width={68} height={46} style={{ width: "auto", height: "auto" }} alt="" />
                                </div>
                            </div>
                            <div className="col-sm-2 col-4">
                                <div className="p-2 rounded-10 bg-custom" data-bgcolor="rgba(255, 255, 255, .05)">
                                    <Image src="/assets/images/payments/american-express.webp" className="img-fluid" width={68} height={46} style={{ width: "auto", height: "auto" }} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}