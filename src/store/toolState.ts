import { makeAutoObservable } from "mobx"; 
import Brush from "../tools/Brush";
import Tool from "../tools/Tool";

class ToolState <tool extends Tool>{

    private tool : ( tool | null) = null;
    constructor() {
        makeAutoObservable(this);
    }

    setTool (tool: tool) {
        this.tool = tool;
    }
}

export default new ToolState();
