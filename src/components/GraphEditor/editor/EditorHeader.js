import classes from "./EditorHeader.module.css";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import SettingsIcon from "@material-ui/icons/Settings";
import SaveIcon from "@material-ui/icons/Save";
import { Row, Col } from "react-bootstrap";
import { Fragment } from "react";
import HelpIcon from "@material-ui/icons/Help";
import { Flex, Text, Box } from "rebass";
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
		<Flex px={2} color="rgb(63,63,63)" bg="#f1f1f1" alignItems="center">
			<Box>
				<button
					className={classes["button-run"]}
					onClick={runPythonCode}
					disabled={props.disabled}
				>
					Run Code <PlayArrowIcon fontSize="small" className={classes.icon} />
				</button>
			</Box>
			<Box mx="auto" />
			<Box>
				<button className={classes["button"]} onClick={openHelpModalHandler}>
					<HelpIcon />
				</button>
				<button className={classes["button"]}>
					<SaveIcon />
				</button>
				<button className={classes["button"]}>
					<SettingsIcon />
				</button>
			</Box>
		</Flex>
		// <Row
		// 	style={{
		// 		height: "40px",
		// 		backgroundColor: "#f1f1f1",
		// 		padding: "0px",
		// 	}}
		// >
		// 	<Col style={{ float: "left", marginLeft: "2px", padding: "0px" }}>
		//
		// 	</Col>
		// 	<Col style={{ float: "right", marginRight: "0px", padding: "0px" }}>
		// 		<div style={{ float: "right" }}>
		// 			<button className={classes["button"]}>
		// 				<HelpIcon />
		// 			</button>
		// 			<button className={classes["button"]}>
		// 				<SaveIcon />
		// 			</button>
		// 			<button className={classes["button"]}>
		// 				<SettingsIcon />
		// 			</button>
		// 		</div>
		// 	</Col>
		// </Row>
	);
};

export default EditorHeader;
