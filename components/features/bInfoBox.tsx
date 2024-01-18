import Image from "next/image";


export default function BInfoBox(props: any) {
    const { title, content, label, url } = props;

    return (

        <div className="col-lg-4 col-md-6 mb-sm-30">
            <h3>{title}</h3>
            <p>{content}</p>
            <a className="btn-main btn-line lg-w-50" href={url}><span>{label}</span></a>
        </div>
    )
}