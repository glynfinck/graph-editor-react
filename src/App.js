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
	const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

	return (
		<Layout>
			<Switch>
				<Route path="/" exact>
					{isLoggedIn && <GraphEditorPage />}
					{!isLoggedIn && <Redirect to="/login" />}
				</Route>
				{!isLoggedIn && (
					<Route path="/login">
						<AuthPage />
					</Route>
				)}
				<Route path="*">
					<Redirect to="/" />
				</Route>
			</Switch>
		</Layout>
	);
}

export default App;
