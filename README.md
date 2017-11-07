# CC React Scripts

This is a repo for our custom implementation of react scripts for the create react app tool

## Getting Started
Make sure you have create react app installed.

```bash
npm install -g create-react-app
```

Clone this repository into your work space and prepare to edit files in `/packages/react-scripts`. To actually _create_ an app with these custom scripts:
```bash
create-react-app my-app --scripts-version cc-react-scripts
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
Async, await, and class properties are included implicitly when using the preset `react-app`. Thus, only decorators need to be added manually. To do this, modify the webpack configs inside the `@remove-on-eject` babel section to specify the plugin for `transform-decorators-legacy`. For future plugins, add the plugin and respective package into `package.json`. Also add to `config/jest/babelTransform` if need be. Lastly, add the same configuration to `scripts/eject.js` under the babel config object in order to consider the possibility of ejecting.

##### Ex: Adding babel-plugin-react-css-modules
To add this package, I needed to touch on a lot of code. Since I can see this being removed in the future, I will list everything that was changed:
1. `config/webpack.config.*.js`:
  1. `scss` webpack config section (dev and prod): changed `css-loader` to `css-loader?importLoader...`.
  2. `babel-loader` webpack config section (dev and prod): added babel plugin for babel-plugin-react-css-modules.
2. `config/jest/babelTransform`: added the babel plugin for babel-plugin-react-css-modules.
3. `scripts/eject.js`: added the plugin to the babelrc object section.
4. `package.json`: added `babel-plugin-react-css-modules` and `postcss-scss` packages.

#### Adding Lint Style
Lint styles just involve copying over `.eslintrc` and `.eslintignore` to the `template/` directory from an existing CC project, and adding the StandardJS package to `package.json`.

#### Adding & Editing Npm Scripts
Scripts can be added to the `scripts/` directory. In order to make it accessible for use, add the matching case to `bin/react-scripts.js` and `scripts/init.js`:
1. `bin/react-scripts.js`: Add the name of script anywhere to the switch statement.
2. `scripts/init.js`: Add the name of the script and its corresponding command.
  - Notice that all `react-scripts <arg>` commands will call the script in the scripts folder. Upon ejecting, it gets converted to `node /path/to/script`

>Note: to account for the colon character when converting names on eject, the regex was changed in scripts/eject.js from `\\w` to `.` to match all characters (line 179 - `const regex = new RegExp(binKey + ' (.+)', 'g')`).

#### Adding Other Packages
For every package that doesn't involve some kind of configuration, simply add it to the appropriate section in `template/.template.dependencies.json`. They'll get added with npm install automatically so that you, as the developer, have access to them.

>Note: We added previous configuration packages to `packages.json` because they are used only by webpack or babel. Therefore, we don't need them if we're not touching the configs.

#### Misc. Changes

- To add a `.npmrc` file to the template project, follow the same process that the original script took for `.gitignore` -- npm reads `.npmrc` when publishing and removes it automatically. Thus, rename it from `npmrc` to `.npmrc` on project init. You can see changes in `scripts/init.js`.

- All other files that are wanted directly in the root of the app can simply be added to the `template/` directory.

## Development
At the time, I haven't found a clear way to directly test cc-react-scripts without publishing to npm registry\* for use with create-react-app. To avoid doing so for every change, we can test on the app the gets created via the script:

1. *Testing webpack configs*: run `npm run eject` from the newly created app, and make changes within the config folder.
2. *Testing app template*: simply modify the files under `src/`

Be sure to copy over the files after finishing edits. If you _must_ test a change that requires create-react-app (eg, testing webpack configs with no eject), run the publish script with the beta option: `./publish.sh beta`

>\* In theory, it should be possible to run `create-react-app my-app --scripts-version /absolute/path/to/this/module`, but the init script doesn't seem to play nicely with it. Maybe someday.

## Publishing to Npm

In order to update the cc-react-scripts registry, you need to first register a user account with npm.

#### Creating an Account
To do this in the command line, use `npm adduser` and follow the prompts. If you already have an account, check if you're logged in locally with `npm whoami`. If you're not logged in, use `npm login`.

#### Updating the Package
You then need to gain ownership of the cc-react-scripts registry in order to publish to it. To do so, you'll need to beg someone who has more control over things than you.

*EASY WAY*: Use the provided script: `./publish.sh`. By default, this publishes a patch. Find out more with `./publish.sh -h`

*MANUALLY*: You can update the package version with `npm version <update_type>`, where where update_type is one of the semantic versioning release types, patch, minor, or major. This command will change the version number in `package.json`.

After updating the version number, you can `npm publish` to push your changes to the registry.

>Note: You cannot publish with the same version number as a previously published version, so you *must* run `npm version patch` for even small updates.

#### Granting ownership
To give someone publishing access, use `npm owner add`. Refer to the [docs](https://docs.npmjs.com/cli/owner) for more info.

Note that there is only one level of access. Either you can modify a package, or you can't.

## OTHER TODOS

**Use Other CC Web projects as examples to finish off app boilerplate and features:**

- [x] Look into webpack-dashboard for running our dev builds (karma-web/package.json)
- [x] Add routing (karma-web/client/routes.js)
- [x] Add a redux store (karma-web/client/store.js)
- [x] Add redux dev tools when running dev only, as in it should not be there in a prod build (karma-web/client/ApplicationNode.js && karma-web/client/components/DevTools)
- [x] Add a sample action (web-template-fe/src/actions/ && web-template-fe/src/index.js)
- [x] Add a sample reducer (web-template-fe/src/reducers/ && web-template-fe/src/index.js)
- [x] Allow for an initial state to be pulled from the window object (karma-web/client/index.js)
- [x] Add and api class and its needed dependency, fetch || isomorphic-fetch || whatwg-fetch (karma-web/services/Api.js)

**Finishers**

- [x] Add your instructions for updating this project to this file
- [x] Add a deploy script to send the project to the npm repo
- [x] Submit a PR for all of your work
