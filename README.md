# exquiz-app, A vuejs quiz application

<p align="center">
  <br>
  <img src="https://res.cloudinary.com/jidecloudy/image/upload/v1617926599/exquiz/Screenshot_from_2021-04-09_01-03-01_szympb.png" width="600" />
  <br>
</p>

## Development

```bash
# Clone project
git clone https://github.com/jidegithub/exquiz.git

# Install dependencies
```
npm install

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your unit tests
```
npm run test:unit
```

### Lints and fixes files
```
npm run lint
```

## Build Setup


``` bash
# install dependencies
```
npm install

# serve with hot reload at localhost:8080
```
npm run dev
```

# build for production with minification
```
npm run build
```

# run unit tests
```
npm run unit
```

# run all tests
```
npm test
```

## Features

- fully PWA installable
- Mobile Responsive

# Directory structure

```
├── dist                      // dist 
├── public                     // public
├── src                        // source code
│   ├── api                    // all requests
│   ├── assets                 // static resource like themes, fonts
│   ├── components             // global public components
│   ├── router                 // router
│   ├── store                  // global status management
│   ├── styles                 // global styles
│   ├── view                   // view
│   ├── App.vue                // entry view
│   └── main.js                // entry for loading components, initialization
├── .babelrc                   // babel-loader config
├── eslintrc.js                // eslint config
├── .gitignore                 // gitignore
├── favicon.ico                // favicon
├── index.html                 // html template
└── package.json               // package.json
```

## Changelog
Detailed changes for each release are documented in the [release notes](https://github.com/PanJiaChen/vue-element-admin/releases).

## State Management

Quiz summary is managed by Vuex. Other data are managed by their own business pages.

## Stack
  vuejs
  SASS

## To Scalability

  Code splitting: I would probably split the app into lazily loaded chunks for fast transport over the network.
  Modularize the Vuex store.

## Done Differently

  A dynamic and reusable timedown counter
  Subtle animation of Components and its element
  Use a graph to show results compared to other candidates

