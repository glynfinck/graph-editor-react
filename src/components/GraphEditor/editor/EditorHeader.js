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
		<Flex px={2} as="header" height="40px" alignItems="center" textAlign>
			<Button
				pt="8px"
				pb="4px"
				pl="5px"
				color="var(--primary-text)"
				onClick={openHelpModalHandler}
			>
				<PlayArrowIcon />
			</Button>
			<Box mx="auto" />
			<Box>
				<Button
					pt="8px"
					pb="4px"
					pl="5px"
					color="var(--primary-text)"
					onClick={openHelpModalHandler}
				>
					<HelpIcon />
				</Button>
				<Link
					pt="8px"
					pb="4px"
					pl="5px"
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
