import { GraphView } from "react-digraph";
import classes from "./Graph.module.css";
import { useSelector, useDispatch } from "react-redux";
import Alert from "@material-ui/lab/Alert";
import IconButton from "@material-ui/core/IconButton";
import Collapse from "@material-ui/core/Collapse";
import CloseIcon from "@material-ui/icons/Close";
import {
  NodeTypes,
  NodeSubtypes,
  EdgeTypes,
} from "../../../store/graph/graph-types";
import { graphActions } from "../../../store/graph/graph";
import { useEffect, useState } from "react";
import { computeInitBBOX } from "../../../utils/graph-utils";
import { useParams } from "react-router-dom";
import graphData from "../../../data/graphData";

const NODE_KEY = "id";

const Graph = () => {
  // Route Parameters
  const params = useParams();

  // State
  const [isLoadingGraph, setIsLoadingGraph] = useState(true);
  const [initialBBOX, setInitialBBOX] = useState();
  const [selected, setSelected] = useState({});
  const [isGraphEditable, setIsGraphEditable] = useState();
  const [errorAlertOpen, setErrorAlertOpen] = useState(false);
  const nodes = useSelector((state) =>
    state.graph.nodes.map((node) => ({ ...node }))
  );
  const edges = useSelector((state) =>
    state.graph.edges.map((edge) => ({ ...edge }))
  );
  const disptach = useDispatch();

  // On load
  useEffect(() => {
    // TODO: Replace this with API request
    setIsLoadingGraph(true);
    const graph = graphData.find((element) => {
      return element.slug == params.graphId;
    });
    disptach(graphActions.clearGraph());
    for (var node of graph.graph.nodes) {
      disptach(graphActions.addNode({ x: node.x, y: node.y, id: node.id }));
    }
    for (var edge of graph.graph.edges) {
      disptach(
        graphActions.addEdge({ source: edge.source, target: edge.target })
      );
    }
    setIsGraphEditable(graph.editable);
    setIsLoadingGraph(false);
    setInitialBBOX(computeInitBBOX(nodes, 200));

    return () => {};
  }, []);

  // Graph Events
  const onCreateNode = (x, y, mouseEvent) => {
    if (!isGraphEditable) {
      setErrorAlertOpen(true);
    } else {
      disptach(graphActions.addNode({ x: +x, y: +y }));
    }
  };
  const onCreateEdge = (source, target) => {
    if (!isGraphEditable) {
      setErrorAlertOpen(true);
    } else {
      disptach(graphActions.addEdge({ source: source.id, target: target.id }));
    }
  };
  const canCreateEdge = () => {
    if (!isGraphEditable) {
      setErrorAlertOpen(true);
    }
    return !!isGraphEditable;
  };
  const onSelect = (selected) => {
    if (!isGraphEditable) {
      setErrorAlertOpen(true);
    } else {
      setSelected(selected);
    }
  };
  const onSwapEdge = () => {};
  const onUpdateNode = (node) => {
    if (!isGraphEditable) {
      setErrorAlertOpen(true);
    } else {
      disptach(graphActions.updateNode({ ...node }));
    }
  };
  const onDeleteSelected = (deleteSelected) => {
    if (!isGraphEditable) {
      setErrorAlertOpen(true);
    } else {
      let delNodes = [];
      let delEdges = [];
      if (!!deleteSelected.nodes) {
        deleteSelected.nodes.forEach((value) => {
          delNodes.push(value.id);
        });
      }
      if (!!deleteSelected.edges) {
        deleteSelected.edges.forEach((value) => {
          delEdges.push([value.source, value.target]);
        });
      }
      disptach(
        graphActions.deleteSelected({ nodes: delNodes, edges: delEdges })
      );
    }
  };

  if (isLoadingGraph) {
    return <div></div>;
  } else {
    return (
      <>
        <Collapse in={errorAlertOpen}>
          <Alert
            variant="filled"
            severity="error"
            action={
              <IconButton
                aria-label="close"
                color="inherit"
                size="small"
                onClick={() => {
                  setErrorAlertOpen(false);
                }}
              >
                <CloseIcon fontSize="inherit" />
              </IconButton>
            }
          >
            This graph is not editable
          </Alert>
        </Collapse>
        <div className={classes.graph}>
          <GraphView
            initialBBox={initialBBOX}
            nodeKey={NODE_KEY}
            nodes={nodes}
            edges={edges}
            selected={selected}
            nodeTypes={NodeTypes}
            nodeSubtypes={NodeSubtypes}
            edgeTypes={EdgeTypes}
            showGraphControls={true}
            allowMultiselect={true} // true by default, set to false to disable multi select.
            onCreateNode={onCreateNode}
            onCreateEdge={onCreateEdge}
            onSelect={onSelect}
            onDeleteSelected={onDeleteSelected}
            onUpdateNode={onUpdateNode}
            onSwapEdge={onSwapEdge}
            canCreateEdge={canCreateEdge}
            readOnly={!isGraphEditable}
          />
        </div>
      </>
    );
  }
};

export default Graph;
