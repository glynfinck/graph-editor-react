import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import HelpIcon from '@material-ui/icons/Help';

import { Flex, Box, Button } from 'rebass';
import { useDispatch, useSelector } from 'react-redux';
import { Select } from '@rebass/forms';
import { editorActions } from '../../../store/editor/editor';

import ReactTooltip from 'react-tooltip';
import { Fragment } from 'react';

import styled from 'styled-components';

const EditorHeaderStyle = styled.div`
  svg {
    fill: var(--primary-text);

    &:hover {
      fill: black;
    }
  }
`;

// import Slider from "@material-ui/core/Slider";

const EditorHeader = (props) => {
  const dispatch = useDispatch();
  const simulationStarted = useSelector(
    (state) => state.graph.simulationStarted
  );
  const algorithms = useSelector((state) => state.editor.algorithms);
  const selectedAlgorithm = useSelector(
    (state) => state.editor.selectedAlgorithm
  );

  const selectedAlgorithmName = algorithms[selectedAlgorithm].name;

  const runPythonCode = () => {
    props.onRunPythonCode();
  };

  const onChangeAlgorithm = (event) => {
    dispatch(editorActions.setSelectedAlgorithm(event.target.selectedIndex));
  };

  let runCode = (
    <Fragment>
      <Button
        pt="8px"
        pb="4px"
        pl="5px"
        color="var(--primary-text)"
        onClick={runPythonCode}
      >
        <PlayArrowIcon data-tip data-for="run-code-button" />
      </Button>
      <ReactTooltip
        id="run-code-button"
        type="dark"
        effect="solid"
        place="bottom"
      >
        <span>Run Code</span>
      </ReactTooltip>
    </Fragment>
  );

  const disabled = simulationStarted || !props.isWorkerLoaded;

  if (disabled) {
    runCode = (
      <Button
        pt="8px"
        pb="4px"
        pl="5px"
        color="var(--primary-text)"
        onClick={runPythonCode}
        disabled={disabled}
      >
        <PlayArrowIcon data-tip data-for="run-code-button" />
      </Button>
    );
  }

  return (
    <EditorHeaderStyle>
      <Flex px={2} as="header" height="40px" alignItems="center" textAlign>
        {runCode}
        <Select
          id="algorithm"
          name="algorithm"
          height="28px"
          width="120px"
          fontSize="15px"
          px="auto"
          p="5px 10px"
          color="var(--primary-text)"
          style={{ borderRadius: '5px' }}
          data-tip
          data-for="select-algorithm"
          value={selectedAlgorithmName}
          selectedIndex={selectedAlgorithm}
          onChange={onChangeAlgorithm}
        >
          {algorithms.map((value, index, arr) => (
            <option key={index}>{value.name}</option>
          ))}
        </Select>
        <ReactTooltip
          id="select-algorithm"
          type="dark"
          effect="solid"
          place="bottom"
        >
          <span>Algorithm</span>
        </ReactTooltip>
        <Box mx="auto" />
        <a
          href="https://github.com/glynfinck/graph-editor"
          color="var(--primary-text)"
        >
          <HelpIcon data-for="help-button" data-tip />
        </a>
        <ReactTooltip
          id="help-button"
          type="dark"
          effect="solid"
          place="bottom"
        >
          <span>Help</span>
        </ReactTooltip>
      </Flex>
    </EditorHeaderStyle>
  );
};

export default EditorHeader;
