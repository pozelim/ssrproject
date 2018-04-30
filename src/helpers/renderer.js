import React from 'react';
import { renderToString } from 'react-dom/server';

export default () => {
const content = renderToString(<h1>Hello</h1>);
    return `
        <html>
            <header></header>
            <body>
                <div id="root">
                    ${content}
                </div>
            </body>
        </html>
    `;
};