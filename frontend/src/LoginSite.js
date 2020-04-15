import React from 'react';


export default class LoginSite extends React.Component{


  render(){
    return(
      <div className='container'>
        <form
          onSubmit={this.props.handleLogin}
          >Login/Signup without Facebook
          <br/>
          <label name='name'for='name'>Name</label>
          <input type='text'name='name'></input><br/>
          <label name='email' for='email'>Email</label>
          <input type='email' name='email'></input><br/>
          <label name='password'for='password'>Password</label>
          <input type='password'name='password'></input><br/>
          <input type='submit' value='submit' ></input>

        </form>
      </div>
    )
  }
}
