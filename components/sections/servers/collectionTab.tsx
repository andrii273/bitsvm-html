import Link from "next/link";
import Image from "next/image";
import BCollection from "@/components/features/bCollection";

export default function CollectionTab(props: any) {

    const { collections } = props;

    return (
        <section className="jarallax">
            {/* <Image src="/assets/images/background/3.webp" className="jarallax-img" width={1362} height={1046} style={{ width: 'auto', height: 'auto' }} alt="" /> */}
            <div className="de-gradient-edge-top"></div>
            <div className="de-gradient-edge-bottom"></div>
            <div className="container z-1000">
                <div className="row align-items-center">
                    <div className="col-lg-12">
                        <div className="subtitle wow fadeInUp mb-3">Most complete</div>
                    </div>
                    <div className="col-lg-6">
                        <h2 className="wow fadeInUp" data-wow-delay=".2s">Game Collection</h2>
                        <div className="spacer-20"></div>
                    </div>
                    <div className="col-lg-6">
                        <ul id="filters" className="float-lg-end float-sm-start wow fadeInUp" data-wow-delay="0s">
                            <li><Link href="#" data-filter="*" className="selected">All Games</Link></li>
                            <li><Link href="#" data-filter=".popular">popular</Link></li>
                            <li><Link href="#" data-filter=".fps">fps</Link></li>
                            <li><Link href="#" data-filter=".survival">survival</Link></li>
                            <li><Link href="#" data-filter=".sandbox">sandbox</Link></li>
                        </ul>
                    </div>
                </div>

                <div id="gallery" className="row g-4">
                    {
                        collections.map((collection: any) => (

                            <BCollection
                                classname={collection.classname}
                                offsale={collection.offsale}
                                title={collection.title}
                                start={collection.start}
                                src={collection.src}
                            />
                        ))
                    }


                </div>
            </div>
        </section>
    )
}