# CC React Scripts

This is a repo for our custom implementation of react scripts for the create react app tool


## TODO

- [x] Update this readme file with your guide to update and change this script
- [x] Fix the build config, `npm run build` does not seem to process the other style files
- [x] Babel: Verify asycn and await
- [x] Babel: Add decorators
- [x] Update the lint style to use StandardJS
- [x] Add our `.editorconfig`
- [x] Add `.npmrc`
- [x] Add `.nvmrc`
- [x] Update npm scripts specifically for linting and unit testing, then have test call both like in our apps now
- [x] Add react-jss
- [x] Add lodash
- [x] Add moment
- [x] Add classnames
- [x] Add Redux
    - redux
    - redux-devtools
    - redux-devtools-dock-monitor
    - redux-devtools-log-monito
    - redux-multi
    - redux-promise
    - redux-thunk

## Getting Started
Clone this repository into your work space and prepare to edit files in `/packages/react-scripts`. To actually _create_ an app with these custom scripts:
```bash
create-react-app myApp --scripts-version cc-react-scripts
```
To make your changes available for use, refer to [Publishing to Npm](#publishing-to-Npm)

### Making Changes

> `/packages/react-scripts` is where all customization takes place.
> The rest of this guide will assume it as the root directory.

#### Adding Sass and Less to Webpack
Following the documentation for sass-loader and less-loader, add their respective loaders to both webpack config files, then specify the packages in `package.json`. Note that `.sass` and `.less` files have also been added to the `exclude` list for the `file-loader` module in the webpack config:
```javascript
exclude: [/\.js$/, /\.html$/, /\.json$/, /\.sass$/, /\.less$/],
```

#### Adding Babel Plugins
Async, await, and class properties are included implicitly when using the preset `react-app`. Thus, only decorators need to be added manually. To do this, modify the webpack configs inside the `@remove-on-eject` babel section to specify the plugin for `transform-decorators-legacy`. Also add it as a dev dependency in `package.json`. Lastly, add to `scripts/eject.js` where a babel config object is appended to `package.json` in order to consider the possibility of ejecting.

#### Adding Lint Style
Lint styles just involve copying over `.eslintrc` and `.eslintignore` to the `template/` directory from an existing CC project, and adding the StandardJS package to `package.json`.

#### Adding & Editing Npm Scripts
Scripts can be added to the `scripts/` directory. In order to make it accessible for use, add the matching case to `bin/react-scripts.js` and `scripts/init.js`:
1. `bin/react-scripts.js`: Add the name of script anywhere to the switch statement.
2. `scripts/init.js`: Add the name of the script and its corresponding command.
  - Notice that all `react-scripts <arg>` commands will call the script in the scripts folder. Upon ejecting, it gets converted to `node /path/to/script`

>Note: to account for the colon character when converting names on eject, the regex was changed in scripts/eject.js from `\\w` to `.` to match all characters (line 179 - `const regex = new RegExp(binKey + ' (.+)', 'g')`).

#### Adding Other Packages
For every package that doesn't involve some kind of configuration, simply add it to the dependencies section under `package.json`.

#### Misc. Changes

- To add a `.npmrc` file to the template project, follow the same process that the original script took for `.gitignore` -- npm reads `.npmrc` when publishing and removes it automatically. Thus, rename it from `npmrc` to `.npmrc` on project init. You can see changes in `scripts/init.js`.

- All other files that are wanted directly in the root of the app can simply be added to the `template/` directory.

## Publishing to Npm

In order to update the cc-react-scripts registry, you need to first register a user account with npm.

#### Creating an Account
To do this in the command line, use `npm adduser` and follow the prompts. If you already have an account, check if you're logged in locally with `npm whoami`. If you're not logged in, use `npm login`.

#### Updating the Package
You then need to gain ownership of the cc-react-scripts registry in order to publish to it. To do so, you'll need to beg someone who has more control over things than you.

From there, you can update the package version with `npm version <update_type>`, where where update_type is one of the semantic versioning release types, patch, minor, or major. This command will change the version number in `package.json`.

After updating the version number, you can `npm publish` to push your changes to the registry.

>Note: You cannot publish with the same version number as a previously published version, so you *must* run `npm version patch` for even small updates.

#### Granting ownership
To give someone publishing access, use `npm owner add`. Refer to the [docs](https://docs.npmjs.com/cli/owner) for more info.

Note that there is only one level of access. Either you can modify a package, or you can't.

## OTHER TODOS

**Use Other CC Web projects as examples to finish off app boilerplate and features:**

- [x] Look into webpack-dashboard for running our dev builds (karma-web/package.json)
- [ ] Add routing (karma-web/client/routes.js)
- [ ] Add a redux store (karma-web/client/store.js)
- [ ] Add redux dev tools when running dev only, as in it should not be there in a prod build (karma-web/client/ApplicationNode.js && karma-web/client/components/DevTools)
- [ ] Add a sample action (web-template-fe/src/actions/ && web-template-fe/src/index.js)
- [ ] Add a sample reducer (web-template-fe/src/reducers/ && web-template-fe/src/index.js)
- [ ] Allow for an initial state to be pulled from the window object (karma-web/client/index.js)
- [x] Add and api class and its needed dependency, fetch || isomorphic-fetch || whatwg-fetch (karma-web/services/Api.js)

**Finishers**

- [ ] Add your instructions for updating this project to this file
- [ ] Add a deploy script to send the project to the npm repo
- [ ] Submit a PR for all of your work
