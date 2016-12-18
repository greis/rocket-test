import renderer from 'react-test-renderer';
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
      this.tree = renderer.create(this.options.app)
      resolve();
    });
  }

  source() {
    return new Promise(resolve => {
      resolve(JSON.stringify(this.tree.toJSON(), null, 2));
    });
  }

  endSession() {
  }

  findByTestID(id) {
    return new Element(this.findByProp('testID', id));
  }

  findByProp(prop, value) {
    let element;
    const find = (parent) => {
      if (parent && parent.props && parent.props[prop] === value) {
        element = parent;
      } else if (!element && parent && parent.children) {
        parent.children.forEach(find);
      }
    }
    find(this.tree.toJSON());
    return element;
  }
}

class Element {
  constructor(element) {
    this.element = element;
  }

  text() {
    return new Promise((resolve, reject) => {
      if (this.element.children && this.element.children[0]) {
        resolve(this.element.children[0]);
      } else {
        reject('text not found');
      }
    })
  }

  press() {
    return new Promise((resolve, reject) => {
      if (this.element.props.onPress) {
        this.element.props.onPress();
        resolve();
      } else {
        reject('onPress not found');
      }
    })
  }
}

export default {
  init,
};
