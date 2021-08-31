import { Flex, Box, Button, Text, Link, Image } from "rebass";
import SettingsIcon from "@material-ui/icons/Settings";
import HelpIcon from "@material-ui/icons/Help";
import GitHubIcon from "@material-ui/icons/GitHub";
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../../store/auth/auth";
import { uiActions } from "../../store/ui/ui";

const MainNavigation = (props) => {
	const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
	const dispatch = useDispatch();

	const logoutHandler = () => {
		dispatch(authActions.logout());
	};

	const openHelpModalHandler = () => {
		dispatch(uiActions.openHelpModal());
	};

	return (
		<Flex
			as="header"
			height="50px"
			style={{ borderBottom: "1px solid var(--secondary)" }}
			alignContent="center"
			alignItems="center"
			p={1}
		>
			<Image
				src="graph-editor-logo.png"
				variant="avatar"
				height="30px"
				px={2}
			/>
			<Text
				as="h2"
				fontWeight="lighter"
				color="var(--primary-text)"
				style={{ cursor: "default" }}
			>
				Squint Gerfunkle
			</Text>
			<Box mx="auto" />
			{!isLoggedIn && (
				<Button px={2} color="var(--primary-text)">
					Login
				</Button>
			)}
			{isLoggedIn && (
				<Button px={2} color="var(--primary-text)">
					Logout
				</Button>
			)}
			<Button px={2} color="var(--primary-text)">
				<SettingsIcon />
			</Button>
			<Button px={2} color="var(--primary-text)" onClick={openHelpModalHandler}>
				<HelpIcon />
			</Button>
			<Link
				px={2}
				color="var(--primary-text)"
				href="https://github.com/glynfinck/graph-editor"
			>
				<GitHubIcon />
			</Link>
		</Flex>
	);
};

export default MainNavigation;
