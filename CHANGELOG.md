### Whats new in jfs-core 8?

#### jfs-core-dev integration

- no need for jfs-core-dev anymore
- dev-scripts
  - path: node_modules/@elumeo/**jfs-core**/scripts/**myScript.js**)
- build settings
  - path: node_modules/@elumeo/**jfs-core**/settings/**frontend**/webpack.development.js)


#### jfs-sync: synchronize jfs-core/jfc-components with your app while development
- replace the version of the jfs module with "**jfs-sync: path/to/jfs/module**"
- **add the script**: "sync-development": "node node_modules/@elumeo/jfs-core/scripts/sync-development.js"
- run "**npm run sync-development**" to synchronize your development of the module with the app it is used in


#### Centralized deployment of config files
- jfs-core will deploy configuration files **on install**
- deployed files:
  - tsconfig.json
  - tslint.json
  - .babelrc
  - .editorconfig
  - .prettierrc
  - .prettierignore
- no need to commit these files anymore (they will be overwritten)


#### Path mapping

##### Why?

|            | Path                                         |
|------------|----------------------------------------------|
| **Before** | import JSCApi from '../../../../Jsc/JscApi'; |
| **After**  | import JSCApi from 'JscApi';                 |

- expressive and readable imports
- better illustration of modularity
- further reading:
  - [Sexier Imports in TypeScript](https://netbasal.com/sexier-imports-in-typescript-e3c645bdd3c6)
  - [Line length limit](https://www.codereadability.com/maximum-line-length/)

##### Adjustments of paths

All paths in jfs-core are now capitalized

###### Why?

- imports from node modules are always lowercased

  --> there may be conflicts
- more consistency according to React in general
  - selfwritten components have to be named in PascalCase
  - file names should match component names
  - directories should follow the same pattern as files

##### Available path mappings

| Mapping     | Path                                   |
|-------------|----------------------------------------|
| Action/*    | ./Store/Action/*                       |
| Component/* | ./Component/*                          |
| Core/*      | ../node_modules/@elumeo/jfs-core/src/* |
| JscApi      | ./Jsc/JscApi.ts                        |
| Mock/*      | ./Mock/*                               |
| Setup/*     | ./Setup/*                              |
| Store       | ./Store/index.ts                       |
