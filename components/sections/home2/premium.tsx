import BIconBox from '@/components/features/bIconBox'

export default function PremiumSection(props: any) {

    const { premiums } = props;

    return (
        <section className="pt90 no-bottom">
            <div className="container">
                <div className="row gx-5">
                    <div className="col-lg-6 offset-lg-3 text-center">
                        <div className="subtitle wow fadeInUp mb-3">Incredibly features</div>
                        <h2 className="wow fadeInUp mb20" data-wow-delay=".2s">Premium Game Server</h2>
                    </div>

                    <div className="clearfix"></div>
                    {premiums.map((premium: any) => (
                        <BIconBox
                            classname={premium.classname}
                            src={premium.src}
                            title={premium.title}
                            content={premium.content}
                            delay={premium.delay}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}