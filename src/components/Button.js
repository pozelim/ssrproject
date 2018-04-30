import React from 'react';

class Button extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        alert("OK!");
    }

    render() {
        return (
            <button onCLick={this.handleCLick}>OK</button>
        );
    }
};

export default Button;