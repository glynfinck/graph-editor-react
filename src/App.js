import { Switch, Route, Redirect } from "react-router-dom";

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
