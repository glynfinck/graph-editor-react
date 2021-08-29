const sample = {
	nodes: [
		{
			id: 1,
			title: "Node A",
			x: 258.3976135253906,
			y: 331.9783248901367,
			type: "none",
		},
		{
			id: 2,
			title: "Node B",
			x: 593.9393920898438,
			y: 260.6060791015625,
			type: "none",
		},
		{
			id: 3,
			title: "Node C",
			x: 237.5757598876953,
			y: 61.81818389892578,
			type: "none",
		},
		{
			id: 4,
			title: "Node D",
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
};

export default sample;
