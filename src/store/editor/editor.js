import { createSlice } from "@reduxjs/toolkit";

const initialEditorSlice = {
	script: "",
	output: "",
	isScriptProcessing: false,
	isEditorLoading: true,
};

const editorSlice = createSlice({
	name: "editor",
	initialState: initialEditorSlice,
	reducers: {
		setScript(state, action) {
			state.script = action.payload;
		},
		setOutput(state, action) {
			state.output = action.payload;
		},
	},
});

export const editorActions = editorSlice.actions;

export default editorSlice.reducer;
