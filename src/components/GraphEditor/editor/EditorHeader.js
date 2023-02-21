import { Box, Button, AppBar, Toolbar, Container } from "@material-ui/core";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import HelpIcon from "@material-ui/icons/Help";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { useDispatch, useSelector } from "react-redux";
import { editorActions } from "../../../store/editor/editor";

const EditorHeader = (props) => {
  const dispatch = useDispatch();
  const simulationStarted = useSelector(
    (state) => state.graph.simulationStarted
  );
  const selectedAlgorithm = useSelector(
    (state) => state.editor.selectedAlgorithm
  );
  const disabled = simulationStarted || !props.isWorkerLoaded;
  const algorithms = useSelector((state) => state.editor.algorithms);

  const runPythonCode = () => {
    props.onRunPythonCode();
  };

  const onChangeAlgorithm = (event) => {
    dispatch(editorActions.setSelectedAlgorithm(event.target.value));
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Button onClick={runPythonCode} disabled={disabled}>
              <PlayArrowIcon
                style={{ fill: "white" }}
                data-tip
                data-for="run-code-button"
              />
            </Button>
            <Box sx={{ minWidth: 120 }}>
              <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                <InputLabel
                  style={{
                    color: "white",
                  }}
                  id="demo-select-small"
                >
                  Algorithm
                </InputLabel>
                <Select
                  labelId="demo-select-small"
                  id="demo-select-small"
                  value={selectedAlgorithm}
                  label="Age"
                  onChange={onChangeAlgorithm}
                  style={{
                    color: "white",
                    borderColor: "white",
                    fill: "white",
                  }}
                >
                  {algorithms.map((algorithm, index) => {
                    return (
                      <MenuItem key={index} value={index}>
                        {algorithm.name}
                      </MenuItem>
                    );
                  })}
                </Select>
              </FormControl>
            </Box>
          </Box>
          <Button
            style={{
              borderColor: "white",
              color: "white",
              fill: "white",
            }}
            href="https://github.com/glynfinck/graph-editor-react"
          >
            <HelpIcon />
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default EditorHeader;
