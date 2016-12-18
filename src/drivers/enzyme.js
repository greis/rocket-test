import { mount } from 'enzyme';
require('./mocks');

const init = (options) => {
  return new Driver(options);
};

class Driver {
  constructor(options) {
    this.options = options;
  }

  startSession() {
    return new Promise(resolve => {
      this.wrapper = mount(this.options.app);
      resolve();
    });
  }

  endSession() {
    this.wrapper.unmount();
  }

  findByTestID(id) {
    return new Element(this.wrapper.find({testID: id}));
  }
}

class Element {
  constructor(element) {
    this.element = element;
  }

  text() {
    return new Promise(resolve => {
      resolve(this.element.text());
    })
  }

  press() {
    return new Promise((resolve, reject) => {
      if (this.element.props().onPress) {
        resolve(this.element.props().onPress());
      } else {
        resolve();
      }
    })
  }
}

export default {
  init,
};
