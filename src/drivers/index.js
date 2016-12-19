const MAX_TIMEOUT = 1000;
const WAIT_TIME = 100;

const waitFor = (expression) => {
  return new Promise((resolve, reject) => {
    const check = (elapsedTime) => {
      expression().then(() => resolve()).catch(e => {
        if (elapsedTime >= MAX_TIMEOUT) {
          reject(e);
        } else {
          setTimeout(() => {
            check(elapsedTime + WAIT_TIME);
          }, WAIT_TIME);
        }
      })
    }
    check(0);
  });
}

class DriverDelegator {
  constructor(driver) {
    this.driver = driver;
  }

  startSession() {
    return this.driver.startSession();
  }

  endSession() {
    return this.driver.endSession();
  }

  log() {
    return this.driver.source().then(source => {
      console.log(source)
    });
  }

  assert(options) {
    return waitFor(() => {
      return this.find(options).text().then(actual => {
        expect(actual).toEqual(options.text)
      });
    });
  }

  press(options) {
    return this.find(options).press();
  }

  find(options) {
    return this.driver.findByTestID(options.testID);
  }
}

const drivers = {
  renderer: './renderer',
  appium: './appium'
};
const init = (options) => {
  const driverFile = drivers[options.driver] || drivers['renderer']
  const driver = require(driverFile).default;
  return new DriverDelegator(
    driver.init(options)
  );
}

export default {
  init,
}
