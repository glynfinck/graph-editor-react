import { createSlice } from "@reduxjs/toolkit";

const initialUIState = {
	isConsoleOpen: true,
	isHelpModalOpen: false,
};

const uiSlice = createSlice({
	name: "graph",
	initialState: initialUIState,
	reducers: {
		openHelpModal(state, action) {
			state.isHelpModalOpen = true;
		},
		closeHelpModal(state, action) {
			state.isHelpModalOpen = false;
		},
	},
});

export const uiActions = uiSlice.actions;

export default uiSlice.reducer;
