import Image from "next/image";


export default function BIconBox(props: any) {
    const { src, title, content, delay } = props;

    return (
        <div className="col-lg-3 col-md-6 mb-sm-30 wow fadeInRight" data-wow-delay="0s">
            <div>
                <Image src={src} className="mb20" width={64} height={64} alt="" />
                <h4>{title}</h4>
                <p>{content}</p>
            </div>
        </div>
    )
}