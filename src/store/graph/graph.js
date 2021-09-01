import { createSlice } from "@reduxjs/toolkit";
import {
	num2LetterID,
	getPreviousNodeName,
	getPreviousEdgeName,
	getCurrentNodeName,
	getCurrentEdgeName,
} from "../../utils/graph-utils";

export const animationSpeedDefault = 70;

const initialGraphState = {
	directed: false,
	letterID: true,
	compliationSuccess: false,
	compliationFinished: false,
	simulationStarted: false,
	animationSpeed: animationSpeedDefault,
	currentNode: null,
	currentEdge: null,
	animating: false,
	nodes: [
		{
			id: 1,
			title: "A",
			x: 258.3976135253906,
			y: 331.9783248901367,
			type: "none",
		},
		{
			id: 2,
			title: "B",
			x: 593.9393920898438,
			y: 260.6060791015625,
			type: "none",
		},
		{
			id: 3,
			title: "C",
			x: 300.5757598876953,
			y: 700.81818389892578,
			type: "none",
		},
		{
			id: 4,
			title: "D",
			x: 600.5757598876953,
			y: 600.81818389892578,
			type: "none",
		},
	],
	edges: [
		{
			source: 1,
			target: 2,
			type: "emptyEdge",
		},
		{
			source: 1,
			target: 3,
			type: "emptyEdge",
		},
		{
			source: 4,
			target: 1,
			type: "emptyEdge",
		},
		{
			source: 2,
			target: 4,
			type: "emptyEdge",
		},
		{
			source: 3,
			target: 4,
			type: "emptyEdge",
		},
	],
	animation: [],
};

