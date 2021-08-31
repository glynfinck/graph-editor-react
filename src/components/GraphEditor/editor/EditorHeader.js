import classes from "./EditorHeader.module.css";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import SettingsIcon from "@material-ui/icons/Settings";
import SaveIcon from "@material-ui/icons/Save";
import HelpIcon from "@material-ui/icons/Help";
import GitHubIcon from "@material-ui/icons/GitHub";
import { Flex, Box, Link, Button } from "rebass";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../../../store/ui/ui";
import { Select } from "@rebass/forms";

import ReactTooltip from "react-tooltip";
import { Fragment } from "react";

// import Slider from "@material-ui/core/Slider";

const EditorHeader = (props) => {
	const dispatch = useDispatch();
	const simulationStarted = useSelector(
		(state) => state.graph.simulationStarted
	);
	const isEditorLoading = useSelector((state) => state.editor.isEditorLoading);
	const algorithms = useSelector((state) => state.editor.algorithms);

	const runPythonCode = () => {
		props.onRunPythonCode();
	};

	let runCode = (
		<Fragment>
			<Button
				pt="8px"
				pb="4px"
				pl="5px"
				color="var(--primary-text)"
				onClick={runPythonCode}
			>
				<PlayArrowIcon data-tip data-for="run-code-button" />
			</Button>
			<ReactTooltip
				id="run-code-button"
				type="dark"
				effect="solid"
				place="bottom"
			>
				<span>Run Code</span>
			</ReactTooltip>
		</Fragment>
	);

	const disabled = simulationStarted || isEditorLoading;

	if (disabled) {
		runCode = (
			<Button
				pt="8px"
				pb="4px"
				pl="5px"
				color="var(--primary-text)"
				onClick={runPythonCode}
				disabled={disabled}
			>
				<PlayArrowIcon data-tip data-for="run-code-button" />
			</Button>
		);
	}

	return (
		<Fragment>
			<Flex px={2} as="header" height="40px" alignItems="center" textAlign>
				{runCode}
				<Select
					id="algorithm"
					name="algorithm"
					defaultValue="DFS"
					height="28px"
					width="120px"
					fontSize="15px"
					px="auto"
					p="5px 10px"
					color="var(--primary-text)"
					style={{ borderRadius: "5px" }}
					data-tip
					data-for="select-algorithm"
				>
					{algorithms.map((value, index, arr) => (
						<option key={index}>{value.name}</option>
					))}
				</Select>
				<ReactTooltip
					id="select-algorithm"
					type="dark"
					effect="solid"
					place="bottom"
				>
					<span>Algorithm</span>
				</ReactTooltip>
				<Box mx="auto" />
			</Flex>
		</Fragment>
	);
};

export default EditorHeader;
