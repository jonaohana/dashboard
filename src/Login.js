import React from 'react';
import { Redirect } from 'react-router-dom';
import { useOktaAuth } from '@okta/okta-react';
import OktaSignInWidget from './OktaSignInWidget';
import './App.css';

function Login() {
  const { oktaAuth, authState } = useOktaAuth();

  const onSuccess = function(res) {
    if (res.status === 'SUCCESS') {
      return oktaAuth.signInWithRedirect({
        sessionToken: res.session.token
      });
    }
  }

  const onError = function(err) {
    console.log('error logging in', err);
  }

  return authState.isAuthenticated ?
    <Redirect to={{ pathname: '/' }}/> :
    <div className="login">
      <OktaSignInWidget
      baseUrl='https://dev-90570584.okta.com'
      onSuccess={onSuccess}
      onError={onError}/>
    </div>;
}

export default Login;
