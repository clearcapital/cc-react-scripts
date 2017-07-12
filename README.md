# CC React Scripts

This is a repo for our custom implementation of react scripts for the create react app tool

> `/packages/react-scripts` is where all customization takes place.
> The rest of this guide will assume it as the root directory.

## TODO

- [x] Update this readme file with your guide to update and change this script
- [x] Fix the build config, `npm run build` does not seem to process the other style files
- [x] Babel: Verify asycn and await
- [x] Babel: Add decorators
- [ ] Update the lint style to use StandardJS
- [x] Add our `.editorconfig`
- [x] Add `.npmrc`
- [x] Add `.nvmrc`
- [ ] Update npm scripts specificly for linting and unit testing, then have test call both like in our apps now
- [ ] Add react-jss
- [ ] Add lodash
- [ ] Add moment
- [ ] Add classnames
- [ ] Add Redux
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
Following the documentation for sass-loader and less-loader, I added their respective loaders to both webpack config files, then specified the packages in `package.json`. Note that `.sass` and `.less` files have also been added to the `exclude` list for the `file-loader` module in the webpack config:
```javascript
exclude: [/\.js$/, /\.html$/, /\.json$/, /\.sass$/, /\.less$/],
```

#### Adding Babel Plugins
Async, await, and class properties are included implicitly when using the preset `react-app`. Thus, only decorators needs to be added manually. To do this, I modified the webpack configs inside the `@remove-on-eject` babel section to specify the plugin for `transform-decorators-legacy`. I also added it as a dev dependency in `package.json`.

### Misc. Changes

- To add a `.npmrc` file to the template project, I had to follow the same process that the original script took for `.gitignore` -- npm reads `.npmrc` when publishing and removes it automatically. Thus, I needed to rename it on project init. You can see changes in `scripts/init.js`.
