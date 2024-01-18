import Image from "next/image"


export default function OrderSection() {
    return (
        <section className="no-top">
            <div className="container">

                <div className="row g-4">
                    <div className="col-lg-12">
                        <h3 className="mb-1">Configure Slots</h3>
                        <p>Enter the number of Slot for your game server</p>
                        <div className="rangeslider-wrap">
                            <input type="range" min="0" max="500" step="10" labels="0, 50, 100, 150, 200, 250, 300, 350, 400, 450, 500" />
                        </div>
                    </div>

                    <div className="spacer-double"></div>

                    <div className="col-lg-12">
                        <h3 className="mb-1">Durations</h3>
                        <p>Choose durations for your game server</p>

                        <fieldset className="row g-3" id="choose-duration">
                            <div className="radio-img-btn col-lg-2 col-md-3 col-sm-4 col-6">
                                <input type="radio" id="duration-1" name="duration" />
                                <label htmlFor="duration-1">
                                    <h3>1 Days</h3>
                                </label>
                            </div>

                            <div className="radio-img-btn col-lg-2 col-md-3 col-sm-4 col-6">
                                <input type="radio" id="duration-2" name="duration" />
                                <label htmlFor="duration-2">
                                    <h3>3 Days</h3>
                                </label>
                            </div>

                            <div className="radio-img-btn col-lg-2 col-md-3 col-sm-4 col-6">
                                <input type="radio" id="duration-3" name="duration" checked />
                                <label htmlFor="duration-3">
                                    <h3>7 Days</h3>
                                </label>
                            </div>

                            <div className="radio-img-btn col-lg-2 col-md-3 col-sm-4 col-6">
                                <input type="radio" id="duration-4" name="duration" />
                                <label htmlFor="duration-4">
                                    <h3>30 Days</h3>
                                </label>
                            </div>

                            <div className="radio-img-btn col-lg-2 col-md-3 col-sm-4 col-6">
                                <input type="radio" id="duration-5" name="duration" />
                                <label htmlFor="duration-5">
                                    <h3>90 Days</h3>
                                </label>
                            </div>

                            <div className="radio-img-btn col-lg-2 col-md-3 col-sm-4 col-6">
                                <input type="radio" id="duration-6" name="duration" />
                                <label htmlFor="duration-6">
                                    <h3>365 Days</h3>
                                </label>
                            </div>
                        </fieldset>
                    </div>

                    <div className="spacer-single"></div>

                    <div className="col-lg-12">
                        <h3 className="mb-1">Available Locations</h3>
                        <p>Choose server location for your game server</p>

                        <fieldset className="row g-3" id="choose-location">
                            <div className="radio-img-btn col-lg-2 col-md-3 col-sm-4 col-6">
                                <input type="radio" id="location-1" name="country-flags" />
                                <label htmlFor="location-1">
                                    <Image src="/assets/images/flags/united-kingdom.png" className="" width={30} height={30} alt="" />
                                    <h5>London, England</h5>
                                </label>
                            </div>

                            <div className="radio-img-btn col-lg-2 col-md-3 col-sm-4 col-6">
                                <input type="radio" id="location-2" name="country-flags" />
                                <label htmlFor="location-2">
                                    <Image src="/assets/images/flags/france.png" className="" width={30} height={30} alt="" />
                                    <h5>Paris, France</h5>
                                </label>
                            </div>

                            <div className="radio-img-btn col-lg-2 col-md-3 col-sm-4 col-6">
                                <input type="radio" id="location-3" name="country-flags" />
                                <label htmlFor="location-3">
                                    <Image src="/assets/images/flags/germany.png" className="" width={30} height={30} alt="" />
                                    <h5>Frankurt, Germany</h5>
                                </label>
                            </div>

                            <div className="radio-img-btn col-lg-2 col-md-3 col-sm-4 col-6">
                                <input type="radio" id="location-4" name="country-flags" />
                                <label htmlFor="location-4">
                                    <Image src="/assets/images/flags/netherlands.png" className="" width={30} height={30} alt="" />
                                    <h5>Amsterdam, Netherlands</h5>
                                </label>
                            </div>

                            <div className="radio-img-btn col-lg-2 col-md-3 col-sm-4 col-6">
                                <input type="radio" id="location-5" name="country-flags" checked />
                                <label htmlFor="location-5">
                                    <Image src="/assets/images/flags/sweden.png" className="" width={30} height={30} alt="" />
                                    <h5>Stockholm, Sweden</h5>
                                </label>
                            </div>

                            <div className="radio-img-btn col-lg-2 col-md-3 col-sm-4 col-6">
                                <input type="radio" id="location-6" name="country-flags" />
                                <label htmlFor="location-6">
                                    <Image src="/assets/images/flags/finland.png" className="" width={30} height={30} alt="" />
                                    <h5>Helsini, Finland</h5>
                                </label>
                            </div>

                            <div className="radio-img-btn col-lg-2 col-md-3 col-sm-4 col-6">
                                <input type="radio" id="location-7" name="country-flags" />
                                <label htmlFor="location-7">
                                    <Image src="/assets/images/flags/usa.png" className="" width={30} height={30} alt="" />
                                    <h5>Los Angeles, USA</h5>
                                </label>
                            </div>

                            <div className="radio-img-btn col-lg-2 col-md-3 col-sm-4 col-6">
                                <input type="radio" id="location-8" name="country-flags" />
                                <label htmlFor="location-8">
                                    <Image src="/assets/images/flags/canada.png" className="" width={30} height={30} alt="" />
                                    <h5>Quebec, Canada</h5>
                                </label>
                            </div>

                            <div className="radio-img-btn col-lg-2 col-md-3 col-sm-4 col-6">
                                <input type="radio" id="location-9" name="country-flags" />
                                <label htmlFor="location-9">
                                    <Image src="/assets/images/flags/australia.png" className="" width={30} height={30} alt="" />
                                    <h5>Sydney, Australia</h5>
                                </label>
                            </div>

                            <div className="radio-img-btn col-lg-2 col-md-3 col-sm-4 col-6">
                                <input type="radio" id="location-10" name="country-flags" />
                                <label htmlFor="location-10">
                                    <Image src="/assets/images/flags/brazil.png" className="" width={30} height={30} alt="" />
                                    <h5>Sau Paulo, Brazil</h5>
                                </label>
                            </div>

                            <div className="radio-img-btn col-lg-2 col-md-3 col-sm-4 col-6">
                                <input type="radio" id="location-11" name="country-flags" />
                                <label htmlFor="location-11">
                                    <Image src="/assets/images/flags/thailand.png" className="" width={30} height={30} alt="" />
                                    <h5>Bangkok, Thailand</h5>
                                </label>
                            </div>

                            <div className="radio-img-btn col-lg-2 col-md-3 col-sm-4 col-6">
                                <input type="radio" id="location-12" name="country-flags" />
                                <label htmlFor="location-12">
                                    <Image src="/assets/images/flags/indonesia.png" className="" width={30} height={30} alt="" />
                                    <h5>Jakarta, Indonesia</h5>
                                </label>
                            </div>
                        </fieldset>
                    </div>

                    <div className="spacer-half"></div>

                    <div className="col-lg-12">
                        <a className="btn-main" href="#"><span>Order Now</span></a>
                    </div>
                </div>
            </div>
        </section>
    )
}