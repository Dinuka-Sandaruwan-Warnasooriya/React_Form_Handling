import React, { Component } from 'react'
import Greeting from './Greeting';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';

export default class LoginControl extends Component {
    constructor(props){
        super(props);
        this.state = {isLoggedIn: false};
    }

    handleLoginClick = () =>{
        this.setState({isLoggedIn:true}); 
    }

    handleLogoutClick = () =>{
        this.setState({isLoggedIn:false}); 
    }

    render() {
      let button;
      if(this.state.isLoggedIn){
        button = <LogoutButton onClick={this.handleLogoutClick}/>
        } 
      else{
        button = <LoginButton onClick={this.handleLoginClick}/>
      }

      return<div>
          <Greeting isLoggedIn={this.state.isLoggedIn}/>
          {button} 
          {this.props.hasNewMessage && <h2>You Have Unread Message</h2>} 
          {this.props.hasNewMessage && <h2>You Have Unread Message</h2>} 
      </div>
    }
}
