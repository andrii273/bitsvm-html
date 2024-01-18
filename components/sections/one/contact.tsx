export default function ContactSection() {
    return (
        <section id="section-contact" className="no-bottom">
            <div className="container position-relative z1000">
                <div className="row">

                    <div className="col-lg-12">

                        <div className="subtitle wow fadeInUp mb-3">Contact Us</div>
                        <h2 className="wow fadeInUp" data-wow-delay=".2s">Your message</h2>
                        <div className="spacer-20"></div>

                        <form name="contactForm" id="contact_form" className="position-relative z1000" method="post" action="#">
                            <div className="row gx-4">
                                <div className="col-lg-6 mb10">
                                    <div className="field-set">
                                        <span className="d-label">Name</span>
                                        <input type="text" name="Name" id="name" className="form-control" placeholder="Your Name" required />
                                    </div>

                                    <div className="field-set">
                                        <span className="d-label">Email</span>
                                        <input type="text" name="Email" id="email" className="form-control" placeholder="Your Email" required />
                                    </div>

                                    <div className="field-set">
                                        <span className="d-label">Phone</span>
                                        <input type="text" name="phone" id="phone" className="form-control" placeholder="Your Phone" required />
                                    </div>
                                </div>

                                <div className="col-lg-6">
                                    <div className="field-set mb20">
                                        <span className="d-label">Message</span>
                                        <textarea name="message" id="message" className="form-control" placeholder="Your Message" required />
                                    </div>
                                </div>
                            </div>


                            <div className="g-recaptcha" data-sitekey="6LdW03QgAAAAAJko8aINFd1eJUdHlpvT4vNKakj6"></div>
                            <div id='submit' className="mt20">
                                <input type='submit' id='send_message' value='Send Message' className="btn-main" />
                            </div>

                            <div id="success_message" className='success'>
                                Your message has been sent successfully. Refresh this page if you want to send more messages.
                            </div>
                            <div id="error_message" className='error'>
                                Sorry there was an error sending your form.
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </section>
    )

}