import { Row, Col } from "react-bootstrap";
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
