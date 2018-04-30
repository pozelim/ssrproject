import React from 'react';
import { renderToString } from 'react-dom/server';
import Button from '../client/components/Button';

export default () => {
const content = renderToString(
        <div>
            <h1>Hello</h1>
            <Button />
        </div>

    );
    return `
        <html>
            <header></header>
            <body>
                <div id="root">
                    ${content}
                </div>
                <script src='bundle.js'></script>
            </body>
        </html>
    `;
};