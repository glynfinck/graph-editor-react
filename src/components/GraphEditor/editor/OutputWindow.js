import CloseIcon from "@material-ui/icons/Close";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { ButtonGroup, Button, Row, Col, Form } from "react-bootstrap";
import classes from "./OutputWindow.module.css";

const OutputWindow = (props) => {
	return (
		<Row style={{ height: "100%" }}>
			<Col style={{ height: "100%" }}>
				<textarea className={classes.textarea} value={props.output} disabled />
			</Col>
		</Row>
	);
};

export default OutputWindow;
