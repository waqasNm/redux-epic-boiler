import React, { Component } from 'react';

class Signin extends Component {
    constructor(props){
        super();
    }
    render() {
        return (
            <div>
                <h1>Login screen</h1>
                Email:
                <input type="text" id="email" value={this.props.loginState.email}  onChange={this.props.change.bind(this)}/><br />
                Password:
                <input type="password" id="password" value={this.props.loginState.password} onChange={this.props.change.bind(this)} /><br />
                <button onClick={this.props.submit.bind(this)}>
                    Login 
                </button>
            </div>
        );
    }
}

export default Signin;