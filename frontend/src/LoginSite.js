import React from 'react';


export default class LoginSite extends React.Component{


  render(){
    return(
      <div>
        <form
          className ='Signup'
          onSubmit={this.props.handleSignup}
          >Signup without Facebook
          <br/>
          <label name='name'htmlFor='name'>Name</label>
          <input type='text'name='name'></input><br/>
          <label name='email' htmlFor='email'>Email</label>
          <input type='email' name='email'></input><br/>
          <label name='password'htmlFor='password'>Password</label>
          <input type='password'name='password'></input><br/>
          <input type='submit' value='submit' ></input>

        </form>
        <br/>
        <form
          className ='Login'
          onSubmit={this.props.handleLogin}
          >Login
          <br/>
          <label name='email' htmlFor='email'>Email</label>
          <input type='email' name='email'></input><br/>
          <label name='password' htmlFor='password'>Password</label>
          <input type='password'name='password'></input><br/>
          <input type='submit' value='submit' ></input>

        </form>
      </div>
    )
  }
}
