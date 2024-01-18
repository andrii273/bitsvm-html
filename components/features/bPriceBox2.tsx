import Image from "next/image";
import BButton from "./bButton";


export default function BPriceBox2(props: any) {
    const { active, slot, price, normal, country, features } = props;

    return (
        <div className="col-xl-3 col-md-6 mb-sm-30 wow fadeInRight" data-wow-delay=".2s">
            <div className={"de_pricing-table type-2" + (active ? " rec" : "")}>
                {
                    active ? <div className="d-recommend">Best Seller</div> : ""
                }
                <div className="d-head">
                    <h3>{slot}</h3>
                </div>
                <div className="d-price">
                    <h4 className="opt-1">${price}<span>/mo</span></h4>
                    <h4 className="opt-2">$2.59<span>/mo</span></h4>
                    <p>Normally <s>{normal}</s></p>
                </div>
                <div className="d-location">
                    <h4>Server Location</h4>
                    <select name='Server Location' className="server_location form-control" >
                        <option value='option-1' data-src="images/flags/united-kingdom.png">
                            London, England
                        </option>
                        <option value='option-2' data-src="images/flags/france.png">
                            Paris, France
                        </option>
                        <option value='option-3' data-src="images/flags/germany.png">
                            Frankurt, Germany
                        </option>
                        <option value='option-4' data-src="images/flags/netherlands.png">
                            Amsterdam, Netherlands
                        </option>
                        <option value='option-5' data-src="images/flags/sweden.png">
                            Stockholm, Sweden
                        </option>
                        <option value='option-6' data-src="images/flags/finland.png">
                            Helsinki, Finland
                        </option>
                        <option value='option-7' data-src="images/flags/usa.png">
                            Los Angeles, USA
                        </option>
                        <option value='option-8' data-src="images/flags/canada.png">
                            Quebec, Canada
                        </option>
                        <option value='option-9' data-src="images/flags/australia.png">
                            Sydney, Australia
                        </option>
                        <option value='option-10' data-src="images/flags/brazil.png">
                            Sau Paulo, Brazil
                        </option>
                        <option value='option-11' data-src="images/flags/thailand.png">
                            Bangkok, Thailand
                        </option>
                        <option value='option-12' data-src="images/flags/indonesia.png">
                            Jakarta, Indonesia
                        </option>
                    </select>
                </div>
                <div className="spacer-5"></div>
                <div className="d-group">
                    <h4>Top Features</h4>
                    <ul className="d-list">
                        {features.map((feature: any) => (
                            <li> {feature} </li>
                        ))}
                    </ul>
                </div>
                <div className="d-action">
                    <a href="#" className="btn-main opt-1 w-100"><span>Get Monthly Plan</span></a>
                    <a href="#" className="btn-main opt-2 w-100 d-none"><span>Get Yearly Plan</span></a>
                    <p>Auto re-news at regular rate</p>
                </div>
            </div>
        </div>
    )
}