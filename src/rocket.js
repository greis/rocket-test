import drivers from './drivers';
require('react-native-mock/mock');

const MAX_TIMEOUT = 1000;
const WAIT_TIME = 100;

const configure = (options) => {
  this.driver = drivers[options.driver].init(options);
}

const test = (component) => {
  const context = { driver: this.driver };
  const instance = new component.type(component.props, context);
  return instance.test();
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
