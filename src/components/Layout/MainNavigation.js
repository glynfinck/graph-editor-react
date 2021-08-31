import { Flex, Box, Button, Text, Link, Image } from "rebass";
import SettingsIcon from "@material-ui/icons/Settings";
import SaveIcon from "@material-ui/icons/Save";
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../../store/auth/auth";

const MainNavigation = (props) => {
	const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
	const dispatch = useDispatch();

	const logoutHandler = () => {
		dispatch(authActions.logout());
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
				<SaveIcon></SaveIcon>
			</Button>
			<Button px={2} color="var(--primary-text)">
				<SettingsIcon></SettingsIcon>
			</Button>
		</Flex>
	);
};

export default MainNavigation;
