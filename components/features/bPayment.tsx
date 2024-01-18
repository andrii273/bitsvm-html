import Image from "next/image";


export default function BPayment(props: any) {
    const { classname, src, width, height } = props;

    return (
        <div className="col-sm-2 col-4">
            <div className={classname} data-bgcolor="rgba(255, 255, 255, .05)">
                <Image src={src} className="img-fluid" width={width} height={height} style={{ width: "auto", height: "auto" }} alt="" />
            </div>
        </div>
    )
}