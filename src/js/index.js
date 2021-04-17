import App from "../components/App/App";
import "../sass/style.css";

// ReactDOM.render(
//     <App/>,
//     document.getElementById('root'),
// );

const render = () =>
	ReactDOM.render((<App render={render} />), document.getElementById("root"));

render();
