import React from "react"
import { CodeBlock, dracula } from "react-code-blocks";
interface IProps {
    children: React.ReactNode
    language?: string
}

const MyCodeBlock: React.FunctionComponent<IProps> = ({children, language="python"}) => {
    return (
        <CodeBlock
        text={children}
        language={language}
        showLineNumbers={false}
        theme={dracula}
      />
    )
}

export default MyCodeBlock