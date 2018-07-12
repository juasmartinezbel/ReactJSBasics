//Dependencias
import React, { Component } from 'react';
import PropTypes from 'prop-types'; //Que propiedades recibir, de que tipo o qué.

//Assets
import './css/Footer.css';

class Footer extends Component {
  static propTypes={
    // Se mandan desde App.js
    copyright: PropTypes.string
  };

  render() {
  	// Valores por defecto si no es requerido
  	const {copyright='&copy; React 2017'} = this.props;
    return (
      <div className="Footer">
          <p>{copyright}</p>
      </div>
    );
  }
}

export default Footer;
