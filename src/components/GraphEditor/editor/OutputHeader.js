import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Flex, Box, Text } from "rebass";

const OutputHeader = (props) => {
	return (
		<Flex
			px={2}
			as="header"
			height="30px"
			alignContent="center"
			alignItems="center"
			textAlign
		>
			<Text>Console</Text>
			<Box mx="auto"></Box>
			<Box>
				<button>
					<ExpandLessIcon />
				</button>
				<button>
					<ExpandMoreIcon />
				</button>
			</Box>
		</Flex>
		// <Row style={{ backgroundColor: "#f1f1f1" }}>
		// 	<Col style={{ float: "left", marginLeft: "2px" }}>
		// 		<div>
		// 			<button className={classes["button-nav"]} disabled>
		// 				Console
		// 			</button>
		// 		</div>
		// 	</Col>
		// 	<Col style={{ float: "right", marginRight: "2px" }}>
		// 		<div style={{ float: "right" }}>
		// 			<button className={classes["button-action"]}>
		// 				<ExpandLessIcon />
		// 			</button>
		// 			<button className={classes["button-nav"]}>
		// 				<ExpandMoreIcon />
		// 			</button>
		// 		</div>
		// 	</Col>
		// </Row>
	);
};

export default OutputHeader;
