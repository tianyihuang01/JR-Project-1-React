import ProfileTitle from "./components/ProfileTitle/ProfileTitle";
import ProfileBody from "./components/ProfileBody/ProfileBody";

const HomePage = () => (
  <section>
    <div id="home" className="card">
      <img
        className="card-img-top"
        id="home__top"
        src="assets/images/main_bg.png"
      />
      <img className="profile__avatar" src="assets/images/photo.png" />
      <ProfileTitle />
      <ProfileBody />
    </div>
  </section>
);

export default HomePage;
