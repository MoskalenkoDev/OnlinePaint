import { canvasType } from './../store/canvasState';

export default class Tool {

    protected ctx : CanvasRenderingContext2D | null = null;

    constructor(protected canvas : canvasType) {
        if(canvas) this.ctx = canvas.getContext('2d');
        this.destroyEvents();
    }

    private destroyEvents() {
        if(this.canvas) {
            this.canvas.onmousedown = null;
            this.canvas.onmouseup = null;
            this.canvas.onmousemove = null;            
        }
    }
}