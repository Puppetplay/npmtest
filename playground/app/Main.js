import React, {Component}  from 'react';
import MyModule from 'myModule/MyModule';
import SecondModule from 'myModule/SecondModule';

class Main extends Component {
    render() {
        return(
            <div>
                <MyModule/>
                <SecondModule/>
            </div>
        );
    }
}

export default Main;