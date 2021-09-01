import { configureStore } from "@reduxjs/toolkit";
import editorReducer from "./editor/editor";
import graphReducer from "./graph/graph";
import uiReducer from "./ui/ui";

const store = configureStore({
	reducer: {
		graph: graphReducer,
		editor: editorReducer,
		ui: uiReducer,
	},
});

export default store;
