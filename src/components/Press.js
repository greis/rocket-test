import Component from './Component';

class Press extends Component {
  test() {
    const { driver } = this.context;
    return driver.press(this.props);
  }
}

export default Press;
