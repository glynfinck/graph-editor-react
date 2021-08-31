import { createSlice } from "@reduxjs/toolkit";

const initialAuthSlice = {
	token: "",
	isLoggedIn: true,
	logoutTimer: null,
};

const authSlice = createSlice({
	name: "editor",
	initialState: initialAuthSlice,
	reducers: {
		login(state, action) {
			state.token = action.payload.token;
			state.isLoggedIn = true;
		},
		logout(state, action) {
			state.token = "";
			state.isLoggedIn = false;
		},
	},
});

export const authActions = authSlice.actions;

export default authSlice.reducer;
