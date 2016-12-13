import rocket from '../rocket';
import Test from './Test';

class Assert extends Test {
  test() {
    const { driver } = this.context;
    return driver.assert(this.props);
  }
}

export default Assert;
