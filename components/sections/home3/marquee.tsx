import Image from "next/image"

export default function Marquee({ data }: any) {
    return (
        <section className="no-bottom">
            <div className="no-bottom wow fadeInRight d-flex z-1000">
                <div className="de-marquee-list s2 wow">
                    <div className="d-item">
                        <span className="d-item-txt"><Image src="/assets/images/flags/united-kingdom.png" width={700} height={100} style={{ width: "100%", height: "auto" }} className="" alt="" />London</span>
                        <span className="d-item-display">
                            <i className="d-item-block"></i>
                        </span>
                        <span className="d-item-txt"><Image src="/assets/images/flags/france.png" width={700} height={100} style={{ width: "100%", height: "auto" }} className="" alt="" />Paris</span>
                        <span className="d-item-display">
                            <i className="d-item-block"></i>
                        </span>
                        <span className="d-item-txt"><Image src="/assets/images/flags/germany.png" width={700} height={100} style={{ width: "100%", height: "auto" }} className="" alt="" />Frankurt</span>
                        <span className="d-item-display">
                            <i className="d-item-block"></i>
                        </span>
                        <span className="d-item-txt"><Image src="/assets/images/flags/netherlands.png" width={700} height={100} style={{ width: "100%", height: "auto" }} className="" alt="" />Amsterdam</span>
                        <span className="d-item-display">
                            <i className="d-item-block"></i>
                        </span>
                        <span className="d-item-txt"><Image src="/assets/images/flags/sweden.png" width={700} height={100} style={{ width: "100%", height: "auto" }} className="" alt="" />Stockholm</span>
                        <span className="d-item-display">
                            <i className="d-item-block"></i>
                        </span>
                        <span className="d-item-txt"><Image src="/assets/images/flags/finland.png" width={700} height={100} style={{ width: "100%", height: "auto" }} className="" alt="" />Helsinki</span>
                        <span className="d-item-display">
                            <i className="d-item-block"></i>
                        </span>
                        <span className="d-item-txt"><Image src="/assets/images/flags/usa.png" width={700} height={100} style={{ width: "100%", height: "auto" }} className="" alt="" />Los Angeles</span>
                        <span className="d-item-display">
                            <i className="d-item-block"></i>
                        </span>
                        <span className="d-item-txt"><Image src="/assets/images/flags/canada.png" width={700} height={100} style={{ width: "100%", height: "auto" }} className="" alt="" />Quebec</span>
                        <span className="d-item-display">
                            <i className="d-item-block"></i>
                        </span>
                        <span className="d-item-txt"><Image src="/assets/images/flags/" width={700} height={100} style={{ width: "100%", height: "auto" }} className="" alt="" />Singapore</span>
                        <span className="d-item-display">
                            <i className="d-item-block"></i>
                        </span>
                        <span className="d-item-txt"><Image src="/assets/images/flags/australia.png" width={700} height={100} style={{ width: "100%", height: "auto" }} className="" alt="" />Sydney</span>
                        <span className="d-item-display">
                            <i className="d-item-block"></i>
                        </span>
                        <span className="d-item-txt"><Image src="/assets/images/flags/brazil.png" width={700} height={100} style={{ width: "100%", height: "auto" }} className="" alt="" />Sau Paulo</span>
                        <span className="d-item-display">
                            <i className="d-item-block"></i>
                        </span>
                        <span className="d-item-txt"><Image src="/assets/images/flags/thailand.png" width={700} height={100} style={{ width: "100%", height: "auto" }} className="" alt="" />Bangkok</span>
                        <span className="d-item-display">
                            <i className="d-item-block"></i>
                        </span>
                        <span className="d-item-txt"><Image src="/assets/images/flags/indonesia.png" width={700} height={100} style={{ width: "100%", height: "auto" }} className="" alt="" />Jakarta</span>
                        <span className="d-item-display">
                            <i className="d-item-block"></i>
                        </span>
                    </div>
                </div>
            </div>
        </section>
    )
}