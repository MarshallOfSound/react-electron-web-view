import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import camelCase from 'lodash.camelcase';
import { changableProps, events, methods, props } from './constants';

export default class ElectronWebView extends Component {
  componentDidMount() {
    const container = ReactDOM.findDOMNode(this.c);
    let propString = '';
    Object.keys(props).forEach((propName) => {
      if (typeof this.props[propName] !== 'undefined') {
        if (typeof this.props[propName] === 'boolean') {
          propString += `${propName}="${this.props[propName] ? 'on' : 'off'}" `;
        } else {
          propString += `${propName}=${JSON.stringify(this.props[propName].toString())} `;
        }
      }
    });
    if (this.props.className) {
      propString += `class="${this.props.className}" `;
    }
    container.innerHTML = `<webview ${propString}/>`;
    this.view = container.querySelector('webview');

    this.ready = false;
    this.view.addEventListener('did-attach', (...attachArgs) => {
      this.ready = true;
      events.forEach((event) => {
        this.view.addEventListener(event, (...eventArgs) => {
          const propName = camelCase(`on-${event}`);
          // console.log('Firing event: ', propName, ' has listener: ', !!this.props[propName]);
          if (this.props[propName]) this.props[propName](...eventArgs);
        });
      });
      if (this.props.onDidAttach) this.props.onDidAttach(...attachArgs);
    });

    methods.forEach((method) => {
      this[method] = (...args) => {
        if (!this.ready) {
          throw new Error('WebView is not ready yet, you can\'t call this method');
        }
        return this.view[method](...args);
      };
    });
    this.setDevTools = (open) => {
      if (open && !this.isDevToolsOpened()) {
        this.openDevTools();
      } else if (!open && this.isDevToolsOpened()) {
        this.closeDevTools();
      }
    };
  }

  componentDidUpdate(prevProps) {
    Object.keys(changableProps).forEach((propName) => {
      if (this.props[propName] !== prevProps[propName]) {
        if (changableProps[propName] === '__USE_ATTR__') {
          this.view.setAttribute(propName, this.props[propName]);
        } else {
          this[changableProps[propName]](this.props[propName]);
        }
      }
    });
  }

  isReady() {
    return this.ready;
  }

  render() {
    return <div ref={(c) => { this.c = c; }} style={this.props.style || {}} />;
  }
}

ElectronWebView.propTypes = Object.assign({
  className: PropTypes.string,
  style: PropTypes.object,
}, props);

events.forEach((event) => {
  ElectronWebView.propTypes[camelCase(`on-${event}`)] = PropTypes.func;
});
