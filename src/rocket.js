import drivers from './drivers';
require('react-native-mock/mock');

const configure = (options) => {
  this.driver = drivers.init(options);
}

const test = (component) => {
  return this.driver.startSession()
    .then(() => testComponent(component))
    .finally(() => this.driver.endSession())
}

const testComponent = (component) => {
  const context = { driver: this.driver };
  const instance = new component.type(component.props, context);
  return instance.test();
}

export default {
  test,
  testComponent,
  configure,
}
