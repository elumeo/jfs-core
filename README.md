## Elumeo 'jfs-core' module

#### How to migrate an app to the jfs-core

### Import paths

Some paths in a non-migrated app are going to be moved to jfs-core paths.
The internal structure of the jfs-core resembles the structure of non-migrated jfs apps.

'jfs-core'-import paths begin with ```@elumeo/jfs-core/app```.

##### Routing

* move all ```<NoAuthRoute/>```s and ```<AuthRoute/>```s to the **default exported array** of ```/src/Routes.tsx```

##### Navigation

* move all navigation items to the **default exported array** of ```/src/Navigation.tsx```

##### Redux Store

###### Actions

* create the file ```/src/store/action/Root.ts```
* export all actions from jfs-core and app relative actions

example:
```
export * from '@elumeo/jfs-core/app/store/action/BaseAction';
export * from '@elumeo/jfs-core/app/store/action/ConfigAction';
export * from '@elumeo/jfs-core/app/store/action/SessionAction';

// -----------------------------------------------------------------------------

export * from './AppAction';
```

###### Epics

* create the file ```/src/store/epic/Root.ts```
* import all epics from jfs-core

example:
```
import { loginEpic, ... } from '@elumeo/jfs-core/app/store/epic/SessionEpic';
```

* export the combined epic (refer to redux-observables's combineEpics) as **default export**

###### Reducers

* create the file ```/src/store/reducer/Root.ts```
* import all reducers and their states from jfs-core

example:
```
import { languageReducer, settingsReducerState } from '@elumeo/jfs-core/app/store/reducer/SettingsReducer';
```

* import all app related reducers

* export the combined reducer (refer to redux's combineReducers) as **default export**

##### Translations

* create the file ```/src/Translations.json```

* create a json with translation keys that are only app relative

```
 {
  "de": {
    "app.title": "Rights Manager"
  },
  "en": {
    "app.title": "Rights Manager"
  },
  "it": {
    "app.title": "Rights Manager"
  }
 }
```

#### How to publish a new version of the 'jfs-core'

##### Prerequisites

* GitHub account (registered as a collaborator for the elumeo/jfs-core project)
* NPM.js account (registered for the developer team of elumeo)

---

To create a new version of the node module follow these steps.

**1. Clone the project**

  ```
  > git clone https://github.com/elumeo/jfs-core.git
  ```

  Now you can apply changes to the code to create a new version of 'jfs-core'.

**2. Update the version field**

  Bump the version field in the package.json file according to your changes.
  If you skip this step NPM will refuse to accept your update.

  ```
  {
    "name": "@elumeo/jfs-core",
    "version": "X.X.X", <-----
    ...
  ```

**3. Login with your npm account**

  Running this command will prompt you to login with your NPM.js credentials:

  ```
  > npm login --scope=@elumeo
  ```

**4. Publish your changes to the registry**

  ```
  > npm publish --access public
  ```

  Now your changes will be available as your specified version of the jfs-core.

**5. Install your updated version of the jfs-core**

  Run this command in the app that should use the jfs-core (replace 'YOUR.VERSION.NUMBER'):

  ```
  > npm install @elumeo/jfs-core@YOUR.VERSION.NUMBER
  ```

  Your version of the jfs-core will then be placed at `node_modules/@elumeo/jfs-core`.

---
