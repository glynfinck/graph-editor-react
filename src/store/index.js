import { configureStore } from "@reduxjs/toolkit";
import editorReducer from "./editor/editor";
import graphReducer from "./graph/graph";
import uiReducer from "./ui/ui";
import authReducer from "./auth/auth";

const store = configureStore({
	reducer: {
		graph: graphReducer,
		editor: editorReducer,
		ui: uiReducer,
		auth: authReducer,
	},
});

export default store;
