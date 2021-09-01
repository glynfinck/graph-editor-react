export const NodeTypes = {
	current: {
		shapeId: "#current", // relates to the type property of a node
		textSize: "30px",
		shape: (
			<symbol viewBox="0 0 100 100" id="current" key="0">
				<circle cx="50" cy="50" r="45"></circle>
			</symbol>
		),
	},
	currentActivated: {
		shapeId: "#currentActivated", // relates to the type property of a node
		textSize: "30px",
		shape: (
			<symbol viewBox="0 0 100 100" id="currentActivated" key="0">
				<circle cx="50" cy="50" r="45"></circle>
			</symbol>
		),
	},
	currentPath: {
		shapeId: "#currentPath", // relates to the type property of a node
		textSize: "30px",
		shape: (
			<symbol viewBox="0 0 100 100" id="currentPath" key="0">
				<circle cx="50" cy="50" r="45"></circle>
			</symbol>
		),
	},
	activated: {
		shapeId: "#activated", // relates to the type property of a node
		textSize: "30px",
		shape: (
			<symbol viewBox="0 0 100 100" id="activated" key="0">
				<circle cx="50" cy="50" r="45"></circle>
			</symbol>
		),
	},
	path: {
		shapeId: "#path", // relates to the type property of a node
		textSize: "30px",
		shape: (
			<symbol viewBox="0 0 100 100" id="path" key="0">
				<circle cx="50" cy="50" r="45"></circle>
			</symbol>
		),
	},
	none: {
		// required to show empty nodes
		shapeId: "#none", // relates to the type property of a node
		shape: (
			<symbol viewBox="0 0 100 100" id="none" key="0">
				<circle cx="50" cy="50" r="45"></circle>
			</symbol>
		),
	},
};
export const NodeSubtypes = {};
export const EdgeTypes = {
	emptyEdge: {
		// required to show empty edges
		shapeId: "#emptyEdge",
		shape: (
			<symbol viewBox="0 0 50 50" id="emptyEdge" key="0">
				<circle cx="25" cy="25" r="8" fill="white"></circle>
			</symbol>
		),
	},
	activatedEdge: {
		// required to show empty edges
		shapeId: "#activatedEdge",
		shape: (
			<symbol viewBox="0 0 50 50" id="activatedEdge" key="0">
				<circle cx="25" cy="25" r="8"></circle>
			</symbol>
		),
	},
	pathEdge: {
		// required to show empty edges
		shapeId: "#pathEdge",
		shape: (
			<symbol viewBox="0 0 50 50" id="pathEdge" key="0">
				<circle cx="25" cy="25" r="8"></circle>
			</symbol>
		),
	},

	currentEdge: {
		// required to show empty edges
		shapeId: "#currentEdge",
		shape: (
			<symbol viewBox="0 0 50 50" id="currentEdge" key="0">
				<circle cx="25" cy="25" r="8" fill="white"></circle>
			</symbol>
		),
	},
	currentActivatedEdge: {
		// required to show empty edges
		shapeId: "#currentActivatedEdge",
		shape: (
			<symbol viewBox="0 0 50 50" id="currentActivatedEdge" key="0">
				<circle cx="25" cy="25" r="8"></circle>
			</symbol>
		),
	},
	currentPathEdge: {
		// required to show empty edges
		shapeId: "#currentPathEdge",
		shape: (
			<symbol viewBox="0 0 50 50" id="currentPathEdge" key="0">
				<circle cx="25" cy="25" r="8"></circle>
			</symbol>
		),
	},
};
