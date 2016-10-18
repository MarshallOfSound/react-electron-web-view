# Electron WebView

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

**NOTE:** The source code for the component is in `src`. A transpiled CommonJS version (generated with Babel) is available in `lib` for use with node.js, browserify and webpack. A UMD bundle is also built to `dist`, which can be included without the need for any build system.

To build, watch and serve the examples (which will also watch the component source), run `npm start`. If you just want to watch changes to `src` and rebuild `lib`, run `npm run watch` (this is useful if you are working with `npm link`).

## License

MIT

Copyright (c) 2016 Samuel Attard.
