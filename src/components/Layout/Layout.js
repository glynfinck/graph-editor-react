import classes from "./Layout.module.css";
import MainNavigation from "./MainNavigation";
import { Flex, Box } from "rebass";

const Layout = (props) => {
	console.log(classes);
	return (
		<Flex flexDirection="column" height="100%" width="100%">
			<Box height="50px">
				<MainNavigation />
			</Box>
			<Box flexGrow="1">{props.children}</Box>
		</Flex>
	);
};

export default Layout;
