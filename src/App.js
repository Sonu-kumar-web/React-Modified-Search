import React, { useState } from "react";
import Button from "@mui/material/Button";

import "./app.css";

import ModifiedSearch from "./components/ModifiedSearch";
import ButtonGroup from "./shared/ui/ButtonGroup";

function App() {
  const [currentComponent, setCurrentComponent] = useState(<ModifiedSearch />);

  // Buttons list
  const buttons = [
    <Button
      key="modified-search"
      onClick={() => setComponent(<ModifiedSearch />)}
    >
      Modified Search box
    </Button>,
    <Button key="two" onClick={() => setComponent("Coming Soon !!!")}>
      Coming soon!!!
    </Button>,
  ];

  // To set component
  const setComponent = (comp) => {
    setCurrentComponent(comp);
  };

  return (
    <>
      <ButtonGroup buttons={buttons} />
      <div className="App">{currentComponent}</div>
    </>
  );
}

export default App;
