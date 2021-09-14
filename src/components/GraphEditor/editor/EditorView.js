import { Component } from "react";

class EditorView extends Component {
	static defaultProps = {
		code: "",
		isPyodideLoaded: false,
		isCodeRunning: false,
	};

	static getDerivedStateFromProps(nextProps, prevState) {
		const { nodes, edges, code, isPyodideLoaded, isCodeRunning } = nextProps;

		const nextState = {
			...prevState,
			nodes: nodes,
			edges: edges,
			code: code,
			isPyodideLoaded: isPyodideLoaded,
			isCodeRunning: isCodeRunning,
		};

		return nextState;
	}

	constructor(props) {
		super(props);

		this.state = {
			worker: null,
			nodes: props.nodes,
			edges: props.edges,
			code: props.code,
			error: null,
			output: "",
			isPyodideLoaded: props.isPyodideLoaded,
			isCodeRunning: props.isCodeRunning,
			animation: [],
		};
	}

	addToOutput = (s) => {
		this.setState((prevState) => {
			return {
				...prevState,
				output: prevState.output + "\n" + s,
			};
		});
	};

	handleWorkerMessages = (e) => {
		const { data } = e;
		switch (data.type) {
			case "PACKAGES_LOADED": {
        this.setState()
				this.state.isPyodideLoaded = true;
				this.addToOutput("Ready!");
				break;
			}
			case "CONOSOLE_OUTPUT": {
				if (this.state.isPyodideLoaded) {
					this.addToOutput(data.payload);
				}
				break;
			}
			case "ERROR_MESSAGE": {
				
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
	};

	componentDidMount() {
		this.setState((prevState) => {
			let pyodide_worker = new Worker("./webworker.js");

			return {
				...prevState,
				worker: pyodide_worker,
			};
		});
	}
	componentDidUpdate() {}
	componentWillReceiveProps() {}

	render() {
		return <div></div>;
	}
}
