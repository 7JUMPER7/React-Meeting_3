import { useState } from 'react';
import './Counter.css'

export default function Counter(props) {
    const [currentValue, setCurrentValue] = useState(props.startValue);
    
    return(
        <div class="container">
            <div className="buttons">
                {props.buttons.map(item => {
                    return(
                        <button onClick={() => setCurrentValue(currentValue + item.incValue)}>{item.incValue}</button>
                    );
                })}
            </div>
            <div className="number">{currentValue}</div>
        </div>
    );
}

Counter.defaultProps = {
    startValue: 0,
    buttons: [
        {
            incValue: 10
        }
    ]
}