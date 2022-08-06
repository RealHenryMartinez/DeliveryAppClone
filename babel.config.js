module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],

    // putting in Tailwind CSS
    plugins: ["tailwindcss-react-native/babel"],
  };
};
