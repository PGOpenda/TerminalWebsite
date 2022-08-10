import React from "react";
import Prompt from "./Prompt";

function TerminalOutput(props) {
    const scrollRef = React.useRef();

    React.useEffect(() => {
        if (scrollRef.current)
        scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    });             

    return(
        <div className="output">
            {props.terminalOutput.map((item, index) => (
                <div key={index}>
                    <Prompt />
                    <div>
                        {item}
                    </div>
                     
                </div>             
            ))}
        </div>
    )
}

export default TerminalOutput;