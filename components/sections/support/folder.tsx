import BFolder from "@/components/features/bFolder"
import Image from "next/image"

export default function FolderSection({ folders }: any) {



    return (
        <section className="no-top">
            <div className="container">
                <div className="row g-4">
                    {
                        folders.map((folder: any) => (
                            <BFolder
                                title={folder.title}
                                number={folder.number}
                                disc={folder.disc}
                            />
                        ))
                    }


                    <div className="spacer-double"></div>

                    <div className="col-lg-12">
                        <div className="padding40 rounded-10" data-bgcolor="rgba(255, 255, 255, .1)">
                            <div className="row align-items-center">
                                <div className="col-lg-1">
                                    <Image src="/assets/images/icons/4.png" alt="" width={64} height={64} className="img-responsive" />
                                </div>
                                <div className="col-lg-9">
                                    <h4>Cannot find answer? Contact our customer support now.</h4>
                                </div>
                                <div className="col-lg-2 text-lg-end">
                                    <a className="btn-main" href="#"><span>Contact Us</span></a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}