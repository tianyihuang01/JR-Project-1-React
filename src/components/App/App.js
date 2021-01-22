// import React from 'react';
// import ReactDOM from 'react';

const NavItem = () => (
    <ul className="navbar-nav ml-auto align-items-center">
        <li className="nav-item">
        <a className="nav-link" href="home">Home</a>
        </li>
        <li className="nav-item">
        <a className="nav-link" href="resume">Resume</a>
        </li>          
        <li className="nav-item">
        <a className="nav-link" href="services">Services</a>
        </li>
        <li className="nav-item">
        <a className="nav-link" href="blog">Blog</a>
        </li>
        <li className="nav-item">
        <a className="nav-link" href="contact">Contact</a>
        </li>
    </ul>
);

const Header = () => (
    <nav className="navbar fixed-top navbar-expand-sm bg-light navbar-light" id="mainNav">
    <div className="container">
        <a className="navbar-brand" href="#">Tianyi <span className="theme--color">Huang</span></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" 
        aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse align-items-center" id="navbarResponsive">
        <NavItem/>
        </div>
    </div>
    </nav>
)

const HomePage = () => (
    <section>
        <div id="home" className="card card--active">
            <img className="card-img-top" id="home__top" src="assets/images/main_bg.png"/>
            <img className="profile__avatar" src="assets/images/photo.png"/>
            <div className="card-img-overlay text-white text-center" id="home__overlay">
                <h2 className="card-title profile__name">Tianyi Huang</h2>
                <p className="card-text profile__title">Web Designer</p>
                <button type="button" className="btn btn-light fa fa-twitter profile__media"></button>
                <button type="button" className="btn btn-light fa fa-facebook profile__media--fb"></button>
                <button type="button" className="btn btn-light fa fa-instagram profile__media--tw"></button>
            </div>

            <div className="card-body">
                <div className="row profile__content">
                    <div className="col-lg-6 col-md-6 col-sm-12">
                    <h3 className="profile__content--header">About <span className="theme--color">Me</span></h3>
                    <p className="profile__content--body">Hello! I’m Tianyi Huang. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Aenean fermentum ullamcorper sem, at placerat dolor volutpat ac.
                        Duis nulla enim, condimentum nec ultricies.</p>
                    </div>

                    <div className="col-lg-6 col-md-6 col-sm-12">
                    <dl>
                        <dt>Age</dt>
                        <dd>29</dd>
                        <dt>Residence</dt>
                        <dd>Australia</dd>
                        <dt>Address</dt>
                        <dd>Level 3 / 57 Coronation Drive, Brisbane</dd>
                        <dt>e-mail</dt>
                        <dd><a href="mailto:email@example.com" className="theme--color">info@jiangren.com</a></dd>
                        <dt>Phone</dt>
                        <dd>+0123 123 456 789</dd>
                    </dl>
                    </div>
                </div>
            </div>
        </div>
    </section>
)

const ResumePage = () => (
    <section >
        <div id="resume" className="card card--active">
            <img className="card-img-top" id="resume__top" src="assets/images/main_bg.png"/>
            <div className="card-img-overlay text-white text-center" id="resume__overlay">
            <h2 className="card-title profile__name">Resume</h2>
            </div>
            
            <div className="card-body">
            <div className="row profile__content">

                <div className="col-lg-6 col-md-6 col-sm-12">
                <h3 className="resume__title">Education</h3>
                <div className="resume__card--outer">

                    <div className="resume__card--inner">
                    <h4 className="resume__card--title">Specialization Course</h4>
                    <span className="theme--color resume__card--year">2010</span>
                    <span className="resume__card--subtitle">Apple Inc.</span>
                    <p className="resume__card--body">
                        Mauris magna sapien, pharetra consectetur fringilla vitae, 
                        interdum sed tortor.
                    </p>
                    </div>

                    <div className="resume__card--inner">
                    <h4 className="resume__card--title">Specialization Course</h4>
                    <span className="theme--color resume__card--year">2010</span>
                    <span className="resume__card--subtitle">Apple Inc.</span>
                    <p className="resume__card--body">
                        Mauris magna sapien, pharetra consectetur fringilla vitae, 
                        interdum sed tortor.
                    </p>
                    </div>
                    
                    <div className="resume__card--inner">
                    <h4 className="resume__card--title">Specialization Course</h4>
                    <span className="theme--color resume__card--year">2010</span>
                    <span className="resume__card--subtitle">Apple Inc.</span>
                    <p className="resume__card--body">
                        Mauris magna sapien, pharetra consectetur fringilla vitae, 
                        interdum sed tortor.
                    </p>
                    </div>
                </div>
                </div>

                <div className="col-lg-6 col-md-6 col-sm-12">
                <h3 className="resume__title">Experience</h3>
                <div className="resume__card--outer">
                    
                    <div className="resume__card--inner">
                    <h4 className="resume__card--title">Specialization Course</h4>
                    <span className="theme--color resume__card--year">2010</span>
                    <span className="resume__card--subtitle">Apple Inc.</span>
                    <p className="resume__card--body">
                        Mauris magna sapien, pharetra consectetur fringilla vitae, 
                        interdum sed tortor.
                    </p>
                    </div>

                    <div className="resume__card--inner">
                    <h4 className="resume__card--title">Specialization Course</h4>
                    <span className="theme--color resume__card--year">2010</span>
                    <span className="resume__card--subtitle">Apple Inc.</span>
                    <p className="resume__card--body">
                        Mauris magna sapien, pharetra consectetur fringilla vitae, 
                        interdum sed tortor.
                    </p>
                    </div>
                    
                    <div className="resume__card--inner">
                    <h4 className="resume__card--title">Specialization Course</h4>
                    <span className="theme--color resume__card--year">2010</span>
                    <span className="resume__card--subtitle">Apple Inc.</span>
                    <p className="resume__card--body">
                        Mauris magna sapien, pharetra consectetur fringilla vitae, 
                        interdum sed tortor.
                    </p>
                    </div>
                </div>
                </div>

                <div className="col-lg-6 col-md-6 col-sm-12">
                <h3 className="resume__title">Design 
                    <span className="theme--color">Skills</span>
                </h3>
                <h4 className="resume__skill">Web Design</h4>
                <div className="bar">
                    <div className="skill skill--1"></div>
                </div>
                <h4 className="resume__skill">Graphic Design</h4>
                <div className="bar">
                    <div className="skill skill--2"></div>
                </div>
                <h4 className="resume__skill">Print Design</h4>
                <div className="bar">
                    <div className="skill skill--3"></div>
                </div>

                </div>
                
                <div className="col-lg-6 col-md-6 col-sm-12">
                <h3 className="resume__title">Coding  
                    <span className="theme--color">Skills</span>
                </h3>
                <h4 className="resume__skill">HTML5</h4>
                <div className="bar">
                    <div className="skill skill--4"></div>
                </div>
                <h4 className="resume__skill">CSS3/LESS/SASS</h4>
                <div className="bar">
                    <div className="skill skill--2"></div>
                </div>
                <h4 className="resume__skill">jQuery</h4>
                <div className="bar">
                    <div className="skill skill--5"></div>
                </div>
                </div>
            </div>
            </div>
        </div>
    </section>
)

