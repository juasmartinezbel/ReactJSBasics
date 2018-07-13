// Dependencies
import express from 'express';
import webpack from 'webpack';
import path from 'path';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import open from 'open';

// Webpack Configuration
import webpackConfig from "../../webpack.config.babel";

// API
import blogApi from './api/blog';

// Server Port
const port = process.env.PORT || 3000;

// Environment 
const isDevelopment = process.env.NODE_ENV !== 'production';
console.log('isDevelopmen:',isDevelopment);

// Express app
const app = express();

// Public 
app.use(express.static(path.join(__dirname, '../public')));

// Webpack Compiler
const webpackCompiler = webpack(webpackConfig);

if (isDevelopment) {
  // Webpack Middlewares
  app.use(webpackDevMiddleware(webpackCompiler));
  app.use(webpackHotMiddleware(webpackCompiler));
}

//API Dispatch 
app.use('/api/blog', blogApi);

//  Sending all traffic to React
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'))
});

// Listen port
app.listen(port, err => {
  if(!err) {
    open(`http://localhost:${port}`);
  }
})