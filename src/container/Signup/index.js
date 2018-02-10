import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { browserHistory } from 'react-router';
import { AuthActions,FireActions } from "../../store/actions/index";
import { SignupComponent } from './../../components/index';

class SignUp extends Component {

    constructor(props){
        super();
        this.state = {
            username:"",
            email:"",
            password:"",
        }
    }

    componentWillReceiveProps(nextProps) {
        console.log(nextProps);
        console.log(123)
    }

    onChangeValue(e){
        this.setState({[e.target.id]:e.target.value});
    }

    signupSubmit = () => {
        console.log(this.state)
        let user = {
            username:this.state.username,
            email:this.state.email,
            password:this.state.password
        }
        this.props.signup(user);
        this.setState({
            username:"",
            email:"",
            password:""
        })
    }

    render() {
        console.log(this.props.userObj)
        return (
            <SignupComponent submit={this.signupSubmit}  _onchageValue={this.onChangeValue.bind(this)} signupState={this.state}/>
        );
    }
}

const mapStateToProps = (state) => {
    return { 
        authObj: state.AuthReducer,
        userObj: state.fire
     };
};
const mapDispatchToProps = (dispatch) => {
    return {
        signin: (userObj) => dispatch(AuthActions.signin(userObj)),
        signup: (userObj) => dispatch(FireActions.signup(userObj))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);