# cc-react-scripts

This package includes scripts and configuration used by Clear Capital for [Create React App](https://github.com/facebookincubator/create-react-app).

# Breaking changes:

## babel-plugin-react-css-modules
This boilerplate adds support for CSS-Modules with a `scss` flavor.

*What this means*:
1. All imported `.scss` files are by default treated as local modules.
2. Styles are applied slightly differently. _PLEASE_ refer to the docs: https://github.com/gajus/babel-plugin-react-css-modules#example-transpilations

*How it works in cc-react-scripts*:
1. Webpack is set up to convert all class names within `scss` files to the hashed name.
2. Babel reads the `styleName` attribute within `js` files, and converts them to the hashed name.
3. Since the js and the css classes now match, the styles get applied. 

Please refer to the original documentation for everything else:

* [Getting Started](https://github.com/facebookincubator/create-react-app/blob/master/README.md#getting-started) – How to create a new app.
* [User Guide](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md) – How to develop apps bootstrapped with Create React App.
