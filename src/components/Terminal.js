import React from "react";
import TerminalOutput from "./TerminalOutput";
import UseOnEnter from "./UseOnEnter";
import Prompt from "./Prompt";

function Terminal () { 
    const inputText = React.useRef()

    const [terminalOutput, onEnter] = UseOnEnter()

    React.useEffect(() => {
        inputText.current.value = ""
        inputText.current.focus()
    })

    return (
        <div className="content">
            <TerminalOutput 
                terminalOutput={terminalOutput} 
            /> 
            <div className="terminal-label">
                <Prompt />
                <input
                    ref={inputText}
                    type="text" 
                    className="input" 
                    autoCorrect="off" 
                    autoComplete="off"
                    onKeyDown={({ target: { value }, key }) => onEnter(value, key) } 
                />
            </div>
        </div>
    )
}

export default Terminal;