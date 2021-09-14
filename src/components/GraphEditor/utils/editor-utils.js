export const generateContext = (nodes, edges) => {
	let contextNodes = [];
	let contextEdges = [];
	let contextNodeIDs = [];
	// construct map O(n)
	let idMap = new Map();
	nodes.forEach((value, idx, arr) => {
		contextNodes.push(value.title);
		contextNodeIDs.push(value.id);
		idMap.set(value.id, value.title);
	});
	// set context O(m)
	edges.forEach((value, idx, arr) => {
		contextEdges.push([idMap.get(value.source), idMap.get(value.target)]);
	});
	return {
		nodes: contextNodes,
		edges: contextEdges,
		node_ids: contextNodeIDs,
	};
};
