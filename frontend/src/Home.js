import React from 'react';
import FacebookLogin from "./Login.js"
import LoginSite from './LoginSite.js'
import Navigation from './Navigation.js'
import logo from './VroFi Logo V6.jpg';
import FindShows from './FindShows.js'

export default class Home extends React.Component{

    state = {
      isLoggedIn: false,
      userID: '',
      name:'',
      email:'',
      picture: '',
      accessToken: ''
    }

  handleLogin = event =>{

  }
  componentClicked = () => {
    console.log('clicked!')
  }
  responseFacebook = response=> {
    this.setState({
      isLoggedIn: true,
      userID: response.id,
      name: response.name,
      email: response.email,
      picture: response.picture.data.url,
      accessToken: response.accessToken
    });
  }

  render(){

    if (this.state.isLoggedIn){
      return(
        <div className='container'>
        <header> <center><img src={logo} alt="" width="115" height="115"/>
      	  </center>
          <Navigation/>
          <FindShows />
        </header>
        </div>
      )
    } else {
      return(
        <div className='container'>
          <header> <center><img src={logo} alt="" width="115" height="115"/>
          <br/>
          <FacebookLogin componentClicked={this.componentClicked} responseFacebook={this.responseFacebook}/>
          <br/>
          <LoginSite/>
        	  </center>

          </header>

        </div>
      )
    }


  }

};
