import { Split } from "@geoffcox/react-splitter";
import GraphWindow from "./graph/GraphWindow";
import EditorWindow from "./editor/EditorWindow";

import classes from "./GraphEdtior.module.css";
import usePyodide from "../../hooks/use-pyodide";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { graphActions } from "../../store/graph/graph";

const minWindowWidth = 400;

const GraphEditor = ({ width, height }) => {
	const dispatch = useDispatch();
	const {
		animation,
		isWorkerLoaded,
		isCodeStarted,
		isCodeFinished,
		error,
		output,
		runCode,
	} = usePyodide();

	useEffect(() => {
		if (isCodeFinished && !error) {
			dispatch(graphActions.compliationSuccess());
			dispatch(graphActions.startAnimation());
		} else {
			dispatch(graphActions.compliationFailed());
		}
	}, [isCodeFinished, error, dispatch]);

	useEffect(() => {
		if (isCodeStarted) {
			dispatch(graphActions.compliationStarted());
		}
	}, [isCodeStarted, dispatch]);

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
			initialPrimarySize={"50%"}
			onChange={onSplitPaneChanged}
		>
			<GraphWindow
				isCodeFinished={isCodeFinished}
				isWorkerLoaded={isWorkerLoaded}
			></GraphWindow>
			<EditorWindow
				runCode={runCode}
				output={output}
				isWorkerLoaded={isWorkerLoaded}
				isCodeFinished={isCodeFinished}
				error={error}
				animation={animation}
			></EditorWindow>
		</Split>
	);
};

export default GraphEditor;
