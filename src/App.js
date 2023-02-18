import { Switch, Route, Redirect } from "react-router-dom";

import GraphEditorPage from "./pages/GraphEditorPage";
import GraphExplorerPage from "./pages/GraphExplorerPage";

function App() {
  // const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  return (
    <Switch>
      <Route path="/graphs/:graphId" exact>
        <GraphEditorPage />
      </Route>
      <Route path="/graphs" exact>
        <GraphExplorerPage />
      </Route>
      <Route path="*">
        <Redirect to="/graphs" />
      </Route>
    </Switch>
  );
}

export default App;
