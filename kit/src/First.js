import React from 'react';
import logo from './img/Logo_group.svg';
import './css/First.css';

class First extends React.Component {
    constructor(props) {
        super(props)
}

    render() {
        return (
            <div class="center">
                <img class="main" src={logo} alt="logo"></img>
            </div>
        )
    }
}

export default First;