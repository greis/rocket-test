import Component from './Component';

class Log extends Component {
  test() {
    const { driver } = this.context;
    return driver.log();
  }
}

export default Log;
