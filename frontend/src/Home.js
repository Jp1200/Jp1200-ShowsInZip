import React from 'react';
import FacebookLogin from "./Login.js"
import LoginSite from './LoginSite.js'
import Navigation from './Navigation.js'
import logo from './VroFi Logo V6.jpg';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import FindShows from './FindShows.js'

import Gallery from './Gallery.js'
import './singlePageTemplate.css'
// const imgUrl = 'frontend/src/Seattle.jpg'
// const styles = {
//   root:{
//   backgroundImage: 'url('+ imgUrl +')',
//   backgroundSize: 'cover',
//   overflow: 'hidden',
//   }
// }
export default class Home extends React.Component{

    state = {
      isLoggedIn: false,
      isLoggedInFb: false,
      userID: '',
      name:'',
      email:'',
      picture: '',
      accessToken: ''
    }


  handleSignup = event =>{
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
    .then(response=>{

      this.setState({
        userID: `${response.id}`,
        name: response.name,
        email: response.email,
        isLoggedIn: true
        })
      }
    )

  .catch(error=>alert(error.message))

}
  handleLogin = event => {
    event.preventDefault();
    console.log('Clicked!');
    fetch(`http://localhost:3000/users/login`,{
      method:'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify({
        email: event.target.email.value,
        password: event.target.password.value

      })
    })
    .then(r=>r.json())
    .then(response=>{
      this.setState({
        userID: `${response.id}`,
        name: response.name,
        email: response.email,
        isLoggedIn: true
        })
    })
    .catch(error=>alert(error.message))
  }
  componentClicked = () => {
    console.log('FB Activated')
  }

  responseFacebook = response=> {
    console.log(response)
    this.setState({
      isLoggedIn: true,
      isLoggedInFb: true,
      userID: response.id,
      name: response.name,
      email: response.email,
      picture: response.picture.data.url,
      accessToken: response.accessToken
    })
  }

  render(){

    if (this.state.isLoggedIn){
      return(
        <div >
        <Router>

        <header> <center><img src={logo} alt="" width="115" height="115"/>

      	  </center>
          <Navigation profileData={this.state}/>

          <Route exact path='/find' component={FindShows}/>
          {/* <Route exact path='/profile' render={
            (props)=> <Profile profileData={this.state}/>
          }/> */}


        </header>
        <Gallery />
        </Router>
        </div>
      )
    } else {
      return(
        <div>
          <header> <center><img src={logo} alt="" width="115" height="115"/>

        	   </center>

          </header><center>
          <br/>
          <br/>
          <br/>
          <FacebookLogin componentClicked={this.componentClicked} responseFacebook={this.responseFacebook}/>
          <br/>
          <br/>
          <br/>
          <LoginSite handleSignup={this.handleSignup} handleLogin={this.handleLogin}/>
        </center>
        </div>
      )
    }


  }

};
