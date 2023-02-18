import * as React from "react";
import { AppBar, Toolbar, Container } from "@material-ui/core";

function GraphExplorerHeader() {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters></Toolbar>
      </Container>
    </AppBar>
  );
}
export default GraphExplorerHeader;
