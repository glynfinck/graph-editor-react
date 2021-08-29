import styled, { StyledComponentProps } from "styled-components";

const DualPaneHeader = styled.header`
	flex: 0 0 ${(props) => props.headerHeight}px;
	background-color: rgb(223, 223, 223);
`;
const DualPaneContent = styled.div`
	flex: 1 1 auto;
`;

const DualPaneContainer = styled.div`
	display: flex;
	flex-direction: column;
	height: 100%;
	width: 100%;
	min-width: ${(props) => props.minPaneWidth};
`;

const DualPane = (props) => {
	const header = props.children[0];
	const content = props.children[1];

	return (
		<DualPaneContainer minPaneWidth={props.minPaneWidth}>
			<DualPaneHeader headerHeight={props.headerHeight}>
				{header}
			</DualPaneHeader>
			<DualPaneContent>{content}</DualPaneContent>
		</DualPaneContainer>
	);
};

export default DualPane;
