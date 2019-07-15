## Elumeo 'jfs-core' module

#### How to publish a new version of the 'jfs-core'

##### Prerequisites

* GitHub account (registered as a collaborator for the elumeo/jfs-core project)
* NPM.js account (registered for the developer team of elumeo)

---

To create a new version of the node_module follow these steps.

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

---
