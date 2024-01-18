export default function BFolder(props: any) {
    const { title, disc, number } = props;

    return (
        <div className="col-lg-4 col-md-6">
            <div className="de-box-cat h-100">
                <i className="fa fa-folder-open-o"></i>
                <a href="faq.html"><h3>{title}<span>({number})</span></h3></a>
                <div className="d-subtitle">{disc}</div>
            </div>
        </div>
    )

} 