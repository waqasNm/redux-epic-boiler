import React, { Component } from 'react';

class SignupComponent extends Component {
    render() {
        console.log(this.props.signupState)
        return (
            <div>
                <h1>This is signup</h1>
                Username:
                <input type="text" id="username" placeholder="username" value={this.props.signupState.username}  onChange={this.props._onchageValue.bind(this)} /><br/>
                Email:
                <input type="text" id="email" placeholder="email" value={this.props.signupState.email}  onChange={this.props._onchageValue.bind(this)} /><br />
                Password:
                <input type="password" id="password" placeholder="password" value={this.props.signupState.password}  onChange={this.props._onchageValue.bind(this)} /> <br />

                <button onClick={this.props.submit.bind(this)}>SignUp</button>
            </div>
        );
    }
}

export default SignupComponent;