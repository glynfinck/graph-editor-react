import Editor from "@monaco-editor/react";
import { useEffect, useState, useCallback } from "react";
import { Split } from "@geoffcox/react-splitter";
import EditorHeader from "./EditorHeader";
import { useSelector, useDispatch } from "react-redux";
import pythonGraphPath from "../python/graph.py";
import boilerPlatePath from "../python/boilerplate.py";
import { graphActions } from "../../../store/graph/graph";
import classes from "../GraphEdtior.module.css";
import { Box, CircularProgress } from "@material-ui/core";
import OutputWindow from "./OutputWindow";

const loadPythonCode = (path) => {
  const load = async () => {
    const r = await fetch(path);
    const text = await r.text();
    return text;
  };
  return load();
};

const sleep = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

const EditorWindow = (props) => {
  const dispatch = useDispatch();
  const nodes = useSelector((state) => state.graph.nodes);
  const edges = useSelector((state) => state.graph.edges);
  const animation = props.animation;
  const animating = useSelector((state) => state.graph.animating);
  const animationSpeed = useSelector((state) => state.graph.animationSpeed);
  const [boilerCode, setBoilerCode] = useState("");
  const [code, setCode] = useState("");
  const selectedAlgorithm = useSelector(
    (state) => state.editor.selectedAlgorithm
  );
  const disabled = !props.isWorkerLoaded;
  const algorithms = useSelector((state) => state.editor.algorithms);
  const [pythonCode, setPythonCode] = useState("");
  const [context, setContext] = useState();
  const animateHelper = useCallback(
    async (ms) => {
      // add reset current to the end of the animation
      // to get rid of the current indicator
      let animation_prime = [...animation, { type: "RESET_CURRENT" }];
      for (let i = 0; i < animation_prime.length; i++) {
        await sleep(ms);
        dispatch(graphActions.animate(animation_prime[i]));
      }
    },
    [animation, dispatch]
  );

  useEffect(() => {
    if (animating) {
      animateHelper((101 - animationSpeed) * 8);
      dispatch(graphActions.finishAnimation());
    }
  }, [animating, animationSpeed, animateHelper, dispatch]);

  useEffect(() => {
    loadPythonCode(boilerPlatePath).then((code) => {
      setBoilerCode(code);
    });

    loadPythonCode(pythonGraphPath).then((code) => {
      setPythonCode(code);
    });
  }, []);

  useEffect(() => {
    setCode(`${boilerCode}${algorithms[selectedAlgorithm].code}`);
  }, [boilerCode, selectedAlgorithm, algorithms]);

  const changeCodeHandler = (code) => {
    setCode(code);
  };

  useEffect(() => {
    let contextNodes = [];
    let contextEdges = [];
    let contextNodeIDs = [];
    // construct map O(n)
    let idMap = new Map();
    nodes.forEach((value, idx, arr) => {
      contextNodes.push(value.title);
      contextNodeIDs.push(value.id);
      idMap.set(value.id, value.title);
    });
    // set context O(m)
    edges.forEach((value, idx, arr) => {
      contextEdges.push([idMap.get(value.source), idMap.get(value.target)]);
    });
    setContext({
      nodes: contextNodes,
      edges: contextEdges,
      node_ids: contextNodeIDs,
    });
  }, [nodes, edges]);

  const onRunPythonCode = async () => {
    dispatch(graphActions.resetGraph());
    props.runCode(`${pythonCode}\n\n${code}`, context);
  };

  const options = {
    minimap: {
      enabled: false,
    },
  };

  const renderSplitter = (props) => {
    return <div className={classes.splitter}></div>;
  };

  return (
    <>
      <EditorHeader
        onRunPythonCode={onRunPythonCode}
        isWorkerLoaded={props.isWorkerLoaded}
        isCodeFinished={props.isCodeFinished}
      />
      <Split
        renderSplitter={renderSplitter}
        splitterSize={"10px"}
        initialPrimarySize="70%"
        horizontal
      >
        <Editor
          defaultLanguage="python"
          theme="vs-light"
          value={code}
          options={options}
          onChange={changeCodeHandler}
        />
        {!disabled ? (
          <OutputWindow output={props.output} />
        ) : (
          <Box
            sx={{
              height: "100%",
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <CircularProgress size={100} />
          </Box>
        )}
      </Split>
    </>
  );
};

export default EditorWindow;
