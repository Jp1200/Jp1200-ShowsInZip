

import React from 'react';
import FacebookLogin from 'react-facebook-login';

class LoginFacebook extends React.Component {


  render() {

    return (
      <FacebookLogin
        appId="1142671056072934"
        autoLoad={true}
        fields="name,email,picture"
        onClick={this.props.componentClicked}
        callback={this.props.responseFacebook}
      />
    )
  }
}

export default LoginFacebook;
