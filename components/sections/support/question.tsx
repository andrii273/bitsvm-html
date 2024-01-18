import Link from "next/link"


export default function QuestionSection(props: any) {


    return (
        <section id="subheader" className="jarallax">
            {/* <div className="de-gradient-edge-bottom"></div> */}
            {/* <Image src="images/background/space.webp" className="jarallax-img" alt="" /> */}
            <div className="container z-1000">
                <div className="row">
                    <div className="col-lg-12 mb-3 text-center">
                        <div className="subtitle wow fadeInUp mb-3">Information center</div>
                        <h2 className="wow fadeInUp mb-3" data-wow-delay=".2s">Knowledgebase</h2>
                    </div>

                    <div className="col-md-8 offset-md-2 text-center">
                        <form action='#' className="row" data-wow-delay="1.25s" id='form_sb' method="post" name="form_sb">
                            <div className="col">
                                <div className="spacer-10"></div>
                                <input className="form-control" id='domain_name' name='domain_name' placeholder="type your questions here" type='text' />
                                <Link id="btn-submit" href="javascript:;" onClick={(e) => { document.getElementById('form_sb')?.onsubmit; }} >
                                    <i className="arrow_right"></i>
                                </Link>
                                <div className="clearfix"></div>
                            </div>
                        </form>
                        <div className="spacer-20"></div>
                        <p className="d-small">*eg. server setup, change hosting plan</p>
                    </div>
                </div>
            </div>
        </section>
    )
}