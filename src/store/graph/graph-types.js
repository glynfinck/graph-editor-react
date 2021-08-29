export const NodeTypes = {
	activated: {
		// required to show empty nodes
		shapeId: "#activated", // relates to the type property of a node
		textSize: "30px",
		shape: (
			<symbol viewBox="0 0 100 100" id="activated" key="0">
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
				<circle cx="25" cy="25" r="8" fill="lightgreen"></circle>
			</symbol>
		),
	},
};
