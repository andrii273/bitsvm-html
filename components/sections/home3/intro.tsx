import BButton from '@/components/features/bButton'
import Image from 'next/image'
import Link from 'next/link'

export default function IntroSection({ data }: any) {
    return (
        <section className="pt60 no-bottom" data-bgimage="url(images/background/4.webp">
            <div className="container">
                <div className="row align-items-center gx-5">

                    <div className="col-lg-6">
                        <div className="subtitle wow fadeInUp mb-3">{data.subtitle}</div>
                        <h2 className="wow fadeInUp" data-wow-delay=".2s">{data.title}</h2>
                        <p className="wow fadeInUp">{data.content}




                        </p>

                        <div className="spacer-10"></div>
                        <BButton
                            classname="btn-main mb10 wow fadeInUp"
                            url="/game-server-1"
                            content="Order Your Game Server Now"
                        />

                    </div>

                    <div className="col-lg-6" >
                        <div className="d_wrap">
                            <Image src="/assets/images/misc/server-2.webp" className="lazy img-fluid wow fadeIn" width={614} height={614} data-wow-delay=".6s" alt="" />
                            {
                                data.badges.map((badge: any) => (
                                    <div className={badge.classname} data-wow-delay=".8s">
                                        <i className="bg-gradient fa fa-users"></i>
                                        <h3>{badge.value}</h3>
                                        <h6>{badge.key}</h6>
                                    </div>
                                ))
                            }
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}