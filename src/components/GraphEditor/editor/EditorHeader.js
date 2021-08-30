import classes from "./EditorHeader.module.css";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import SettingsIcon from "@material-ui/icons/Settings";
import SaveIcon from "@material-ui/icons/Save";
import HelpIcon from "@material-ui/icons/Help";
import GitHubIcon from "@material-ui/icons/GitHub";
import { Flex, Text, Box, Link, Button } from "rebass";
import { useDispatch } from "react-redux";
import { uiActions } from "../../../store/ui/ui";

// import Slider from "@material-ui/core/Slider";

const EditorHeader = (props) => {
	const dispatch = useDispatch();

	const runPythonCode = () => {
		props.onRunPythonCode();
	};

	const openHelpModalHandler = () => {
		dispatch(uiActions.openHelpModal());
	};

	return (
		<Flex
			px={2}
			as="header"
			height="40px"
			alignContent="center"
			alignItems="center"
		>
			<Box>
				<button
					className={classes["button-run"]}
					onClick={runPythonCode}
					disabled={props.disabled}
				>
					<Flex alignContent="center" alignItems="center">
						<Text>Run Code</Text>
						<Box>
							<PlayArrowIcon fontSize="small" className={classes.icon} />
						</Box>
					</Flex>
				</button>
			</Box>
			<Box mx="auto" />
			<Box>
				<Button color="var(--primary-text)" onClick={openHelpModalHandler}>
					<HelpIcon />
				</Button>
				<Link
					href="https://github.com/glynfinck/graph-editor"
					color="var(--primary-text)"
				>
					<GitHubIcon />
				</Link>
			</Box>
		</Flex>
	);
};

export default EditorHeader;
