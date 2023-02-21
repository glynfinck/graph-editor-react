const graphData = [
  {
    name: "A simple graph",
    slug: "a-simple-graph",
    description: "A simple graph with 4 nodes.",
    image:
      "https://firebasestorage.googleapis.com/v0/b/graph-editor-7e4ef.appspot.com/o/a-simple-graph.png?alt=media&token=f947b0a3-5065-4265-bf80-506beb32dfb2",
    dataStructureType: "graph",
    editable: true,
    graph: {
      nodes: [
        {
          id: 1,
          title: "A",
          x: 258.3976135253906,
          y: 331.9783248901367,
        },
        {
          id: 2,
          title: "B",
          x: 593.9393920898438,
          y: 260.6060791015625,
        },
        {
          id: 3,
          title: "C",
          x: 300.5757598876953,
          y: 700.81818389892578,
        },
        {
          id: 4,
          title: "D",
          x: 600.5757598876953,
          y: 600.81818389892578,
        },
      ],
      edges: [
        {
          source: 1,
          target: 2,
        },
        {
          source: 1,
          target: 3,
        },
        {
          source: 4,
          target: 1,
        },
        {
          source: 2,
          target: 4,
        },
        {
          source: 3,
          target: 4,
        },
      ],
    },
  },
  {
    name: "A complicated graph",
    slug: "a-complicated-graph",
    description: "A complicated graph with 8 nodes.",
    image:
      "https://firebasestorage.googleapis.com/v0/b/graph-editor-7e4ef.appspot.com/o/a-complicated-graph.png?alt=media&token=74230be3-3ac4-4c78-a7cc-66b188207a0d",
    dataStructureType: "graph",
    editable: true,
    graph: {
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
          y: 700.8181838989258,
          type: "none",
        },
        {
          id: 4,
          title: "D",
          x: 600.5757598876953,
          y: 600.8181838989258,
          type: "none",
        },
        {
          id: 912324,
          title: "E",
          x: 402.6690368652344,
          y: 36.54499435424805,
          type: "none",
        },
        {
          id: 62195,
          title: "F",
          x: 571.9553833007812,
          y: 869.56787109375,
          type: "none",
        },
        {
          id: 915328,
          title: "G",
          x: 102.64671325683594,
          y: 505.8536376953125,
          type: "none",
        },
        {
          id: 465871,
          title: "H",
          x: 766.3832397460938,
          y: 458.92279052734375,
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
        {
          source: 915328,
          target: 3,
          type: "emptyEdge",
        },
        {
          source: 1,
          target: 912324,
          type: "emptyEdge",
        },
        {
          source: 912324,
          target: 4,
          type: "emptyEdge",
        },
        {
          source: 62195,
          target: 1,
          type: "emptyEdge",
        },
        {
          source: 62195,
          target: 465871,
          type: "emptyEdge",
        },
        {
          source: 465871,
          target: 1,
          type: "emptyEdge",
        },
        {
          source: 915328,
          target: 2,
          type: "emptyEdge",
        },
      ],
    },
  },
  {
    name: "A simple graph (2)",
    slug: "a-simple-graph-2",
    description: "A simple graph with 4 nodes.",
    image:
      "https://firebasestorage.googleapis.com/v0/b/graph-editor-7e4ef.appspot.com/o/a-simple-graph.png?alt=media&token=f947b0a3-5065-4265-bf80-506beb32dfb2",
    dataStructureType: "graph",
    editable: true,
    graph: {
      nodes: [
        {
          id: 1,
          title: "A",
          x: 258.3976135253906,
          y: 331.9783248901367,
        },
        {
          id: 2,
          title: "B",
          x: 593.9393920898438,
          y: 260.6060791015625,
        },
        {
          id: 3,
          title: "C",
          x: 300.5757598876953,
          y: 700.81818389892578,
        },
        {
          id: 4,
          title: "D",
          x: 600.5757598876953,
          y: 600.81818389892578,
        },
      ],
      edges: [
        {
          source: 1,
          target: 2,
        },
        {
          source: 1,
          target: 3,
        },
        {
          source: 4,
          target: 1,
        },
        {
          source: 2,
          target: 4,
        },
        {
          source: 3,
          target: 4,
        },
      ],
    },
  },
  {
    name: "A simple graph that is static",
    slug: "a-simple-graph-that-is-static",
    description: "A simple graph with 4 nodes.",
    image:
      "https://firebasestorage.googleapis.com/v0/b/graph-editor-7e4ef.appspot.com/o/a-simple-graph.png?alt=media&token=f947b0a3-5065-4265-bf80-506beb32dfb2",
    dataStructureType: "graph",
    editable: false,
    graph: {
      nodes: [
        {
          id: 1,
          title: "A",
          x: 258.3976135253906,
          y: 331.9783248901367,
        },
        {
          id: 2,
          title: "B",
          x: 593.9393920898438,
          y: 260.6060791015625,
        },
        {
          id: 3,
          title: "C",
          x: 300.5757598876953,
          y: 700.81818389892578,
        },
        {
          id: 4,
          title: "D",
          x: 600.5757598876953,
          y: 600.81818389892578,
        },
      ],
      edges: [
        {
          source: 1,
          target: 2,
        },
        {
          source: 1,
          target: 3,
        },
        {
          source: 4,
          target: 1,
        },
        {
          source: 2,
          target: 4,
        },
        {
          source: 3,
          target: 4,
        },
      ],
    },
  },
  {
    name: "A simple graph that is editable",
    slug: "a-simple-graph-editable",
    description: "A simple graph with 4 nodes.",
    image:
      "https://firebasestorage.googleapis.com/v0/b/graph-editor-7e4ef.appspot.com/o/a-simple-graph.png?alt=media&token=f947b0a3-5065-4265-bf80-506beb32dfb2",
    dataStructureType: "graph",
    editable: true,
    graph: {
      nodes: [
        {
          id: 1,
          title: "A",
          x: 258.3976135253906,
          y: 331.9783248901367,
        },
        {
          id: 2,
          title: "B",
          x: 593.9393920898438,
          y: 260.6060791015625,
        },
        {
          id: 3,
          title: "C",
          x: 300.5757598876953,
          y: 700.81818389892578,
        },
        {
          id: 4,
          title: "D",
          x: 600.5757598876953,
          y: 600.81818389892578,
        },
      ],
      edges: [
        {
          source: 1,
          target: 2,
        },
        {
          source: 1,
          target: 3,
        },
        {
          source: 4,
          target: 1,
        },
        {
          source: 2,
          target: 4,
        },
        {
          source: 3,
          target: 4,
        },
      ],
    },
  },
  {
    name: "A simple graph (6)",
    slug: "a-simple-graph-6",
    description: "A simple graph with 4 nodes.",
    image:
      "https://firebasestorage.googleapis.com/v0/b/graph-editor-7e4ef.appspot.com/o/a-simple-graph.png?alt=media&token=f947b0a3-5065-4265-bf80-506beb32dfb2",
    dataStructureType: "graph",
    editable: true,
    graph: {
      nodes: [
        {
          id: 1,
          title: "A",
          x: 258.3976135253906,
          y: 331.9783248901367,
        },
        {
          id: 2,
          title: "B",
          x: 593.9393920898438,
          y: 260.6060791015625,
        },
        {
          id: 3,
          title: "C",
          x: 300.5757598876953,
          y: 700.81818389892578,
        },
        {
          id: 4,
          title: "D",
          x: 600.5757598876953,
          y: 600.81818389892578,
        },
      ],
      edges: [
        {
          source: 1,
          target: 2,
        },
        {
          source: 1,
          target: 3,
        },
        {
          source: 4,
          target: 1,
        },
        {
          source: 2,
          target: 4,
        },
        {
          source: 3,
          target: 4,
        },
      ],
    },
  },
];

export default graphData;
