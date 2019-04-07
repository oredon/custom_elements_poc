// custom elementを生成
import React from 'react'
import { render } from 'react-dom';
import { App } from './App';

export default class ReactApp extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        // react-domでReactComponent（App.js）をマウント
        render(<App testProp={"testProp"}/>, this);
    }
}

window.customElements.define('my-component2', ReactApp);