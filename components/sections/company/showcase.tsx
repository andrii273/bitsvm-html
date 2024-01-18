import BCards from "@/components/features/bCards";

export default function Showcase({ cards }: any) {
    return (
        <section>
            <div className="container">
                <div className="row row-flex">
                    {
                        cards.map((card: any) => (
                            <BCards
                                number={card.number}
                                title={card.title}
                                content={card.content}
                            />
                        ))
                    }
                </div>

                <div className="col-lg-12 text-center">
                    <a className="btn-main btn-lg wow zoomIn" href="#"><span>Join Today</span></a>
                </div>
            </div>

        </section>
    )
}