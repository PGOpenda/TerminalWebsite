import React from "react";

const commands = {
  help: "list of available of commands are: help, whoami, whoisPG, projects",
  whoami: "You are the visistant",
  whoisPG: "Coming soon....",
  projects: "Still curating....",
  clear: "It will clear something..... :("
};

const notFound = "Command not found. Try 'help' to get started"

const UseOnEnter = () => {
  const [terminalOutput, setTerminalOutput] = React.useState([]);

  const onEnter = (value, key) => {
    if (key === "Enter") {
      const newTerminalLine = commands[value] || notFound;
      return setTerminalOutput(terminalOutput =>
        terminalOutput.concat(newTerminalLine)
      );
    }
  };

  return [terminalOutput, onEnter];
};

export default UseOnEnter;