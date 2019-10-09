import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import Layout from './Auxiliar/Layout';
import Landing from './components/Landing/Landing';
import Custom from './ModelR/ModelR';
import OtherModels from './components/NavigationBar/OtherModels';

class App extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <div style={{ margin: '0 5%' }}>
          <Layout>
            <Switch>
              <Redirect from="/" to="/modelr" exact />
              <Route path="/modelr" exact component={Landing} />
              <Route path="/iq" component={OtherModels} />
              <Route path="/mobi" component={OtherModels} />
              <Route path="/charlie" component={OtherModels} />
              <Route path="/italy" component={OtherModels} />
              <Route path={'/modelr/custom/:step'} exact component={Custom} />
            </Switch>
          </Layout>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
