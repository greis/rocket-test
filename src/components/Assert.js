import rocket from '../rocket';
import Test from './Test';

class Assert extends Test {
  test() {
    const { wrapper } = this.context;
    const { text, selector } = this.props;
    return rocket.waitFor(() => {
      expect(wrapper.find(selector).text()).toEqual(text)
    });
  }
}

export default Assert;