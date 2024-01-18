import Image from "next/image";
import BButton from "./bButton";


export default function BPriceBox(props: any) {
    const { classname, title, slots, memory, value, perslot, feature, delay } = props;

    return (
        <div className={classname} data-wow-delay={delay}>
            <div className={feature ? "de-pricing-plan bg-dark-2 h-100 d-feature    " : "de-pricing-plan bg-dark-2 h-100"}>
                {feature ? <div className="d-badge">Top Seller</div> : ""}
                <div className="d-title">{title}</div>
                <div className="d-stars"><i className="fa fa-star"></i></div>
                <div className="spacer-20"></div>
                <div className="d-specs">
                    <div className="row">
                        <div className="col-6">
                            <div className="d-item">
                                {slots}<span>Player Slots</span>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="d-item">
                                {memory}GB<span>Memory</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="spacer-20"></div>
                <div className="d-price">
                    <span className="d-cur">$</span>
                    <span className="d-value opt-1">{value}</span>
                    <span className="d-value opt-2">9.99</span>
                    <span className="d-period">/monthly</span>
                </div>
                <div className="d-sub-price">
                    <span className="opt-1">${perslot}</span><span className="opt-2">$0.25</span> per slot
                </div>
                <div className="spacer-20"></div>
                <BButton
                    classname="btn-main btn-fullwidth"
                    url="#compare-plans"
                    content="ORDER NOW"
                />
            </div>
        </div>
    )
}