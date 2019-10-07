import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import Layout from './hoc/Layout';
import Landing from './components/Landing';
import Custom from './customize/Custom';

class App extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <div style={{ margin: '0 5%' }}>
          <Layout>
            <Switch>
              <Redirect from="/" to="/modelr" exact />
              <Route path="/modelr" exact component={Landing} />
              <Route path={'/modelr/custom/:step'} exact component={Custom} />
            </Switch>
          </Layout>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
