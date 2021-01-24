import EduExpContent from "../EduExpContent/EduExpContent"

const EduExp = ({ foo }) => (
  <div className="col-lg-6 col-md-6 col-sm-12">
    <h3 className="resume__title">{foo}</h3>
    <div className="resume__card--outer">
      <EduExpContent />
      <EduExpContent />
      <EduExpContent />
    </div>
  </div>
);

export default EduExp;
