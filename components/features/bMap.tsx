import Image from "next/image";

export default function BMap(props: any) {
    const { classname, url, content } = props;

    return (
        <>

            <div className="de-map-hotspot">
                <div className="de-spot wow fadeIn" style={{ top: "39%", left: "20%" }}>
                    <span>United&nbsp;States</span>
                    <div className="de-circle-1"></div>
                    <div className="de-circle-2"></div>
                </div>
                <div className="de-spot wow fadeIn" style={{ top: "76%", left: "87%" }}>
                    <span>Australia</span>
                    <div className="de-circle-1"></div>
                    <div className="de-circle-2"></div>
                </div>
                <div className="de-spot wow fadeIn" style={{ top: "68%", left: "80%" }}>
                    <span>Indonesia</span>
                    <div className="de-circle-1"></div>
                    <div className="de-circle-2"></div>
                </div>
                <div className="de-spot wow fadeIn" style={{ top: "23%", left: "18%" }}>
                    <span>Canada</span>
                    <div className="de-circle-1"></div>
                    <div className="de-circle-2"></div>
                </div>
                <div className="de-spot wow fadeIn" style={{ top: "68%", left: "33%" }}>
                    <span>Brazil</span>
                    <div className="de-circle-1"></div>
                    <div className="de-circle-2"></div>
                </div>
                <div className="de-spot wow fadeIn" style={{ top: "45%", left: "75%" }}>
                    <span>China</span>
                    <div className="de-circle-1"></div>
                    <div className="de-circle-2"></div>
                </div>
                <div className="de-spot wow fadeIn" style={{ top: "36%", left: "48%" }}>
                    <span>France</span>
                    <div className="de-circle-1"></div>
                    <div className="de-circle-2"></div>
                </div>
                <div className="de-spot wow fadeIn" style={{ top: "23%", left: "51%" }}>
                    <span>Sweden</span>
                    <div className="de-circle-1"></div>
                    <div className="de-circle-2"></div>
                </div>
                <div className="de-spot wow fadeIn" style={{ top: "78%", left: "53%" }}>
                    <span>South&nbsp;Africa</span>
                    <div className="de-circle-1"></div>
                    <div className="de-circle-2"></div>
                </div>
                <Image src="/assets/images/misc/world-map.webp" className="Image-fluid" width={261} height={0} style={{ width: "100%", height: "auto" }} alt="" />
            </div>
        </>
    )

} 