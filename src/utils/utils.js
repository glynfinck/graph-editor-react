export const loadTextFile = (path) => {
	const load = async () => {
		const r = await fetch(path);
		const text = await r.text();
		return text;
	};
	return load();
};