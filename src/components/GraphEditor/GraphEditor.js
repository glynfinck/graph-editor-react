import { Split } from "@geoffcox/react-splitter";
import GraphWindow from "./graph/GraphWindow";
import EditorWindow from "./editor/EditorWindow";

import classes from "./GraphEdtior.module.css";

const minWindowWidth = 400;

const GraphEditor = ({ width, height }) => {
	const onSplitPaneChanged = (event) => {
		console.log(+event[0] / 100);
	};

	const colors = {
		color: "#f1f1f1",
		hover: "#f1f1f1",
		drag: "#f1f1f1",
	};

	const renderSplitter = (props) => {
		return <div className={classes.splitter}></div>;
	};

	return (
		<Split
			renderSplitter={renderSplitter}
			splitterSize={"8px"}
			defaultSplitterColors={colors}
			minPrimarySize={`${minWindowWidth}px`}
			minSecondarySize={`${minWindowWidth}px`}
			initialPrimarySize={"70%"}
			onChange={onSplitPaneChanged}
		>
			<GraphWindow></GraphWindow>
			<EditorWindow></EditorWindow>
		</Split>
	);
};

export default GraphEditor;
