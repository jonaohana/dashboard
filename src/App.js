import React from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import Login from './Login';
import Dashboard from './Dashboard';
import App1 from './app1';
import App2 from './app2';
import App3 from './app3';
import App4 from './app4';
import { Route } from 'react-router-dom';
import { LoginCallback, SecureRoute, Security } from '@okta/okta-react';
import { OktaAuth, toRelativeUrl } from '@okta/okta-auth-js';
import { useHistory } from 'react-router-dom';

const oktaAuth = new OktaAuth({
  issuer: 'https://dev-90570584.okta.com/oauth2/default',
  clientId: '0oa321j67wajtOyVj5d7',
  redirectUri: 'http://localhost:3001/callback'
});

const App = () => {
  const history = useHistory();
  const restoreOriginalUri = async (_oktaAuth, originalUri) => {
    history.replace(toRelativeUrl(originalUri, window.location.origin));
  };
  const onAuthRequired = function() {
    history.push('/login')
  }

  return (
    <div className="App">
      <div className="page">
        <div className="content">
          <Security oktaAuth={oktaAuth}
                    restoreOriginalUri={restoreOriginalUri}
                    onAuthRequired={onAuthRequired}>
            <Header/>
            <Route path='/' exact={true} component={Home}/>
            <Route path='/login' exact={true} component={Login}/>
            <SecureRoute path='/dashboard' exact={true} component={Dashboard}/>
            <SecureRoute path='/app1' exact={true} component={App1}/>
            <SecureRoute path='/app2' exact={true} component={App2}/>
            <SecureRoute path='/app3' exact={true} component={App3}/>
            <SecureRoute path='/app4' exact={true} component={App4}/>
            <Route path='/callback' component={LoginCallback}/>
          </Security>
        </div>
      </div>
    </div>
  );
}

export default App;
