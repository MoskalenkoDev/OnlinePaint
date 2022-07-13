import { makeAutoObservable } from "mobx";

export type canvasType = HTMLCanvasElement | null;

class CanvasState {

    private canvas: canvasType = null;
    
    constructor() {
        makeAutoObservable(this);
    }

    setCanvas(canvas: canvasType): void {
        this.canvas = canvas;
    }
}

export default new CanvasState();
