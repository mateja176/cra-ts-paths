const rewireReactHotLoader = require('react-app-rewire-hot-loader');
const path = require('path');

module.exports = (config, env) =>
  rewireReactHotLoader(
    {
      ...config,
      resolve: {
        ...config.resolve,
        alias: { '': path.resolve(__dirname, 'lib') },
      },
    },
    env,
  );
