import enzyme from './enzyme';
import appium from './appium';

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

  assert(options) {
    return waitFor(() => {
      return this.driver.findByTestID(options.testID).text().then(actual => {
        expect(actual).toEqual(options.text)
      });
    });
  }
}

const drivers = { enzyme, appium };
const init = (options) => {
  return new DriverDelegator(
    drivers[options.driver].init(options)
  );
}

export default {
  init,
}
