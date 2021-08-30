import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import GitHubIcon from "@material-ui/icons/GitHub";

import helpMarkdownPath from "./help.md";
import { loadTextFile } from "../../utils/utils";
import { useEffect, useState } from "react";
import { Flex, Text, Box, Link, Button } from "rebass";

const Help = () => {
	return (
		<Flex height="100px" flexDirection="column">
			<Text>
				Go to https://github.com/glynfinck/graph-editor for help on how to use.
			</Text>
			<Box my="auto"></Box>
			<Flex flexDirection="row">
				<Box mx="auto"></Box>
				<Link href="https://github.com/glynfinck/graph-editor">
					<Flex
						height="50px"
						width="100px"
						backgroundColor="#24a0ED"
						color="white"
						alignItems="center"
						alignContent="center"
						textAlign="center"
					>
						<Text ml="10px">Github</Text>
						<Box flexGrow="1">
							<GitHubIcon />
						</Box>
					</Flex>
				</Link>
			</Flex>
		</Flex>
	);
};

export default Help;
