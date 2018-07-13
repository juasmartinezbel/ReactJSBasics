// Dependencies
import webpack from 'webpack';
import path from 'path';


// Environment
const isDevelopment = process.env.NODE_ENV !== 'production';

// Paths
const PATHS = {
  index: path.join(__dirname, 'src/index'),
  build: path.join(__dirname, 'src/public'),
  src: path.join(__dirname, 'src')
};


const getMode = () => isDevelopment ? 'development' : 'production';

const getDevtool = () => 'cheap-module-eval-source-map';

const getEntry = () => {
  const entry = [PATHS.index];

  if (isDevelopment) {
    entry.push('webpack-hot-middleware/client?reload=true');
  }
  console.log(entry);
  return entry;
};

const getOutput = () => ({
  path: PATHS.build,
  publicPath: '/',
  filename: '[name].bundle.js'
});


const getPlugins = () => {
  const plugins = [

  ];

  if(isDevelopment) {
    plugins.push(new webpack.HotModuleReplacementPlugin());
  }

  return plugins;
};

const getLoaders = () => ({
  rules: [
    {
      test: /\.js?$/,
      loaders: ['babel-loader'],
      include: PATHS.src
    },
    {
      test: /(\.css)$/,
      loaders: ['style-loader', 'css-loader']
    },
    {
      test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'url-loader?limit=10000&mimetype=image/svg+xml'
    }
  ]
});


export default {
  mode: getMode(),
  devtool: getDevtool(),
  entry: getEntry(),
  output: getOutput(),
  plugins: getPlugins(),
  module: getLoaders()
};