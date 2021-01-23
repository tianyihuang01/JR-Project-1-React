const ResumePage = () => (
    <section >
        <div id="resume" className="card">
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

export default ResumePage;