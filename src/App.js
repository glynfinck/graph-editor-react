import { useSelector, useDispatch } from "react-redux";
import { Switch, Route, Redirect } from "react-router-dom";

import GraphEditor from "./components/GraphEditor/GraphEditor";
import Modal from "./components/UI/Modal";
import Help from "./components/Help/Help";
import { uiActions } from "./store/ui/ui";
import Layout from "./components/Layout/Layout";
import AuthPage from "./pages/AuthPage";
import GraphEditorPage from "./pages/GraphEditorPage";

function App() {
	// const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

	return (
		<Switch>
			<Route path="/" exact>
				<GraphEditorPage />
			</Route>
			<Route path="*">
				<Redirect to="/" />
			</Route>
		</Switch>
	);
}

export default App;
