import ReactMarkdownLib, { ReactMarkdownOptions } from "react-markdown";
import gfm from "remark-gfm";
import markdownComponents from "./styles";

const ReactMarkdown: React.FC<React.PropsWithChildren<ReactMarkdownOptions>> = (props) => {
