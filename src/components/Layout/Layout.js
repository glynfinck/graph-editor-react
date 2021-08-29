import classes from "./Layout.module.css";
import MainNavigation from "./MainNavigation";

const Layout = (props) => {
	console.log(classes);
	return (
		<main className={classes.main}>
			<header className={classes.header}>
				<MainNavigation />
			</header>
			<content className={classes.content}>{props.children}</content>
		</main>
	);
};

export default Layout;
