import { useEffect } from "react";

export default function BAccordian(props: any) {
    const { id, title, content } = props;

    const titleHandler = () => {
        console.log('ok');
        if (document.getElementById(id)?.classList.contains('active')) {
            document.getElementById(id)?.classList.remove('active');
        } else {
            document.getElementById(id)?.classList.add('active');
        }
    }

    return (
        <>
            <div className="accordion-section-title" id={id} onClick={titleHandler}>
                {title}
            </div>
            <div className="accordion-section-content" id={'#' + id}>
                <p>{content}</p>
            </div>
        </>
    )
}