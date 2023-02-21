import classes from "./GraphWindow.module.css";
import GraphHeader from "./GraphHeader";
import Graph from "./Graph";

const GraphWindow = (props) => {
  return (
    <div className={classes["graph-window"]}>
      <div>
        <GraphHeader
          isCodeFinished={props.isCodeFinished}
          isWorkerLoaded={props.isWorkerLoaded}
        />
      </div>
      <div
        style={{
          height: "calc(100% - 30px)",
          width: "100%",
        }}
      >
        <Graph />
      </div>
    </div>
  );
};

export default GraphWindow;
