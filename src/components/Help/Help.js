import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import GitHubIcon from "@material-ui/icons/GitHub";

import helpMarkdownPath from "./help.md";
import { loadTextFile } from "../../utils/utils";
import { useEffect, useState } from "react";
import { Flex, Text, Box, Link, Button } from "rebass";

const Help = () => {
	return (
		<Flex
			height="100px"
			flexDirection="row"
			alignItems="center"
			alignContent="center"
		>
			<Box mx="auto"></Box>
			<Text>
				Go to{" "}
				<Link href="https://github.com/glynfinck/graph-editor">
					https://github.com/glynfinck/graph-editor
				</Link>{" "}
				for help on how to use.
			</Text>
			<Box mx="auto"></Box>
		</Flex>
	);
};

export default Help;
