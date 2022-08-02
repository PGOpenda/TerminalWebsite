import React from "react";
import "./Terminal.css";

function Terminal () {
    return (
        <div className="content">
            <div className="terminal-label">
                <span className="txt1">visitant</span>
                <span className="txt2">@</span>
                <span className="txt3">PG.OPENDA</span>
                <span className="txt4">:$ ~</span>
                <input type="text" className="input" autoCorrect="off" autoComplete="off"/>
            </div> 
        </div>
    )
}

export default Terminal;