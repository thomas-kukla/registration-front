### Guide : Orange Money Registrations

#### This web app enables to display registrations and processes relative to Orange Money

It has two main pages : 
- list of all registrations
- list of all processes

Then, there is a detail page for each process and registration

#### Project setup
```
$ npm install
```

#### Compiles and hot-reloads for development
```
$ npm run serve
```
#### Configure hot-reload on Webpack

Add a vue.config.js at the root of the project, then paste :
```
module.exports = {
  devServer: {
    watchOptions: {
      aggregateTimeout: 500,
      poll: 1000,
      ignored: ["node_modules"],
    },
  }
```
#### Compiles and minifies for production
```
$ npm run build
```

#### Lints and fixes files
```
$ npm run lint
```
