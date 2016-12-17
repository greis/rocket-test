import wd from 'yiewd';

const init = (options) => {
  return new Driver(options);
};

class Driver {
  constructor(options) {
    this.options = options;
    this.driver = wd.remote(
      options.host,
      options.port,
      options.username,
      options.password
    );
  }

  startSession() {
    return this.driver.init(this.options.capabilities);
  }

  endSession() {
    this.driver.quit();
  }

  findByTestID(id) {
    return new Element(this.driver.elementByName(id));
  }
}

class Element {
  constructor(element) {
    this.element = element;
  }

  text() {
    return this.element.text();
  }

  press() {
    return this.element.click();
  }
}

export default {
  init,
};
