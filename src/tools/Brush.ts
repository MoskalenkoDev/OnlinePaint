import { canvasType } from './../store/canvasState';
import Tool from "./Tool"

export default class Brush extends Tool {

    private mouseDown : boolean = false;

    constructor(canvas: canvasType) {
        super(canvas);
        this.listen();
    }

    listen() {
        if(this.canvas) {
            this.canvas.onmousedown = this.mouseDownHandler.bind(this);
            this.canvas.onmouseup = this.mouseUpHandler.bind(this);
            this.canvas.onmousemove = this.mouseMoveHandler.bind(this);
        }
    }

    mouseUpHandler(e: MouseEvent) {
        this.mouseDown = false;
    }

    mouseDownHandler(e: MouseEvent ) {
        this.mouseDown = true; 
        const target = e.target as HTMLCanvasElement;
        if(this.ctx) {
            this.ctx.beginPath(); 
            this.ctx.moveTo(e.pageX - target.offsetLeft, e.pageY - target.offsetTop)
        }
        
    }

    mouseMoveHandler(e: MouseEvent) {
        if(this.mouseDown) {
            const target = e.target as HTMLCanvasElement;
            this.draw(e.pageX - target.offsetLeft, e.pageY - target.offsetTop);
        }
    }

    draw(x: number, y: number) {
        if(this.ctx) {
            this.ctx.lineTo(x,y);
            this.ctx.stroke();
            console.log('draw brush');
        }
    }
}