const graphSlice = createSlice({
	name: "graph",
	initialState: initialGraphState,
	reducers: {
		addNode(state, action) {
			const N = state.nodes.length;
			const newNode = {
				id: Math.floor(Math.random() * Math.pow(10, 6)),
				title: num2LetterID(N),
				x: action.payload.x,
				y: action.payload.y,
				type: "none",
			};

			state.nodes.push(newNode);
			state.nodes = state.nodes.map((node, index) => {
				return {
					...node,
					title: num2LetterID(index),
				};
			});
		},
		updateNode(state, action) {
			const idx = state.nodes.findIndex((node) => {
				return node.id === action.payload.id;
			});
			if (idx !== -1) {
				state.nodes[idx] = action.payload;
			}
		},
		deleteSelected(state, action) {
			const { nodes, edges } = action.payload;
			if (!!nodes) {
				const N = state.nodes.length;
				// figure out which nodes to delete O(n)
				const delNodes = state.nodes.map((node) => {
					return false;
				});
				for (let i = 0; i < N; i++) {
					if (nodes.includes(state.nodes[i].id)) {
						delNodes[i] = true;
					}
				}
				// delete each node (and its neighbors) starting from the end
				// in order to preserve indexing O(n * m)

				for (let i = N - 1; i >= 0; i--) {
					let node = state.nodes[i];
					if (delNodes[i]) {
						// remove edges first
						const M = state.edges.length;
						for (let j = M - 1; j >= 0; j--) {
							let edge = state.edges[j];
							if (edge.source === node.id || edge.target === node.id) {
								state.edges.splice(j, 1);
							}
						}
						// remove node
						state.nodes.splice(i, 1);
					}
				}
			}
			if (!!edges) {
				let newEdges = [...state.edges];
				const M = newEdges.length;
				const K = edges.length;
				for (let j = M - 1; j >= 0; j--) {
					let edge = newEdges[j];
					for (let k = 0; k < K; k++) {
						let source_k = edges[k][0];
						let target_k = edges[k][1];
						if (edge.source === source_k && edge.target === target_k) {
							state.edges.splice(j, 1);
						}
					}
				}
			}
		},
		addEdge(state, action) {
			const { source, target } = action.payload;
			state.edges.push({
				source: source,
				target: target,
				type: "emptyEdge",
			});
		},
		addToAnimation(state, action) {
			state.animation.push(action.payload);
		},
		animate(state, action) {
			const { type, payload } = action.payload;
			switch (type) {
				case "PYTHON_SET_CURRENT": {
					// if our new current is an edge
					if (payload.source && payload.target) {
						const edge_idx = state.edges.findIndex((edge) => {
							return (
								(edge.source === payload.source &&
									edge.target === payload.target) ||
								(edge.source === payload.target &&
									edge.target === payload.source)
							);
						});

						// if the edge exists
						if (edge_idx !== -1) {
							// un-set old current
							if (state.currentNode !== null) {
								const curr_node_idx = state.currentNode;
								const curr_node = state.nodes[curr_node_idx];

								state.nodes[curr_node_idx].type = getPreviousNodeName(
									curr_node
								);
							}
							if (state.currentEdge !== null) {
								const curr_edge_idx = state.currentEdge;
								const curr_edge = state.edges[curr_edge_idx];

								state.edges[curr_edge_idx].type = getPreviousEdgeName(
									curr_edge
								);
							}

							// set new current edge
							const edge = state.edges[edge_idx];
							if (payload.peek) {
								state.edges[edge_idx].type = getCurrentEdgeName(edge);
								state.currentNode = null;
								state.currentEdge = edge_idx;
							} else {
								state.edges[edge_idx].type = payload.path
									? "pathEdge"
									: "activatedEdge";
								state.edges[edge_idx].type = getCurrentEdgeName(edge);
								state.currentNode = null;
								state.currentEdge = edge_idx;
							}
						}
					} else {
						// the new current is a node
						const node_idx = state.nodes.findIndex((node) => {
							return node.id === payload.id;
						});

						// if the node exists
						if (node_idx !== -1) {
							// un-set old current
							if (state.currentNode !== null) {
								const curr_node_idx = state.currentNode;
								const curr_node = state.nodes[curr_node_idx];

								state.nodes[curr_node_idx].type = getPreviousNodeName(
									curr_node
								);
							}
							if (state.currentEdge !== null) {
								const curr_edge_idx = state.currentEdge;
								const curr_edge = state.edges[curr_edge_idx];

								state.edges[curr_edge_idx].type = getPreviousEdgeName(
									curr_edge
								);
							}

							// set new current node
							const node = state.nodes[node_idx];
							if (payload.peek) {
								state.nodes[node_idx].type = getCurrentNodeName(node);
								state.currentNode = node_idx;
								state.currentEdge = null;
							} else {
								state.nodes[node_idx].type = payload.path
									? "path"
									: "activated";
								state.nodes[node_idx].type = getCurrentNodeName(node);
								state.currentNode = node_idx;
								state.currentEdge = null;
							}
						}
					}
					break;
				}
				case "RESET_CURRENT": {
					// un-set old current
					if (state.currentNode !== null) {
						const curr_node_idx = state.currentNode;
						const curr_node = state.nodes[curr_node_idx];

						state.nodes[curr_node_idx].type = getPreviousNodeName(curr_node);
					}
					if (state.currentEdge !== null) {
						const curr_edge_idx = state.currentEdge;
						const curr_edge = state.edges[curr_edge_idx];

						state.edges[curr_edge_idx].type = getPreviousEdgeName(curr_edge);
					}
					state.currentNode = null;
					state.currentEdge = null;
					break;
				}
				case "PYTHON_ACTIVATE_NODE": {
					const idx = state.nodes.findIndex((node) => {
						return node.id === +payload.id;
					});

					if (idx !== -1) {
						state.nodes[idx].type = "activated";
					}
					break;
				}
				case "PYTHON_ACTIVATE_EDGE":
					{
						const M = state.edges.length;
						for (let i = 0; i < M; i++) {
							const edge = state.edges[i];
							if (
								edge.source === payload.source &&
								edge.target === payload.target
							) {
								state.edges[i].type = "activatedEdge";
								break;
							}
						}
					}
					break;
				default:
					break;
			}
		},
		deactivateAllNodes(state, action) {
			state.nodes = state.nodes.map((node) => {
				return {
					...node,
					type: "none",
				};
			});
		},
		deactivateAllEdges(state, action) {
			state.edges = state.edges.map((edge) => {
				return {
					...edge,
					type: "emptyEdge",
				};
			});
		},
		resetGraph(state, action) {
			state.currentNode = null;
			state.currentEdge = null;
			state.nodes = state.nodes.map((node) => {
				return {
					...node,
					type: "none",
				};
			});
			state.edges = state.edges.map((edge) => {
				return {
					...edge,
					type: "emptyEdge",
				};
			});
		},
		setAnimation(state, action) {
			state.animationSpeed = action.payload;
		},

		compliationStarted(state, action) {
			state.simulationStarted = true;
			state.compliationFinished = false;
			state.compliationSuccess = false;
		},
		compliationSuccess(state, action) {
			state.compliationFinished = true;
			state.compliationSuccess = true;
		},
		compliationFailed(state, action) {
			state.simulationStarted = false;
			state.compliationFinished = true;
			state.compliationSuccess = false;
		},
		startAnimation(state, action) {
			state.animating = true;
		},
		finishAnimation(state, action) {
			state.simulationStarted = false;
			state.animating = false;
		},
		clearAnimation(state, action) {
			state.animation = [];
		},
		createRandomGraph(state, action) {
			//
		},
		shuffleIDs(state, action) {
			// TODO
		},
		toggleIDType(state, action) {
			// TODO
		},
	},
});

export const graphActions = graphSlice.actions;

export default graphSlice.reducer;
