// microfrontendのapplicationをここに作成
import React, { Component } from 'react';

export class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: 'My Component 1'
        }
    }

    render() {
        const {testProp} = this.props;
        const {text} = this.state;
        return (
            <div>
                <p>{testProp} / {text}</p>
            </div>
        )
    }
}
