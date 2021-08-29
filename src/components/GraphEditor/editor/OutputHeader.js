import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Row, Col } from "react-bootstrap";
import classes from "./OutputHeader.module.css";

const OutputHeader = (props) => {
	return (
		<Row style={{ backgroundColor: "#f1f1f1" }}>
			<Col style={{ float: "left", marginLeft: "2px" }}>
				<div>
					<button className={classes["button-nav"]} disabled>
						Console
					</button>
				</div>
			</Col>
			<Col style={{ float: "right", marginRight: "2px" }}>
				<div style={{ float: "right" }}>
					<button className={classes["button-action"]}>
						<ExpandLessIcon />
					</button>
					<button className={classes["button-nav"]}>
						<ExpandMoreIcon />
					</button>
				</div>
			</Col>
		</Row>
	);
};

export default OutputHeader;
