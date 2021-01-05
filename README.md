# jfs-core 9

## Install the core
- run `npm i` to install all required modules for the core and submodule (scripts) system
- run `npm run clean-install-and-rebuild` to install everything from scratch and build the js files (see section `Transpilation and compilation`) afterwards

## Using jfs-core in another project

### Dependencies

- all dependencies that are used outside of the core have to be listed in the `dependencies` in package.json
- webpack creates a dependency graph for the build -> bundle size is not effected
- jfc components only have a peer dependency to the core

### Transpilation and compilation

- jfs-core 9 is going to be **pretranspiled** to JavaScript
- transpilation also creates declaration files outside of JavaScript to provide **typesafety**
- jfc components and scripts are also going to be pretranspiled
- **Webpack will only be used in the app** to create a bundle from JavaScript files of the core/jfc components and TypeScript files of the app

### Synchronization of styles

- the typescript compiler does not listen to changes on scss files therefore we have a script to synchronize these on our own
- to synchronize changes on styles in from src to build just run the sync-styles script

### Frontend structure

#### Usage of types instead of interfaces
- check this [article](https://medium.com/@koss_lebedev/type-aliases-vs-interfaces-in-typescript-based-react-apps-e77c9a1d5fd0) which is about pros and cons

#### Usage of [namespace merging](https://www.typescriptlang.org/docs/handbook/declaration-merging.html#merging-namespaces)

- transport type definitions together with apis that use them

Example - *How to access props type of a component*:

```
import Popover from 'Core/Component/Popover';
type ExtendedType = Popover.Props & {
  foo: string
};
```

#### New directories 'Types' & 'Constant'

- root directories (with path aliases) for defining types and constants

#### Moved files
- JscClient: `Core/Base/JscClient` -> `Jsc/Client`
- Translations: `Core/Base/Translation` -> `Core/Utilities/Format/Translations`
- Toast utilities (timeToRead(), constants) `Core/Base/Utilities` -> `Core/Constant/Toast`, `Core/Component/Snackbar/TimeToRead`
- IConfig: `Core/Base/IConfig` -> `Core/Types/Configuration`
- INotification: `Core/Store/Reducer/Notification` -> `Core/Types/Notification`

### Core Scripts

#### Generating the JSC api
- makes use of the new api description rest endpoint
- each generation will also create a ```description.json``` file which is used to determine if changes have happened in the backend when running 'jsc-check' or 'jsc-generate'
- slightly changed structure of configuration

```
{
  "local": {
    "namespace": "JSCApi"
  },
  "remote": {
    "MY_CONTROLLER": [
      "MY_METHOD"
    ]
  }
}
```
- configuration moved: ```Jsc/JscApiConfig.json``` -> ```Jsc/Api/config.json```

#### Adding a new icon to the juwelo icon font
- to add a new icon to the juwelo icon font we need the new icon as a svg graphic
- put this file into the core directory `scripts/Resources/juwelo-icon-font/svg`
- in the terminal use the command: `npm run generate-juwelo-icon-font`
- this command will automatically check the directory `scripts/Resources/juwelo-icon-font/svg` and will generate a new icon font including all files in this directory
- the filename is also the css class name to access the font icon

### Store structure

- Core reducer as combinedReducer

```
{
  Core: {                                 <---
    App: {                                <---
      appInitialized: boolean;            <---
      allowRobotLogin: boolean;           <---
      packageJson: { version?: string };  <---
    },                                    <---
    Configurationn: {                     <---
      ...                                 <---
    },                                    <---
    Language: {                           <---
      ...                                 <---
    },                                    <---
    ...                                   <---
  },                                      <---
  Jfc: {
    ...
  },
  App: {
    ...
  }
}
```

### Usage of jfc components

- jfs-core does **not** automatically combine jfc reducers to it's reducer anymore
- instead you should create your own namespace in the global reducer (in the app) like this:

```
{
  Core: {
    ...
  },
  Jfc: {               <---
    YOUR_STATE: HERE,  <---
    OTHER_STATE: HERE, <---
    ...                <---
  },                   <---
  App: {
    ...
  }
}
```

- this makes it easier to provide typesafe access to your jfc component
- you can use the global reducer type (```Core/Store/Reducer/Global```) and extend it with your jfc type
- also you should add jfc epics to the store **on your own** when you set up your app

### Location of scripts and settings

- all frontend settings are now in the global settings directory
  - example: ```'@elumeo/jfs-core/settings/frontend/webpack.development.js'``` -> ```'@elumeo/jfs-core/settings/webpack.development.js'```
- scripts is now a [subpackage](https://www.npmjs.com/package/subpackage) which will be pretranspiled
- scripts can now be used by this pattern
  ```
  node node_modules/@elumeo/jfs-core/scripts/build/Setup/SCRIPT_NAME
  ```
- to rebuild the scripts run `npm run build` inside the `scripts` directory

### Synchronization of projects

- instead of linking projects through the dependencies there is now a new field in package.json called 'jfs' where you can enter local links

```
{
  "name": "jfs_Boilerplate",
  "description": "jfs_Boilerplate",
  "scripts": {
    ...,
    "sync-development": "node node_modules/@elumeo/jfs-core/scripts/build/Setup/sync-development.js"
  },
  "dependencies": {
    "@elumeo/jfs-core": "9.0.0",
    "jfc-hello-world": "https:/github.com/scharfohnezwiebeln/jfc_HelloWorld.git"
  },
  "jfs": {
    "sync": {
      "@elumeo/jfs-core": "../../jfs-core",
      "jfc-hello-world": "../../jfc_HelloWorld"
    }
  }
}
```

- this has the advantage of being able to install dependencies with npm without the need of having to replace the dependency version every time

### Updated dependencies

- react-redux: 5.0.7 --> 7.2.0

---

## Developing jfs-core or jfc components itself

### Transpilation

- run ```npm run build``` or ```npm run build:watch``` to create transpiled JavaScript files from your TypeScript source files

  results --> ```'@elumeo/jfs-core/build'```


### Jfc

- jfc has now elements of core **and** app development
- jfc should be pretranspiled like the core
- everything should just be exported out of your component like it was a module in your app
- there is no hidden magic anymore (above mentioned changes to the store)

### Scripts

##### How to build a script

- run ```npm run build``` or ```npm run build:watch``` to create transpiled JavaScript files from your TypeScript source

  results --> ```'@elumeo/jfs-core/scripts/build'```

##### How to synchronise & build the core

- run ```npm run build:watch``` in jfs-core
- run ```npm run sync-development``` in your jfs app or your jfc component (see "Synchronization of projects")
- add as many apps and components for synchronisation as you want

##### How to synchronise & build while working on the core, a component and an app

- run ```npm run build:watch``` in your component and the core
- run ```npm run sync-development``` in your app and your component

##### New environment detection

- running JFS.discover()
  - fills JFS.projects[] with instances of either Core, Component or App
  - sets JFS.Head to the project which is currently in development
  - you can check in which environment by simply checking which project instance JFS.Head is with the ```instanceof``` keyword

---

## Future

- **9.1**: integration of showcase app as new way to access the documentation for jfs-core