const ServicesPage = () => (
    <section >
        <div id="services" className="card card--active">
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

const BlogPage = () => (
    <section >
        <div id="blog" className="card card--active">
            <img className="card-img-top" id="resume__top" src="assets/images/main_bg.png"/>
            <div className="card-img-overlay text-white text-center" id="resume__overlay">
            <h2 className="card-title profile__name">Blog</h2>
            </div>
            
            <div className="card-body profile__content">
            <div className="row">
                <div className="col-lg-6 col-md-12 col-sm-12">
                <div className="blog__card">
                    <div className="blog__card--container">
                    <img className="blog__card--img" src="assets/images/blog/blog_post_1.jpg"/>
                    <div className='blog__card--middle'>
                        <div>Tianyi Huang</div>
                    </div>
                    </div>
                    <div className="blog__card--label text-center">
                    <span className="theme--color day">16</span>
                    <span className="theme--color month">Nov</span>
                    </div>
                    <div className="blog__card--body text-center">
                    <p className="servicesItem__desc">Travel</p>
                    <p><b>Bootstrap is the most popular framework</b></p>
                    </div>
                </div>
                </div>

                <div className="col-lg-6 col-md-12 col-sm-12">
                <div className="blog__card">
                    <div className="blog__card--container">
                    <img className="blog__card--img" src="assets/images/blog/blog_post_1.jpg"/>
                    <div className='blog__card--middle'>
                        <div>Tianyi Huang</div>
                    </div>
                    </div>
                    <div className="blog__card--label text-center">
                    <span className="theme--color day">16</span>
                    <span className="theme--color month">Nov</span>
                    </div>
                    <div className="blog__card--body text-center">
                    <p className="servicesItem__desc">Travel</p>
                    <p><b>Bootstrap is the most popular framework</b></p>
                    </div>
                </div>
                </div>

                <div className="col-lg-6 col-md-12 col-sm-12">
                <div className="blog__card">
                    <div className="blog__card--container">
                    <img className="blog__card--img" src="assets/images/blog/blog_post_1.jpg"/>
                    <div className='blog__card--middle'>
                        <div>Tianyi Huang</div>
                    </div>
                    </div>
                    <div className="blog__card--label text-center">
                    <span className="theme--color day">16</span>
                    <span className="theme--color month">Nov</span>
                    </div>
                    <div className="blog__card--body text-center">
                    <p className="servicesItem__desc">Travel</p>
                    <p><b>Bootstrap is the most popular framework</b></p>
                    </div>
                </div>
                </div>

                <div className="col-lg-6 col-md-12 col-sm-12">
                <div className="blog__card">
                    <div className="blog__card--container">
                    <img className="blog__card--img" src="assets/images/blog/blog_post_1.jpg"/>
                    <div className='blog__card--middle'>
                        <div>Tianyi Huang</div>
                    </div>
                    </div>
                    <div className="blog__card--label text-center">
                    <span className="theme--color day">16</span>
                    <span className="theme--color month">Nov</span>
                    </div>
                    <div className="blog__card--body text-center">
                    <p className="servicesItem__desc">Travel</p>
                    <p><b>Bootstrap is the most popular framework</b></p>
                    </div>
                </div>
                </div>

            </div>
            </div>


        </div>
    </section>
)

const ContactPage = () => (
    <section>
        <div id="contact" className="card card--active">
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

const App = () => {
    return (
        <div>
            <header>
                <Header></Header>
            </header>
            <main>
                <HomePage/>
                <ResumePage/>
                <ServicesPage/>
                <BlogPage/>
                <ContactPage/>
            </main> 
            <footer className="footer fixed-bottom">
                © 2017 All rights reserved. Designed by
                <a href="http://jiangren.com.au" className="theme--color">Tianyi Huang</a> 
            </footer>
        </div>  
    )
}


ReactDOM.render(
    <App/>,
    document.getElementById('root'),
);

