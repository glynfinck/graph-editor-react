import GraphEditor from "../components/GraphEditor/GraphEditor";
import Modal from "../components/UI/Modal";
import { Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import { uiActions } from "../store/ui/ui";
import Help from "../components/Help/Help";

const GraphEditorPage = () => {
	const isHelpModalOpen = useSelector((state) => state.ui.isHelpModalOpen);
	const dispatch = useDispatch();

	const handleClose = () => {
		dispatch(uiActions.closeHelpModal());
	};

	return (
		<Fragment>
			{isHelpModalOpen && (
				<Modal onClose={handleClose}>
					<Help></Help>
				</Modal>
			)}
			<GraphEditor />;
		</Fragment>
	);
};

export default GraphEditorPage;
