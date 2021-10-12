import React from 'react';
import quotes from './Quotes'
import './QuotePicker.css'

export default class QuotePicker extends React.Component {
    constructor(props) {
        super(props);
        this.state = {quoteIndex: Math.round(Math.random() * (quotes.length - 1 - 0))};
    }
    render() {
        const clickHandler = () => {
            this.setState({quoteIndex: Math.round(Math.random() * (quotes.length - 1 - 0))})
        }

        return(
            <div className="container">
                <div className="text">
                    {quotes[this.state.quoteIndex].text}
                </div>
                <div className="author">
                    {quotes[this.state.quoteIndex].author}
                </div>
                <button onClick={clickHandler}>Get random quote</button>
            </div>
        );
    }
}