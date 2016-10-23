import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';

import WebView from '../';

let target = document.createElement('div');
let options = {
  attachTo: target,
};

describe('WebView element', () => {
  before(() => {
    document.body.appendChild(target);
  });

  after(() => {
    document.body.removeChild(target);
  });

  it('should render a containing div', () => {
    const view = mount(<WebView src="https://www.google.com" />, options);
    expect(view.find('div').length).to.be.equal(1);
    view.unmount();
  });

  it('should throw an error when the WebView is not ready yet', () => {
    const view = mount(<WebView src="https://www.google.com" />, options);
    expect(view.instance().isReady()).to.be.equal(false);
    let error = null;
    try {
      view.instance().getURL();
    } catch (err) {
      error = err;
    }
    expect(error).to.not.be.null;
    view.unmount();
  });

  describe('when ready', () => {
    let view;
    beforeEach((done) => {
      view = mount(<WebView src="https://www.google.com" onDidAttach={() => done()} />, options);
    });

    afterEach(() => {
      view.unmount();
    });

    it('should report as being ready', () => {
      expect(view.instance().isReady()).to.be.equal(true);
    });

    it('should not throw errors when methods are called', () => {
      expect(view.instance().getURL()).to.be.a('string');
    });

    it('should update the muted state when the muted prop changes', () => {
      expect(view.instance().isAudioMuted()).to.be.equal(false);
      view.setProps({ muted: true });
      expect(view.instance().isAudioMuted()).to.be.equal(true);
    });

    describe('when loaded', () => {
      beforeEach((done) => {
        let once = true;
        view.setProps({
          onDidFinishLoad: () => {
            if (!once) return;
            once = false;
            done();
          }
        });
      });

      it('should navigate when the src prop is changed', (done) => {
        const firstURL = view.instance().getURL();
        view.setProps({
          src: 'https://www.facebook.com',
          onDidFinishLoad: () => {
            const secondURL = view.instance().getURL();
            expect(firstURL).to.not.equal(secondURL);
            done();
          }
        });
      });
    });
  });
});
