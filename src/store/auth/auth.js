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

			// localStorage.setItem("token", action.payload.token);
			// localStorage.setItem("expirationTime", action.payload.expirationTime);

			// const remainingTime = calculateRemainingTime(expirationTime);

			// logoutTimer = setTimeout(logoutHandler, remainingTime);
		},
		logout(state, action) {
			state.token = "";
			state.isLoggedIn = false;
		},
	},
});

export const authActions = authSlice.actions;

export default authSlice.reducer;
