import Slider from "@material-ui/core/Slider";
import { useDispatch, useSelector } from "react-redux";
import { graphActions } from "../../../store/graph/graph";
import RotateLeftIcon from "@material-ui/icons/RotateLeft";
import { useRef } from "react";
import { animationSpeedDefault } from "../../../store/graph/graph";
import { Flex, Box, Button } from "rebass";
import ReactTooltip from "react-tooltip";

const GraphHeader = (props) => {
  const dispatch = useDispatch();
  const sliderRef = useRef();
  const animationSpeed = useSelector((state) => state.graph.animationSpeed);
  const simulationStarted = useSelector(
    (state) => state.graph.simulationStarted
  );

  const resetActivatedNodesHandler = () => {
    dispatch(graphActions.resetGraph());
  };

  const sliderChangedHandler = (event) => {
    const value = event.target.ariaValueNow;
    if (value) {
      if (value !== animationSpeed) {
        dispatch(graphActions.setAnimation(value));
      }
    }
  };

  let slider = (
    <Box width="100px" ml="6px" mt="6px">
      <Slider
        data-tip
        data-for="sim-speed-slider"
        aria-labelledby="discrete-slider"
        defaultValue={animationSpeedDefault}
        step={10}
        marks
        min={10}
        max={100}
        onChange={sliderChangedHandler}
        ref={sliderRef}
      />
      <ReactTooltip
        id="sim-speed-slider"
        type="dark"
        effect="solid"
        place="bottom"
      >
        <span>Simulation Speed</span>
      </ReactTooltip>
    </Box>
  );

  let resetActiv = (
    <Box>
      <Button
        pt="8px"
        pb="4px"
        pl="5px"
        pr="5px"
        color="var(--primary-text)"
        onClick={resetActivatedNodesHandler}
      >
        <RotateLeftIcon data-tip data-for="reset-activated-button" />
      </Button>
      <ReactTooltip
        id="reset-activated-button"
        type="dark"
        effect="solid"
        place="bottom"
      >
        <span>Reset Graph</span>
      </ReactTooltip>
    </Box>
  );

  const disabled = simulationStarted || !props.isWorkerLoaded;

  if (disabled) {
    slider = (
      <Box width="100px" mt="6px">
        <Slider
          data-tip
          data-for="sim-speed-slider"
          aria-labelledby="discrete-slider"
          defaultValue={animationSpeedDefault}
          step={10}
          marks
          min={10}
          max={100}
          onChange={sliderChangedHandler}
          ref={sliderRef}
          disabled={disabled}
        />
      </Box>
    );
    resetActiv = (
      <Box>
        <Button
          pt="8px"
          pb="4px"
          pl="5px"
          pr="5px"
          color="var(--primary-text)"
          onClick={resetActivatedNodesHandler}
          disabled={disabled}
        >
          <RotateLeftIcon data-tip data-for="reset-activated-button" />
        </Button>
      </Box>
    );
  }

  return (
    <Flex
      px={2}
      as="header"
      height="40px"
      alignContent="center"
      alignItems="center"
    >
      {slider}
      <Box mx="auto" />
      {resetActiv}
    </Flex>

    // <header className={`${classes.header}`}>
    // 	<div className="mui--pull-left mui--align-middle">
    // 		<div
    // 			style={{
    // 				display: "inline-block",
    // 				width: "100px",
    // 				margin: "5px 5px 5px 20px",
    // 			}}
    // 		>
    // 			 />
    // 			</div>

    // 			{/*  */}
    // 		</div>
    // 	</div>
    // 	<div className="mui--pull-right mui--align-middle">
    //
    // 	</div>
    // </header>
  );
};

export default GraphHeader;
