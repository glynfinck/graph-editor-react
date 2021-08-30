// import { Graph } from "react-d3-graph";
import { withResizeDetector } from "react-resize-detector";

import classes from "./GraphWindow.module.css";
import GraphHeader from "./GraphHeader";
import Graph from "./Graph";
import { Row, Col } from "react-bootstrap";

// const headerHeight = 50;

const GraphWindow = (props) => {
	return (
		<div className={classes["graph-window"]}>
			<div>
				<GraphHeader />
			</div>
			<div
				style={{
					height: "calc(100% - 30px)",
					width: "100%",
				}}
			>
				<Graph />
			</div>
		</div>
	);
};

export default withResizeDetector(GraphWindow);
