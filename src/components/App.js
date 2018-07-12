
// Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';

//Components
import Header from './global/Header'
import Content from './global/Content'
import Footer from './global/Footer'

// Data Information
import items from '../data/menu'; //Incluir listas de cosas

class App extends Component {
  static propTypes={
  	children: PropTypes.object.isRequired
  };

  render() {
  	const {children}=this.props;
    return (
      <div className="App">
        <Header title="Codejobs Uwu" items={items} />
        <Content body={children}/>
        <Footer copyright="&copy; Codejobs 2018"/>
      </div>
    );
  }
}

export default App;
