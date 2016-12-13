import { mount } from 'enzyme';
require('react-native-mock/mock');

const MAX_TIMEOUT = 1000;
const WAIT_TIME = 100;

const configure = (options) => {
  this.options = options;
}

const test = (component) => {
  const wrapper = mount(this.options.app);
  const context = { wrapper };
  const c = new component.type(component.props, context);
  return c.test();
}

const waitFor = (expression) => {
  return new Promise((resolve, reject) => {
    const check = (elapsedTime) => {
      try {
        expression();
        resolve();
      } catch(e) {
        if (elapsedTime >= MAX_TIMEOUT) {
          reject(e);
        } else {
          setTimeout(() => {
            check(elapsedTime + WAIT_TIME);
          }, WAIT_TIME);
        }
      }
    };
    check(0);
  });
}

export default {
  test,
  waitFor,
  configure,
}
