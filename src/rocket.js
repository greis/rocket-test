import drivers from './drivers';

const configure = (options) => {
  this.driver = drivers.init(options);
}

const test = (component) => {
  return this.driver.startSession()
    .then(() => testComponent(component))
    .finally(() => this.driver.endSession())
}

const testComponent = (component) => {
  return component.type({props: component.props, driver: this.driver});
}

export default {
  test,
  testComponent,
  configure,
}
