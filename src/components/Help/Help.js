import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import helpMarkdownPath from "./help.md";
import { loadTextFile } from "../../utils/utils";
import { useEffect, useState } from "react";

const Help = () => {
	const [markdown, setMarkdown] = useState("");

	useEffect(() => {
		loadTextFile(helpMarkdownPath).then((text) => {
			setMarkdown(text);
		});
	}, []);

	return <ReactMarkdown children={markdown} remarkPlugins={[remarkGfm]} />;
};

export default Help;
