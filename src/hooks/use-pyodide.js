import { useState, useEffect, useCallback } from "react";

const usePyodide = () => {
	const [animation, setAnimation] = useState([]);
	const [output, setOutput] = useState("Initializing...");
	const [worker, setWorker] = useState();
	const [workerStatus, setWorkerStatus] = useState("WORKER_NOT_INITIALIZED");
	const [isWorkerLoaded, setIsWorkerLoaded] = useState(false);
	const [isStarted, setIsStarted] = useState(false);
	const [isFinished, setIsFinished] = useState(false);
	const [error, setError] = useState();

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
				case "PACKAGES_LOADED": {
					setWorkerStatus("PACKAGES_LOADED");
					setIsWorkerLoaded(true);
					addToOutput("Ready!");
					break;
				}
				case "CONOSOLE_OUTPUT": {
					if (isWorkerLoaded) {
						addToOutput(data.payload);
					}
					break;
				}
				case "ERROR_MESSAGE": {
					setError(data.payload);
					setIsStarted(false);
					addToOutput(data.payload);
					break;
				}
				case "ADD_FRAME": {
					let payload = { ...data };
					delete payload.frame_type;
					delete payload.type;
					setAnimation((prevAnimation) => {
						return [
							...prevAnimation,
							{
								type: data.frame_type,
								payload: payload,
							},
						];
					});
					break;
				}
				case "COMPLETED": {
					setIsFinished(true);
					setIsStarted(false);
					break;
				}
				default: {
					console.log("unrecognized message");
				}
			}
		},
		[isWorkerLoaded, addToOutput]
	);

	useEffect(() => {
		setWorker(new Worker("/webworker.js"));
		setWorkerStatus("WORKER_INITIALIZED");
	}, []);

	useEffect(() => {
		console.log(workerStatus);
	}, [workerStatus]);

	useEffect(() => {
		if (worker) {
			worker.onmessage = (e) => {
				handleWorkerMessages(e);
			};
		}
	}, [worker, handleWorkerMessages]);

	const runCode = (code, context = {}) => {
		setAnimation([]);
		setIsStarted(true);
		setIsFinished(false);
		setError(null);

		setOutput(">>>");
		worker.postMessage({ ...context, python: code });
	};

	return {
		animation: animation,
		isWorkerLoaded: isWorkerLoaded,
		isCodeStarted: isStarted,
		isCodeFinished: isFinished,
		error: error,
		output: output,
		runCode: runCode,
	};
};

export default usePyodide;
