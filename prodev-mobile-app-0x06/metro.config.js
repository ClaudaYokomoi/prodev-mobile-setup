const { getDefaultConfig } = require("expo/metro-config");

module.exports = (() => {
  const config = getDefaultConfig(__dirname);
  const { transformer, resolver } = config;

  config.transformer = {
    ...transformer,
    babelTransformerPath: require.resolve("nativewind/metro"),
  };
  config.resolver = {
    ...resolver,
    sourceExts: [...resolver.sourceExts, "css"],
  };

  return config;
})();