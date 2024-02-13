[![Coverage Status](https://coveralls.io/repos/github/uw-it-aca/solstice-vue/badge.svg?branch=main)](https://coveralls.io/github/uw-it-aca/solstice-vue?branch=main)

# solstice-vue
Solstice Vue Component Library

* Vue 3
* Bootstrap 5
* Vite 4 (library packaging)

Note: This repo does not currently deploy to any host.

## Requirements
Install or update the following applications:

* [VS Code](https://code.visualstudio.com/)
* [Node.js (LTS)](https://nodejs.org/en)

## Project Setup

```sh
git clone git@github.com:uw-it-aca/solstice-vue.git
```

```sh
cd solstice-vue
```

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Build component library

```sh
npm run build
```

This command will produce a /dist directory that will be imported by other apps.

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Run Unit Tests with Coverage report

```sh
npm run coverage
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run eslint
```

### Lint with [Stylelint](https://stylelint.io/)

```sh
npm run stylelint
```
