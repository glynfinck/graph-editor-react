import { Row, Col } from "react-bootstrap";
import MonacoEditor from "@monaco-editor/react";
import { useResizeDetector } from "react-resize-detector";
import usePyodide from "../../../hooks/use-pyodide";
import {
	forwardRef,
	useImperativeHandle,
	useEffect,
	useState,
	useCallback,
} from "react";

import { generateContext } from "../utils/editor-utils";
import pythonGraphPath from "../python/graph.py";

const loadPythonCode = (path) => {
	const load = async () => {
		const r = await fetch(path);
		const text = await r.text();
		return text;
	};
	return load();
};

const Editor = forwardRef((props, ref) => {
	// props
	const {
		animating,
		onAnimate,
		onChangeOutput,
		onChangeCode,
		onChangeIsEditorLoaded,
		onChangeIsCodeStarted,
		onChangeIsCodeFinished,
	} = props;

	// use pyodide hook
	const {
		animation,
		isWorkerLoaded,
		isCodeStarted,
		isCodeFinished,
		error,
		output,
		runCode,
	} = usePyodide();

	// initialization
	const [pythonCode, setPythonCode] = useState("");
	useEffect(() => {
		loadPythonCode(pythonGraphPath).then((code) => {
			setPythonCode(code);
		});
	}, []);

	// resizing of monaco editor dynamically
	const { width, height, monacoRef } = useResizeDetector();

	// monaco editor options
	const options = {
		minimap: {
			enabled: false,
		},
	};

	// on change handlers
	const onChangeCodeHandler = (event) => {
		onChangeCode(event.target.value);
	};

	useEffect(() => {
		onChangeOutput(output);
	}, [output, onChangeOutput]);

	useEffect(() => {
		onChangeIsEditorLoaded(isWorkerLoaded);
	}, [isWorkerLoaded, onChangeIsEditorLoaded]);

	useEffect(() => {
		onChangeIsCodeStarted(isCodeStarted);
	}, [isCodeStarted, onChangeIsCodeStarted]);

	useEffect(() => {
		onChangeIsCodeFinished(isCodeFinished);
	}, [isCodeFinished, onChangeIsCodeFinished]);

	// call on animate function once the code has completed using an effect

	useEffect(() => {
		if (isWorkerLoaded && !isCodeStarted && isCodeFinished && !animating) {
			onAnimate(animation);
		}
	}, [
		animation,
		isWorkerLoaded,
		isCodeStarted,
		isCodeFinished,
		animating,
		onAnimate,
	]);

	// allow us to trigger our run code from the edtior window component
	useImperativeHandle(
		ref,
		() => ({
			runEditorCode(code, nodes, edges) {
				if (isWorkerLoaded && !isCodeStarted) {
					runCode(`${pythonCode}\n\n${code}`, generateContext(nodes, edges));
				}
			},
		}),
		[isWorkerLoaded, isCodeStarted, pythonCode, runCode]
	);

	return (
		<div style={{ height: "100%", marginTop: "1px" }} ref={monacoRef}>
			<MonacoEditor
				defaultLanguage="python"
				theme="vs-light"
				width={width}
				height={height}
				value={props.code}
				options={options}
				onChange={onChangeCodeHandler}
			/>
		</div>
	);
});

export default Editor;
