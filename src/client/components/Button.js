import React from 'react';

class Button extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        e.preventDefault();
        console.log("OK!");
    }

    render() {
        return (
            <button onClick={this.handleClick}>OK</button>
        );
    }
};

export default Button;