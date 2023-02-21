import { List, ListItem, Box } from "@material-ui/core";

const OutputWindow = (props) => {
  return (
    <Box sx={{ background: "black", height: "100%" }}>
      <List
        style={{
          padding: 0,
          background: "black",
          maxHeight: "100%",
          overflow: "auto",
        }}
      >
        {props.output.map((line, index) => {
          return <ListItem key={index}>{line}</ListItem>;
        })}
      </List>
    </Box>
  );
};

export default OutputWindow;
