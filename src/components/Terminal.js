import React from "react";
import TerminalOutput from "./TerminalOutput";
import UseOnEnter from "./UseOnEnter";
import Prompt from "./Prompt";

function Terminal () { 
    const inputText = React.useRef()

    const bottomRef = React.useRef(null);

    const [terminalOutput, onEnter] = UseOnEnter()

    React.useEffect(() => {
        inputText.current.value = ""
        inputText.current.focus()
    })

    React.useEffect(()=>{
        bottomRef.current?.scrollIntoView({behavior: 'smooth'})
    },[terminalOutput])

    function refocus() {
        inputText.current.focus()
    }

    return (
        <div className="content" onClick={refocus}>
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
            <div ref={bottomRef} />    
        </div>
    )
}

export default Terminal;