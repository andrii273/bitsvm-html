export default function BCards(props: any) {

    const { number, title, content } = props;

    return (

        <div className="col-lg-4 mb30 wow fadeInRight" data-wow-delay=".2s">
            <div className="de-step-s1">
                <div className="d-number wow rotateIn" data-wow-delay=".2s">{number}</div>
                <h4>{title}</h4>
                <p className="">{content}</p>
            </div>
        </div>
    )
}