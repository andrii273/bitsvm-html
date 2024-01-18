import Image from "next/image";
export default function BTestimonial(props: any) {
    const { rating, src, content, author } = props;

    return (
        <div className="item">
            <div className="de_testi type-2">
                <blockquote>
                    <div className="de-rating-ext">
                        <span className="d-stars">
                            {
                                [...Array(rating)].map((element) => (
                                    <i className="fa fa-star"></i>
                                ))
                            }
                        </span>
                    </div>
                    <p>
                        {content}
                    </p>
                    <div className="de_testi_by">
                        <Image alt="" src={src} width={50} height={50} /> <span>{author}</span>
                    </div>
                </blockquote>
            </div>
        </div>
    )

} 