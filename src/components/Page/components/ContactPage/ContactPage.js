import Page from "../../Page";
import GetInTouch from "./components/GetInTouch/GetInTouch";
import ContactForm from "./components/ContactForm/ContactForm";



const ContactPage = () => (
  <section>
    <div id="contact" className="card">
      <Page foo="Contact" />
      <div className="card-body profile__content">
        <div className="row">
          <GetInTouch />
          <ContactForm />
        </div>
      </div>
    </div>
  </section>
);

export default ContactPage;
