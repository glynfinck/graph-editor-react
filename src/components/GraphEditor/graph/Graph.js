import { GraphView } from "react-digraph";

import classes from "./Graph.module.css";
import { useSelector, useDispatch } from "react-redux";

import {
	NodeTypes,
	NodeSubtypes,
	EdgeTypes,
} from "../../../store/graph/graph-types";
import { graphActions } from "../../../store/graph/graph";
import { useState } from "react";

const NODE_KEY = "id";

const Graph = () => {
	const nodes = useSelector((state) => state.graph.nodes);
	const edges = useSelector((state) => state.graph.edges);
	const [selected, setSelected] = useState({});

	const disptach = useDispatch();

	let nodes_copy = JSON.parse(JSON.stringify(nodes));

	const onCreateNode = (x, y, mouseEvent) => {
		disptach(graphActions.addNode({ x: +x, y: +y }));
	};

	const onCreateEdge = (source, target) => {
		// console.log(source, target);
		disptach(graphActions.addEdge({ source: source.id, target: target.id }));
	};

	const canCreateEdge = (source, target) => {
		// console.log(source, target);
		return true;
	};

	const onSelect = (selected) => {
		setSelected(selected);
	};

	const onSwapEdge = (event) => {
		// console.log(event);
	};

	const onDeleteSelected = (deleteSelected) => {
		let delNodes = [];
		let delEdges = [];
		if (!!deleteSelected.nodes) {
			deleteSelected.nodes.forEach((value, key, map) => {
				delNodes.push(value.id);
			});
		}
		if (!!deleteSelected.edges) {
			deleteSelected.edges.forEach((value, key, map) => {
				delEdges.push([value.source, value.target]);
			});
		}
		disptach(graphActions.deleteSelected({ nodes: delNodes, edges: delEdges }));
	};

	const onUpdateNode = (node) => {
		disptach(graphActions.updateNode({ ...node }));
	};

	return (
		<div className={classes.graph}>
			<GraphView
				nodeKey={NODE_KEY}
				nodes={nodes_copy}
				edges={edges}
				selected={selected}
				nodeTypes={NodeTypes}
				nodeSubtypes={NodeSubtypes}
				edgeTypes={EdgeTypes}
				showGraphControls={true}
				allowMultiselect={true} // true by default, set to false to disable multi select.
				onCreateNode={onCreateNode}
				onCreateEdge={onCreateEdge}
				onSelect={onSelect}
				onSwapEdge={onSwapEdge}
				onDeleteSelected={onDeleteSelected}
				onUpdateNode={onUpdateNode}
				canCreateEdge={canCreateEdge}
			/>
		</div>
	);
};

export default Graph;

// class GraphDigraph extends Component {
// 	/* Define custom graph editing methods here */

// 	render() {
// 		// const nodes = this.state.nodes;
// 		// const edges = this.state.edges;
// 		// const selected = this.state.selected;

// 		const NodeTypes = GraphConfig.NodeTypes;
// 		const NodeSubtypes = GraphConfig.NodeSubtypes;
// 		const EdgeTypes = GraphConfig.EdgeTypes;

// 		return (
// 			<div className={classes.graph}>
// 				<GraphView
// 					ref="GraphView"
// 					nodeKey={NODE_KEY}
// 					nodes={null}
// 					edges={null}
// 					selected={null}
// 					nodeTypes={NodeTypes}
// 					nodeSubtypes={NodeSubtypes}
// 					edgeTypes={EdgeTypes}
// 					allowMultiselect={true} // true by default, set to false to disable multi select.
// 					onSelect={this.onSelect}
// 					onCreateNode={this.onCreateNode}
// 					onUpdateNode={this.onUpdateNode}
// 					onDeleteNode={this.onDeleteNode}
// 					onCreateEdge={this.onCreateEdge}
// 					onSwapEdge={this.onSwapEdge}
// 					onDeleteEdge={this.onDeleteEdge}
// 				/>
// 			</div>
// 		);
// 	}
// }

// const mapStateToProps = (state) => {
// 	return {
// 		nodes: state.graph.nodes,
// 		edges: state.graph.edges,
// 	};
// };

// export default connect(mapStateToProps)(GraphDigraph);
