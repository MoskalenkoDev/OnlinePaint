import React from "react";
import { Canvas } from "./components/Canvas";
import { SettingBar } from "./components/SettingBar";
import { ToolBar } from "./components/ToolBar";
import './styles/app.scss';

const App: React.FC = () => {
  return (
    <div className="app">
      <ToolBar/>
      <SettingBar/>
      <Canvas/>
    </div>
  );
}

export default App;
