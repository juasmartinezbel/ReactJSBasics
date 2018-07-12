//Dependencies

import React from 'react';
import {Route, Switch} from 'react-router-dom';

//Components

//Me redirige de una al respectivo index
import App from './components/App';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Page404 from './components/Page404';

//Las rutas funcionarán como un switch/case
// El Exact es importante para ver si devuelve a Error
const AppRoutes=()=>
	<App>
		<Switch>
			<Route exact path="/about" component={About} />
			<Route exact path="/contact" component={Contact} />
			<Route exact path="/" component={Home} />
			<Route component={Page404} />
		</Switch>
	</App>;
export default AppRoutes;

