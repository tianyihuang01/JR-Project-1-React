import ProfileMedia from "../ProfileMedia/ProfileMedia";

const ProfileTitle = () => (
  <div className="card-img-overlay text-white text-center" id="home__overlay">
    <h2 className="card-title profile__name">Tianyi Huang</h2>
    <p className="card-text profile__title">Web Designer</p>
    <ProfileMedia foo="fa-twitter profile__media" />
    <ProfileMedia foo="fa-facebook profile__media--fb" />
    <ProfileMedia foo="fa-instagram profile__media--tw" />
  </div>
);

export default ProfileTitle;
