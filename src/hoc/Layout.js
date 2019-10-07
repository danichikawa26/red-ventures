import React from 'react';
import Auxiliar from './Auxiliar';
import Navigation from '../components/Navigation';

class Layout extends React.Component {

  render() {
    return (
      <Auxiliar>
        <Navigation />
        <main>
          {this.props.children}
        </main>
      </Auxiliar>      
    );
  }
}

export default Layout;