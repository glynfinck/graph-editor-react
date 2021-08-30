const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const alphabetToIndex = new Map();

for (let i = 0; i < alphabet.length; i++) {
	alphabetToIndex.set(alphabet[i], i + 1);
}

export const num2LetterID = (id) => {
	let quot = Math.floor(id / alphabet.length);
	let rem = id % alphabet.length;
	let letter = alphabet[rem];
	if (quot === 0) {
		return "" + letter;
	} else {
		return num2LetterID(quot - 1) + letter;
	}
};

export const letter2NumID = (id) => {
	let result = 0;
	for (let i = 0; i < id.length; i++) {
		result +=
			Math.pow(alphabet.length, id.length - i - 1) * alphabetToIndex.get(id[i]);
	}
	return result - 1;
};

const isLetterID = (id) => {
	return isNaN(id.toString());
};

export const getProperIndex = (id) => {
	if (isLetterID(id)) {
		return alphabetToIndex.get(id) - 1;
	} else {
		return +id;
	}
};

export const convertToGraphData = (nodes, edges, letterID) => {
	let converted_nodes = [];
	let converted_edges = [];

	if (nodes) {
		for (let i = 0; i < nodes.length; i++) {
			converted_nodes.push({ id: letterID ? num2LetterID(i) : `${i}` });
		}
	}

	if (edges) {
		for (let j = 0; j < edges.length; j++) {
			converted_edges.push({
				source: letterID ? num2LetterID(edges[j].source) : `${edges[j].source}`,
				target: letterID ? num2LetterID(edges[j].target) : `${edges[j].target}`,
			});
		}
	}

	return {
		nodes: converted_nodes,
		links: converted_edges,
	};
};

export const arraysEqual = (a, b) => {
	if (a === b) return true;
	if (a == null || b == null) return false;
	if (a.length !== b.length) return false;

	// If you don't care about the order of the elements inside
	// the array, you should sort both arrays here.
	// Please note that calling sort on an array will modify that array.
	// you might want to clone your array first.

	for (var i = 0; i < a.length; ++i) {
		if (a[i] !== b[i]) return false;
	}
	return true;
};

export const computeInitBBOX = (nodes, buffer = 100) => {
	if (!nodes) {
		return null;
	}
	if (nodes.length === 0) {
		return null;
	}
	const N = nodes.length;
	let min_x = nodes[0].x;
	let min_y = nodes[0].y;
	let max_x = nodes[0].x;
	let max_y = nodes[0].y;
	for (let i = 1; i < N; i++) {
		const node = nodes[i];
		if (node.x < min_x) {
			min_x = node.x;
		}
		if (node.y < min_y) {
			min_y = node.y;
		}
		if (node.x > max_x) {
			max_x = node.x;
		}
		if (node.y > max_y) {
			max_y = node.y;
		}
	}
	const result = {
		x: min_x - buffer,
		y: min_y - buffer,
		width: max_x + 2 * buffer - min_x,
		height: max_y + 2 * buffer - min_y,
	};
	console.log(result);
	return result;
};
