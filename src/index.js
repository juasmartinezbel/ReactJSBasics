//Depdendencies
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
// import {BrowserRouter} from 'react-router-dom'; si solo se quiere usar BrowserRouter

// Routes
import AppRoutes from './routes';

//Assets
import './index.css';

ReactDOM.render(
  <Router>
  	<AppRoutes/>
  </Router>,
  document.getElementById('root')
);

/*

import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import './index.css';

render(
  <App />,
  document.getElementById('root')
);


*/