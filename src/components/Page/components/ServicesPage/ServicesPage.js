const ServicesPage = () => (
    <section >
        <div id="services" className="card">
            <img className="card-img-top" id="resume__top" src="assets/images/main_bg.png"/>
            <div className="card-img-overlay text-white text-center" id="resume__overlay">
            <h2 className="card-title profile__name">Services</h2>
            </div>
            <div className="card-body profile__content">
            <h3 className="services__title">Design 
                <span className="theme--color">Skills</span>
            </h3>
            <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="servicesItem">
                    <div className="servicesItem__imgContainer">
                    <img className="servicesItem__img" src="assets/images/html5.png"/>
                    </div>
                    <h4 className="servicesItem__title">
                    HTML5
                    </h4>
                    <div className="servicesItem__desc">
                    Hypertext Markup Language (HTML) is the standard markup language 
                    for documents designed to be displayed in a web browser.
                    </div>
                </div>
                </div>

                <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="servicesItem">
                    <div className="servicesItem__imgContainer">
                    <img className="servicesItem__img" src="assets/images/css3.png"/>
                    </div>
                    <h4 className="servicesItem__title">
                    CSS3
                    </h4>
                    <div className="servicesItem__desc">
                    Cascading Style Sheets (CSS) is a style sheet language used for 
                    describing the presentation of a document written in a markup language like HTML.
                    </div>
                </div>
                </div>

                <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="servicesItem">
                    <div className="servicesItem__imgContainer">
                    <img className="servicesItem__img" src="assets/images/js.png"/>
                    </div>
                    <h4 className="servicesItem__title">
                    JavaScript
                    </h4>
                    <div className="servicesItem__desc">
                    JavaScript often abbreviated as JS, is a programming language 
                    that conforms to the ECMAScript specification.
                    </div>
                </div>
                </div>

            </div>

            <h3 className="services__title">Clients</h3>

            <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-12 servicesItem__imgContainer--2">
                <img className="servicesItem__img--2" src="assets/images/rea.png"/>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 servicesItem__imgContainer--2">
                <img className="servicesItem__img--2" src="assets/images/seek.png"/>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 servicesItem__imgContainer--2">
                <img className="servicesItem__img--2" src="assets/images/rea.png"/>
                </div>
            </div>

            </div>

        </div>
    </section>
)