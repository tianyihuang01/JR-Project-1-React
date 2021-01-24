import ResumeTitle from "./components/ResumeTitle/ResumeTitle";
import EduExp from "./components/EduExp/EduExp";
import Skills from "./components/Skills/Skills";

const ResumePage = () => (
  <section>
    <div id="resume" className="card">
      <ResumeTitle />

      <div className="card-body">
        <div className="row profile__content">
          <EduExp foo="Education" />
          <EduExp foo="Experience" />
          <Skills foo="Design" />
          <Skills foo="Coding" />
        </div>
      </div>
    </div>
  </section>
);

export default ResumePage;
