# VueWorkspace
Vue js / Web components project that satisfies the follow objectives: 

Develop a ViteJS Vue TypeScript project that implements internationalization (i18n) in both English and French for four distinct Vue components.
These components should be build-able as web-components and integrated into a second codebase (a single HTML file), displaying 2 instances of all 4 components on a single page. The web-components must interact with each other, demonstrating dynamic functionality and language switching capability.

## Project Structure
This project is structured to support a modular and scalable application development approach using Nx. 
 ### Directory Structure
- lib/
  - [translations/](lib/translations/README.md)
    - Houses the translation files for internationalization support in the application.
  - [Vue-components/](lib/Vue-components/README.md)
    - Contains reusable Vue.js components that can be imported into various parts of the application.

- projects/
  - Vue-app/
    - This directory contains the Vue.js code that demonstrate the Vue-components working together within the Vue environment.
  - WebApp/
    - This directory contains the Js and HTML code that demonstrate the Vue-components working together as web components within the HTML/JS environment.

- .editorconfig

- .eslintrc.json

- .eslintignore

- .gitignore

- .prettierignore

- .prettierrc

- nx.json

- package.json

- tsconfig.base.json


## Install

To install, run this locally, clone the repo and run npm install

> git clone git@github.com:jnoweb/ViteJS-Vue-TypeScript-project.git

> cd into ViteJS-Vue-TypeScript-project

> Run: npm install

## Usage for Vue app
#### Testing
To run test:
> npx nx run vue-app:test
#### Build
To build, run:
> npx nx run vue-app:build
#### Serve
To serve, run:
> npx nx run vue-app:serve

## Usage for Web components app
#### Testing
To test run:
> npx nx run WebApp:e2e
#### Build
To build run:
> npx nx run WebApp:build
#### Serve
To serve run:
> npx nx run WebApp:serve