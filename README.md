# Electron WebView

[![npm version](https://badge.fury.io/js/@luxbit%2Freact-electron-webview.svg)](https://badge.fury.io/js/@luxbit%2Freact-electron-webview)

__A simple wrapper of the Electron WebView element to allow it's magical props in React__


This repo is a fork of [react-electron-web-view](https://github.com/MarshallOfSound/react-electron-web-view) 

## Installation

The easiest way to use react-electron-webview is to install it from NPM and `require` or `import` it in your Electron application.


```
npm install @luxbit/react-electron-webview --save
```

Or for the hipsters out there

```
yarn add @luxbit/react-electron-webview
```


## Usage

All events and methods on the WebView element are proxied through react.  You
find the documentation on these events and methods [here](https://www.electronjs.org/docs/api/webview-tag)

```
const WebView = require('@luxbit/react-electron-webview');

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
