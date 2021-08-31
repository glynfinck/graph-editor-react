export const calculateRemainingTime = (expirationTime) => {
	const currentTime = new Date().getTime();
	const adjExpirationTime = new Date(expirationTime).getTime();

	const remainingDuration = adjExpirationTime - currentTime;

	return remainingDuration;
};

export const retrieveStoredToken = () => {
	const storedToken = localStorage.getItem("token");
	const storedExpirationDate = localStorage.getItem("expirationTime");

	const remainingTime = calculateRemainingTime(storedExpirationDate);

	if (remainingTime <= 3600) {
		localStorage.removeItem("token");
		localStorage.removeItem("expirationTime");
		return null;
	}

	return {
		token: storedToken,
		duration: remainingTime,
	};
};
