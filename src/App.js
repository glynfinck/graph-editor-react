import { Fragment } from "react";
import ReactDOM from "react-dom";
import { useSelector, useDispatch } from "react-redux";

import GraphEditor from "./components/GraphEditor/GraphEditor";
import Modal from "./components/UI/Modal";
import Help from "./components/Help/Help";
import { uiActions } from "./store/ui/ui";
import Layout from "./components/Layout/Layout";

function App() {
	const isHelpModalOpen = useSelector((state) => state.ui.isHelpModalOpen);
	const dispatch = useDispatch();

	const handleClose = () => {
		dispatch(uiActions.closeHelpModal());
	};

	return (
		<Layout>
			{isHelpModalOpen && (
				<Modal onClose={handleClose}>
					<Help></Help>
				</Modal>
			)}
			<GraphEditor />
		</Layout>
	);
}

export default App;
