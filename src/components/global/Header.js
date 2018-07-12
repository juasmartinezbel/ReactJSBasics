//Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types'; //Que propiedades recibir, de que tipo o qué.
import {Link} from 'react-router-dom'; //Mejor usar esto a <a>, ayuda a vincular
// Assets
import logo from './images/logo.svg';
import './css/Header.css';

class Header extends Component {
  static propTypes={
    // Se mandan desde App.js
    title: PropTypes.string.isRequired,
    items: PropTypes.array.isRequired
  };

  render() {
    /*
    * Se puede ver que se recibe con:
    * console.log(this.props);
    */
    const {title, items} = this.props;
    /*
    * Equivalente a:
    * const title = this.props.title;
    * const items = this.props.items;
    */

    return (
      <div className="Header">
        <div className="Logo">
          <img src={logo} alt="logo" />
          <h2>{title}</h2>
          <ul className="Menu">
            {items && items.map((item, key) => <li key={key}><Link to={item.url}>{item.title}</Link></li>)}
          </ul>
        </div>
      </div>
    );
  }
}

export default Header;
