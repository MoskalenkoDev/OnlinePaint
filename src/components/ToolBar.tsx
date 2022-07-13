import React from "react";
import '../styles/toolbar.scss';

export const ToolBar: React.FC = () => {
    return (
        <div className="toolbar">

            <div className="toolbar__btn_wrapper">
                <button className="toolbar__btn brush"></button>
                <button className="toolbar__btn rect"></button>
                <button className="toolbar__btn circle"></button>
                <button className="toolbar__btn eraser"></button>
                <button className="toolbar__btn line"></button>
                <input type="color" className="toolbar__btn "/>
            </div>

            <div className="toolbar__btn_wrapper">
                <button className="toolbar__btn undo"></button>
                <button className="toolbar__btn redo"></button>
                <button className="toolbar__btn save"></button>
            </div>

        </div>
    )
}
