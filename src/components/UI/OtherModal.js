import React from "react";
import ReactDOM from "react-dom";
import { makeStyles } from "@material-ui/core/styles";
import MaterialModal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { useSelector, useDispatch } from "react-redux";
import { uiActions } from "../../store/ui/ui";

const useStyles = makeStyles((theme) => ({
	modal: {
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		borderRadius: "10px",
	},
	paper: {
		backgroundColor: theme.palette.background.paper,
		borderRadius: "10px",
	},
}));

const Modal = (props) => {
	const classes = useStyles();
	const dispatch = useDispatch();

	const handleClose = () => {
		dispatch(uiActions.closeHelpModal());
	};

	return (
		<MaterialModal
			aria-labelledby="transition-modal-title"
			aria-describedby="transition-modal-description"
			className={classes.modal}
			open={props.open}
			onClose={handleClose}
			closeAfterTransition
			BackdropComponent={Backdrop}
			BackdropProps={{
				timeout: 500,
			}}
		>
			<Fade in={props.open}>
				<div className={classes.paper}>{props.children}</div>
			</Fade>
		</MaterialModal>
	);
};

export default Modal;
