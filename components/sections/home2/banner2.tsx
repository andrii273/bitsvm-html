import Image from 'next/image'
import Link from 'next/link'

export default function Banner2() {
    return (
        <section className="no-bottom">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="padding60 sm-padding40 jarallax position-relative">
                            {/* <Image src="/images/background/2.webp" className="jarallax-img" alt="" /> */}
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="subtitle wow fadeInUp mb-3">Download now</div>
                                    <h2 className="wow fadeInUp" data-wow-delay=".2s">Manage your server from mobile device</h2>
                                    <p>Enim sit laborum enim ut in excepteur aliqua consequat est ut aliquip nostrud sunt deserunt consequat fugiat adipisicing minim aliquip do adipisicing cupidatat esse ut irure incididunt ullamco dolor laboris anim ea do ut anim.</p>
                                    <Link href="download.html"><Image src="/images/misc/download-appstore.webp" width={180} height={59} className="img-fluid mb-sm-20" alt="download" /></Link>&nbsp;
                                    <Link href="download.html"><Image src="/images/misc/download-playstore.webp" className="img-fluid mb-sm-20" width={180} height={59} alt="download" /></Link>
                                </div>
                            </div>

                            <Image src="/images/misc/man-with-phone.webp" className="sm-hide position-absolute bottom-0 end-0 wow fadeIn" width={600} height={550} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}