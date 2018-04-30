import React from 'react';
import ReactDOM from 'react-dom';
import { renderRoutes }  from 'react-router-config';
import { BrowserRouter } from 'react-router-dom';
import Routers from './Routes';

ReactDOM.hydrate(
    <BrowserRouter>
        <div>{renderRoutes(Routers)}</div>
    </BrowserRouter>,
    document.querySelector("#root")
);