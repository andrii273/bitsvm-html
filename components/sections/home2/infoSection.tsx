import BInfoBox from "@/components/features/bInfoBox"
import { info } from "@/utils/constants/home2"

export default function InfoSection(props: any) {

    return (
        <section className="pt90 no-bottom">
            <div className="container">
                <div className="row gx-5">
                    {info.map((one) => (
                        <BInfoBox
                            title={one.title}
                            content={one.content}
                            url={one.url}
                            label={one.label}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}