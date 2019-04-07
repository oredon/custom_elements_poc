// custom elementを生成
import React from 'react'
import { render } from 'react-dom';
import { App } from './App';

window.customElements.define('react-app', class ReactApp extends HTMLElement {
    connectedCallback() {
        this.render();

        this._props = {testProperty: this.getAttribute("testProperty")};
    }

    render() {
        // react-domでReactComponent（App.js）をマウント
        render(<App testProp={"testProp"}/>, this);
    }
});
