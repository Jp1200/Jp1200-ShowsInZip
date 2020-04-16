import React from 'react';
import FacebookLogin from "./Login.js"
import LoginSite from './LoginSite.js'
import Navigation from './Navigation.js'
import logo from './VroFi Logo V6.jpg';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import FindShows from './FindShows.js'
import Profile from './Profile.js'

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
    event.preventDefault()
    console.log(event.target.email.value)
    console.log(event.target.name.value)
    console.log(event.target.password.value)
    fetch(`http://localhost:3000/users`,{
      method:'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify({
        name: event.target.name.value,
        email: event.target.email.value,
        password: event.target.password.value

      })
    })
    .then(r=>r.json())
    .catch(error=>alert(error))
    .then(response=>{
      this.setState({
        userID: response.user_id,
        name: response.name,
        email: response.email,
        isLoggedIn: true
      })
    })

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
          <Router>
        <header> <center><img src={logo} alt="" width="115" height="115"/>
      	  </center>
          <Navigation/>
          <Route path='/find' component={FindShows}/>
          <Route path='/profile' component={Profile}/>
        </header>
        </Router>
        </div>
      )
    } else {
      return(
        <div className='container'>
          <header> <center><img src={logo} alt="" width="115" height="115"/>
          <br/>
          <br/>
          <br/>
          <FacebookLogin componentClicked={this.componentClicked} responseFacebook={this.responseFacebook}/>
          <br/>
          <br/>
          <br/>
          <LoginSite handleLogin={this.handleLogin}/>
        	  </center>

          </header>

        </div>
      )
    }


  }

};
