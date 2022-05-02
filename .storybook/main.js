module.exports = {
  stories: ['../src/components/**/*.stories.tsx'],
  addons: ['@storybook/addon-essentials', {
      name: '@storybook/addon-postcss',
      options: {
        cssLoaderOptions: {
          // When you have splitted your css over multiple files
          // and use @import('./other-styles.css')
          importLoaders: 1,
        },
        postcssLoaderOptions: {
          // When using postCSS 8
          implementation: require('postcss'),
        },
      },
    },
],
  babel: async (options) => {
    return ({
    ...options,
    plugins: [...options.plugins, require.resolve('@babel/plugin-transform-react-jsx')]
  })},
  webpackFinal: (config, { configType }) => {
    config.resolve.modules.push(`${process.cwd()}/src`)
    // remove svg from existing rule


    return config
  }
}
