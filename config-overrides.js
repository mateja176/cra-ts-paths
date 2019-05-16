const rewireReactHotLoader = require('react-app-rewire-hot-loader');
const path = require('path');

module.exports = (config, env) => rewireReactHotLoader(config, env);
