const HomePage = () => (
    <section>
        <div id="home" className="card">
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