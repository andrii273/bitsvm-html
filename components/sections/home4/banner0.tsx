import Image from 'next/image'
import Link from 'next/link'


export default function Banner0() {
    return (
        <section className="no-bottom">
            <div className="container">
                <div className="row align-items-center gx-5">
                    <div className="col-lg-6">
                        <Image src="/assets/images/misc/server.webp" className="img-fluid mb-sm-30 wow fadeIn" width={1069} height={666} style={{ width: "auto", height: "auto" }} alt="" />
                    </div>
                    <div className="col-lg-6">
                        <div className="subtitle wow fadeInUp mb-3">Server locations</div>
                        <h2 className="wow fadeInUp" data-wow-delay=".2s"><span className="text-gradient">25</span> servers available worldwide for your game.</h2>
                        <p className="wow fadeInUp">Our collection of game server hosting options encompasses the most in-demand platforms of today. Within our offerings, you'll discover an extensive array of specialized tools and features tailored to each game, all of which we diligently keep up to date in sync with game and mod updates.</p>

                        <ul className="de-server s2 wow fadeInUp">
                            <li>London, England</li>
                            <li>Paris, France</li>
                            <li>Frankut, Germany</li>
                            <li>Amsterdam, Netherlands</li>
                            <li>Stockholm, Sweden</li>
                            <li>Helsinki, Finland</li>
                            <li>Los Angeles, USA</li>
                            <li><Link href="locations.html">View all available servers</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}