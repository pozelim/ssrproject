import React from 'react';
import ReactDom from 'react-dom';
import Button from './components/Button';

ReactDOM.hydrate(
    <div>
        <h1>Hello</h1>
        <Button />
    </div>,
    document.querySelector("#root")
);