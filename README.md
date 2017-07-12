# CC React Scripts

This is a repo for our custom implementation of react scripts for the create react app tool

> `/packages/react-scripts` is where all customization takes place.
> The rest of this guide will assume it as the root directory.

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
To make your changes available for use, refer to [Publishing Changes](#publishing-changes)

### Editing config files
Unsurprisingly, the config files are under the folder `config`.
>*Note:*
>When running `eject` from a new app, this entire config folder gets (almost) exactly copied to the application root. Thus, all changes are directly reflected.

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

### Misc. Changes

- To add a `.npmrc` file to the template project, follow the same process that the original script took for `.gitignore` -- npm reads `.npmrc` when publishing and removes it automatically. Thus, rename it from `npmrc` to `.npmrc` on project init. You can see changes in `scripts/init.js`.
