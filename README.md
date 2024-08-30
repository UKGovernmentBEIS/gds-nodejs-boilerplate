# BEIS SPL Planner

This repository contains the code for the Shared Parental Leave (SPL) and Stautory Shared Parental Pay (ShPP) eligibility tool service.

<<<<<<< HEAD
It is built on top of the [BEIS SPL common](https://github.com/UKGovernmentBEIS/beis-spl-common) baseline project, which in turn is forked from the [GDS Node.js boilerplate](https://github.com/alphagov/gds-nodejs-boilerplate) project.

## Getting started on development

### Installs

#### Required

- [Git](https://git-scm.com/)
- [Node](https://nodejs.org/en/)

#### Recommended

- [Visual Studio Code](https://code.visualstudio.com/) and these extensions:
  - [Nunjucks VSCode Extension Pack](https://marketplace.visualstudio.com/items?itemName=douglaszaltron.nunjucks-vscode-extensionpack)
  - [EditorConfig for VSCode](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)
  - [StandardJS - JavaScript Standard Style](https://marketplace.visualstudio.com/items?itemName=chenxsan.vscode-standardjs)
- [LiveReload](http://livereload.com/extensions/) browser extension

### Set up

Clone this code with Git:
=======
It includes:
- Grunt for compliation of sass/js
- [GOV.UK Frontend]
- [Browserify] with babelify and Nunjucksify
- Mocha for testing
- Middleware to set correlation headers
- i18n language support
- [Snyk]
- [StandardJS] for linting
- [nvm] (optional) for nodejs version

To get started clone the repo and run
>>>>>>> upstream/master

```
git clone git@github.com:UKGovernmentBEIS/beis-spl-planner.git
```

Add the common project as a second remote in Git, to pull changes from there when needed:

<<<<<<< HEAD
```
git remote add common git@github.com:UKGovernmentBEIS/beis-spl-common.git
git fetch common
```

Navigate to the root of the project and install NPM packages:

```
npm install
```

### Running the project in development

Once NPM packages have been installed, run the project locally with:

```
npm run dev
```

You should now be able to see the project running at http://localhost:3000/ in your browser.

If you have installed the LiveReload browser extension as above, then you can enable it once on the page. This will cause the page to automatically reload when you make changes to any file.
=======
### Using nvm (optional)
If you work across multiple Node.js projects there's a good chance they require different Node.js and npm versions.

To enable this we use [nvm (Node Version Manager)](https://github.com/creationix/nvm) to switch between versions easily.

1. [install nvm](https://github.com/creationix/nvm#installation)
2. Run `nvm install` in the project directory (this will use [.nvmrc](/../../.nvmrc))
3. Follow the steps above to install and start

[Express]: https://expressjs.com/
[Nunjucks]: https://mozilla.github.io/nunjucks/
[Snyk]: https://snyk.io/
[GOV.UK Frontend]: https://design-system.service.gov.uk/
[Browserify]: http://browserify.org/
[StandardJS]: https://standardjs.com/
[nvm]: https://github.com/creationix/nvm
>>>>>>> upstream/master
