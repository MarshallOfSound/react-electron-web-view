# Electron WebView

[![Build Status](https://travis-ci.org/MarshallOfSound/react-electron-web-view.svg?branch=master)](https://travis-ci.org/MarshallOfSound/react-electron-web-view)
[![npm version](https://badge.fury.io/js/react-electron-web-view.svg)](https://www.npmjs.com/package/react-electron-web-view)
[![npm](https://img.shields.io/npm/dt/react-electron-web-view.svg?maxAge=2592000)](https://www.npmjs.com/package/react-electron-web-view)
[![license](https://img.shields.io/github/license/MarshallOfSound/react-electron-web-view.svg?maxAge=2592000)](https://github.com/MarshallOfSound/react-electron-web-view/blob/master/LICENSE)
![status](https://img.shields.io/badge/Status-%20Ready%20for%20Awesome-red.svg)

__A simple wrapper of the Electron WebView element to allow it's magical props in React__


## Installation

The easiest way to use react-electron-web-view is to install it from NPM and `require` or `import` it in your Electron application.

You can also use the standalone build by including `dist/react-electron-web-view.js` in your page. If you use this, make sure you have already included React, and it is available as a global variable.

```
npm install react-electron-web-view --save
```

Or for the hipsters out there

```
yarn add react-electron-web-view
```


## Usage

All events and methods on the WebView element are proxied through react.  You
find the documentation on these events and methods [here](http://electron.atom.io/docs/api/web-view-tag/)

```
const WebView = require('react-electron-web-view');

<WebView src="https://www.google.com" />
```

### Properties

In addition to the documented Electron WebView properties we have a few extra
ones

* `className` String - Sets the className of the WebView element
* `style` Object - Sets the style of the **wrapping** div element.
* `muted` Boolean - Sets the muted state of the webContents
* `devtools` Boolean - `true` if the devtools should be open, `false` otherwise

### Notes

Behind the scenes this renders a div and the **unsafely** sets the innerHTML of
that div to be a webview element.  This hasn't been completely tested so make
sure it works for you.


## Development (`src`, `lib` and the build process)

**NOTE:** The source code for the component is in `src`. A transpiled CommonJS version (generated with Babel) is available in `lib` for use with node.js, browserify and webpack. 

## License

MIT

Copyright (c) 2016 Samuel Attard.
