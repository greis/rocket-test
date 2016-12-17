import Component from './Component';

class Assert extends Component {
  test() {
    const { driver } = this.context;
    return driver.assert(this.props);
  }
}

export default Assert;
