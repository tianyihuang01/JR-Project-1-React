import Page from "../../Page";
import PageTitle from "../PageTitle/PageTitle";
import EduExp from "./components/EduExp/EduExp";
import Skills from "./components/Skills/Skills";

const ResumePage = ({ active }) => (
	<Page id="resume" active={active}>
		<PageTitle foo="Resume" />

		<div className="card-body">
			<div className="row profile__content">
				<EduExp foo="Education" />
				<EduExp foo="Experience" />
				<Skills foo="Design" />
				<Skills foo="Coding" />
			</div>
		</div>
	</Page>
);

export default ResumePage;
