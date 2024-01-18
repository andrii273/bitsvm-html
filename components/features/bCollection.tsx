import Image from "next/image";
import BButton from "./bButton";


export default function BCollection(props: any) {
    const { classname, offsale, title, start, src } = props;

    return (

        <div className={classname}>
            <div className="de-item wow">
                <div className="d-overlay">
                    <div className="d-label">
                        {offsale}% OFF
                    </div>
                    <div className="d-text">
                        <h4>{title}</h4>
                        <p className="d-price">Starting at <span className="price">${start}</span></p>
                        <BButton
                            classname="btn-main btn-fullwidth"
                            url="pricing-table-one.html"
                            content="Order Now"
                        />
                    </div>
                </div>
                <Image src={src} className="Image-fluid slideUp" width={261} height={0} style={{ width: "100%", height: "auto" }} alt="" />
            </div>
        </div>
    )
}