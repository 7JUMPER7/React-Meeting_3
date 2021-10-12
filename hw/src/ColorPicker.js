import { useState } from 'react';
import './ColorPicker.css'

export default function ColorPicker(props) {
    const [r, changeR] = useState(props.r);
    const [g, changeG] = useState(props.g);
    const [b, changeB] = useState(props.b);
    
    return(
        <div className="container">
            <div className="sliders">
                <div className="sliderContainer">
                    <div className="info">
                        <span>R</span>
                        <span>{r}</span>
                    </div>
                    <input type="range" min="0" max="255" className="slider" value={r} onChange={(e) => {changeR(e.target.value)}}></input>
                </div>
                <div className="sliderContainer">
                    <div className="info">
                        <span>G</span>
                        <span>{g}</span>
                    </div>
                    <input type="range" min="0" max="255" className="slider" value={g} onChange={(e) => {changeG(e.target.value)}}></input>
                </div>
                <div className="sliderContainer">
                    <div className="info">
                        <span>B</span>
                        <span>{b}</span>
                    </div>
                    <input type="range" min="0" max="255" className="slider" value={b} onChange={(e) => {changeB(e.target.value)}}></input>
                </div>
            </div>
            <div style={{backgroundColor: `rgba(${r}, ${g}, ${b}, ${1})`}} className="showBox"></div>
        </div>
    );
}

ColorPicker.defaultProps = {
    r: 255, 
    g: 255,
    b: 255
}