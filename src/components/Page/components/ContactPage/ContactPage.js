const ContactPage = () => (
    <section>
        <div id="contact" className="card">
            <img className="card-img-top" id="resume__top" src="assets/images/main_bg.png"/>
            <div className="card-img-overlay text-white text-center" id="resume__overlay">
            <h2 className="card-title profile__name">Contact</h2>
            </div>
            
            <div className="card-body profile__content">
            <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-12">
                <h3 className="resume__title">Get in  
                    <span className="theme--color">Touch</span>
                </h3>

                <div className="contact__map">
                    {/* <Component iframe={iframe} /> */}
                </div>

                <div className="contact__info">
                    <span>
                    <button type="button" className="btn btn-light fa fa-map-marker profile__media--fb theme--color"></button>
                    </span>
                    <span className="contact__info--des">Melbourne, Australia</span>
                </div>
                <div className="contact__info">
                    <span>
                    <button type="button" className="btn btn-light fa fa-envelope profile__media theme--color"></button>
                    </span>
                    <span className="contact__info--des"><a href="mailto:email@example.com" className="theme--color">info@jiangren.com</a></span>
                </div>
                <div className="contact__info">
                    <span>
                    <button type="button" className="btn btn-light fa fa-phone profile__media theme--color"></button>
                    </span>
                    <span className="contact__info--des">+0123 123 456 789</span>
                </div>
                <div className="contact__info">
                    <span>
                    <button type="button" className="btn btn-light fa fa-check profile__media theme--color"></button>
                    </span>
                    <span className="contact__info--des">Freelance Available</span>
                </div>

                </div>

                <div className="col-lg-6 col-md-6 col-sm-12">
                <h3 className="resume__title">Contact  
                    <span className="theme--color">Form</span>
                </h3>

                <form className="needs-validation" noValidate>
                    
                    <label className="sr-only" htmlFor="inlineFormInputName2">Full Name</label>
                    <div className="input-group mb-2 mr-sm-2">
                    <div className="input-group-prepend">
                        <div className="input-group-text" ><i className="fa fa-user"></i></div>
                    </div>
                    <input type="text" className="form-control" id="inlineFormInputName2" placeholder="Full Name" required/>
                    <div className="invalid-feedback">
                        please provide your full name.
                    </div>
                    </div>
                
                    <label className="sr-only" htmlFor="inlineFormInputEmail2">Email Address</label>
                    <div className="input-group mb-2 mr-sm-2">
                    <div className="input-group-prepend">
                        <div className="input-group-text"><i className="fa fa-envelope"></i></div>
                    </div>
                    <input type="text" className="form-control" id="inlineFormInputEmail2" placeholder="Email Address" 
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" required/>
                    <div className="invalid-feedback">
                        please provide your valid Email address.
                    </div>
                    </div>

                    <label className="sr-only" htmlFor="inlineFormInputMessage2">Message for me</label>
                    <div className="input-group">
                    <div className="input-group-prepend">
                        <div className="input-group-text"><i className="fa fa-comment"></i></div>
                    </div>
                    <textarea type="text" className="form-control" id="inlineFormInputMessage2" placeholder="Message for me" required></textarea>
                    <div className="invalid-feedback">
                        please provide your feedback.
                    </div>
                    </div>

                    <div className="g-recaptcha brochure__form__captcha" data-sitekey="6LfULykaAAAAAFTB505w9yfsOVDVuULltLLUlv1C"></div>
                    
                    <button type="submit" className="btn btn-custom mb-2"><span className="btn--text">SEND MESSAGE</span></button>

                </form>
                
                </div>

            </div>
            </div>
        </div>
    </section>
)