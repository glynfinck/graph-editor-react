import Editor from "@monaco-editor/react";
import classes from "./EditorWindow.module.css";
import { useEffect, useState, useCallback } from "react";
import { Split } from "@geoffcox/react-splitter";
import EditorHeader from "./EditorHeader";
import { useSelector, useDispatch } from "react-redux";
import { useResizeDetector } from "react-resize-detector";

import pythonGraphPath from "../python/graph.py";
import boilerPlatePath from "../python/boilerplate.py";
import { graphActions } from "../../../store/graph/graph";
import OutputWindow from "./OutputWindow";
import { Row, Col } from "react-bootstrap";
import OutputHeader from "./OutputHeader";
import { editorActions } from "../../../store/editor/editor";

const loadPythonCode = (path) => {
	const load = async () => {
		const r = await fetch(path);
		const text = await r.text();
		return text;
	};
	return load();
};

const sleep = (ms) => {
	return new Promise((resolve) => setTimeout(resolve, ms));
};

const EditorWindow = (props) => {
	const nodes = useSelector((state) => state.graph.nodes);
	const edges = useSelector((state) => state.graph.edges);
	const animation = useSelector((state) => state.graph.animation);
	const animating = useSelector((state) => state.graph.animating);
	const animationSpeed = useSelector((state) => state.graph.animationSpeed);
	const { width, height, ref } = useResizeDetector();
	const compliationSuccess = useSelector(
		(state) => state.graph.compliationSuccess
	);
	const compliationFinished = useSelector(
		(state) => state.graph.compliationFinished
	);
	// const animation = useSelector((state) => state.graph.animation);
	const [code, setCode] = useState("");
	const [pythonCode, setPythonCode] = useState("");
	const [context, setContext] = useState();
	const [output, setOutput] = useState("Initializing...");
	const [worker, setWorker] = useState();
	const [isPyodideLoaded, setIsPyodideLoaded] = useState(false);
	const dispatch = useDispatch();

	const addToOutput = useCallback(
		(s) => {
			setOutput((oldOutput) => {
				return (oldOutput += "\n" + s);
			});
		},
		[setOutput]
	);

	const handleWorkerMessages = useCallback(
		(e) => {
			const { data } = e;
			switch (data.type) {
				case "WORKER_INIT": {
					setIsPyodideLoaded(data.payload);
					break;
				}
				case "CONOSOLE_OUTPUT": {
					if (isPyodideLoaded) {
						addToOutput(data.payload);
					}
					break;
				}
				case "ERROR_MESSAGE": {
					dispatch(graphActions.compliationFailed());
					addToOutput(data.payload);
					break;
				}
				case "PYTHON_ACTIVATE_NODE": {
					dispatch(
						graphActions.addToAnimation({ type: data.type, payload: data.id })
					);
					break;
				}
				case "PYTHON_ACTIVATE_EDGE": {
					dispatch(
						graphActions.addToAnimation({
							type: data.type,
							payload: { source: data.source, target: data.target },
						})
					);
					break;
				}
				case "COMPLETED": {
					dispatch(graphActions.compliationSuccess());
					dispatch(graphActions.startAnimation());
					break;
				}
				default: {
					console.log("unrecognized message");
				}
			}
		},
		[isPyodideLoaded, addToOutput, dispatch]
	);

	const animateHelper = useCallback(
		async (ms) => {
			for (let i = 0; i < animation.length; i++) {
				await sleep(ms);
				dispatch(graphActions.animate(animation[i]));
			}
			dispatch(graphActions.finishAnimation());
		},
		[animation, dispatch]
	);

	useEffect(() => {
		if (animating) {
			animateHelper((101 - animationSpeed) * 10);
		}
	}, [animating, animationSpeed, animateHelper]);

	useEffect(() => {
		setWorker(new Worker("./webworker.js"));
		loadPythonCode(boilerPlatePath).then((code) => {
			setCode(code);
		});

		loadPythonCode(pythonGraphPath).then((code) => {
			setPythonCode(code);
		});
	}, []);

	useEffect(() => {
		if (isPyodideLoaded) {
			setOutput((output) => {
				return output + "\nReady!";
			});
			dispatch(editorActions.setIsEditorLoading(!isPyodideLoaded));
		}
	}, [isPyodideLoaded, dispatch]);

	useEffect(() => {
		let contextNodes = [];
		let contextEdges = [];
		// construct map O(n)
		let idMap = new Map();
		nodes.forEach((value, idx, arr) => {
			contextNodes.push(value.title);
			idMap.set(value.id, value.title);
		});
		// set context O(m)
		edges.forEach((value, idx, arr) => {
			contextEdges.push([idMap.get(value.source), idMap.get(value.target)]);
		});
		setContext({ nodes: contextNodes, edges: contextEdges });
	}, [nodes, edges]);

	useEffect(() => {
		if (worker) {
			worker.onmessage = (e) => {
				handleWorkerMessages(e);
			};
		}
	}, [worker, handleWorkerMessages]);

	const changeCodeHandler = (code) => {
		setCode(code);
	};

	const onRunPythonCode = async () => {
		setOutput(">>>");
		dispatch(graphActions.compliationStarted());
		dispatch(graphActions.clearAnimation());
		dispatch(graphActions.deactivateAll());
		const codeMessage = `${pythonCode}\n\n${code}`;
		worker.postMessage({ ...context, python: codeMessage });
	};

	const options = {
		minimap: {
			enabled: false,
		},
	};

	const canRun = code !== "" && pythonCode !== "" && isPyodideLoaded;

	return (
		<Split
			renderSplitter={() => <OutputHeader />}
			splitterSize={"30px"}
			initialPrimarySize="80%"
			horizontal
		>
			<div style={{ height: "100%" }}>
				<EditorHeader
					onRunPythonCode={onRunPythonCode}
					disabled={!canRun}
				></EditorHeader>
				<div style={{ height: "100%", marginTop: "1px" }} ref={ref}>
					<Row>
						<Col>
							<Editor
								defaultLanguage="python"
								theme="vs-light"
								width={width}
								height={height}
								value={code}
								options={options}
								onChange={changeCodeHandler}
							/>
						</Col>
					</Row>
				</div>
			</div>
			<div className={classes.output}>
				<OutputWindow output={output}></OutputWindow>
			</div>
		</Split>
	);
};

export default EditorWindow;
