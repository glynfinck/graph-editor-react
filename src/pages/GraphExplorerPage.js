import { Fragment } from "react";
import GraphExplorer from "../components/GraphExplorer/GraphExplorer";
import GraphExplorerHeader from "../components/GraphExplorer/GraphExplorerHeader/GraphExplorerHeader";

const GraphExplorerPage = () => {
  return (
    <Fragment>
      <GraphExplorerHeader />
      <GraphExplorer />
    </Fragment>
  );
};

export default GraphExplorerPage;
