import React, {Component} from 'react';
let config = require("../config/" + process.env.NODE_ENV + "/apiConfig");
let apiAddress = config.testValue


class MyModule extends Component {

    render() {
        return (
            <div>
                <h1>{apiAddress}</h1>
                <h1>MyModule!!</h1>
            </div>
        );
    }
}

export default MyModule;
