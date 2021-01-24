import GoogleMap from "../GoogleMap/GoogleMap";
import ContactItem from "../ContactItem/ContactItem";

const GetInTouch = () => (
  <div className="col-lg-6 col-md-6 col-sm-12">
    <h3 className="resume__title">
      Get in
      <span className="theme--color">&nbsp;Touch</span>
    </h3>

    <div className="contact__map">
      <GoogleMap />
    </div>

    <ContactItem
      items={[
        {
          key: "contact-city",
          fa: "map-marker",
          media: "--fb",
          desc: "Melbourne, Australia",
        },
        {
          key: "contact-email",
          fa: "envelope",
          media: "",
          desc: (
            <a href="mailto:email@example.com" className="theme--color">
              info@jiangren.com
            </a>
          ),
        },
        {
          key: "contact-phone",
          fa: "phone",
          media: "",
          desc: "+0123 123 456 789",
        },
        {
          key: "contact-option",
          fa: "check",
          media: "",
          desc: "Freelance Available",
        },
      ]}
    />
  </div>
);

export default GetInTouch;
