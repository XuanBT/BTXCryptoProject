/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */
const {getDefaultConfig, mergeConfig} = require("@react-native/metro-config")
module.exports = (async()=> {
  const config = getDefaultConfig(__dirname);
  const { transformer, resolver } = config;
  config.transformer = {
    ...transformer,
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: true,
      },
    }),

  }

  return {
    ...config,
  };
})()
