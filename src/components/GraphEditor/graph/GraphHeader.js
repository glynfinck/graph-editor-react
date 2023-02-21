import { useRef } from "react";
import Slider from "@material-ui/core/Slider";
import RotateLeftIcon from "@material-ui/icons/RotateLeft";
import { ArrowBack } from "@material-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { graphActions } from "../../../store/graph/graph";
import { animationSpeedDefault } from "../../../store/graph/graph";
import { AppBar, Toolbar, Button, Box, Container } from "@material-ui/core";
import { useHistory } from "react-router-dom";

const GraphHeader = (props) => {
  const dispatch = useDispatch();
  const sliderRef = useRef();
  const animationSpeed = useSelector((state) => state.graph.animationSpeed);
  const simulationStarted = useSelector(
    (state) => state.graph.simulationStarted
  );
  const disabled = simulationStarted || !props.isWorkerLoaded;
  const history = useHistory();

  const resetActivatedNodesHandler = () => {
    dispatch(graphActions.resetGraph());
  };

  const sliderChangedHandler = (event, newValue) => {
    if (newValue) {
      if (newValue !== animationSpeed) {
        dispatch(graphActions.setAnimation(newValue));
      }
    }
  };

  const onClickGoBack = () => {
    history.push(`/graphs`);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ borderColor: "white", color: "white", fill: "white" }}>
            <Button
              style={{ borderColor: "white", color: "white", fill: "white" }}
              onClick={onClickGoBack}
            >
              <ArrowBack />
            </Button>
          </Box>
          <Box sx={{ width: 200, mr: 1 }}>
            <Slider
              style={{
                borderColor: "white",
                color: "white",
                fill: "white",
              }}
              aria-label="Animation Speed"
              defaultValue={animationSpeedDefault}
              getAriaValueText={(value) => value}
              min={10}
              max={110}
              value={animationSpeed}
              onChange={sliderChangedHandler}
              disabled={disabled}
              color="secondary"
              ref={sliderRef}
            />
          </Box>
          <Box sx={{ flexGrow: 1 }}>
            <Button
              style={{
                borderColor: "white",
                color: "white",
                fill: "white",
              }}
              onClick={resetActivatedNodesHandler}
              disabled={disabled}
            >
              <RotateLeftIcon />
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default GraphHeader;
