import Component from './Component';
import rocket from '../rocket';

class Steps extends Component {
  test() {
    const { props, context } = this;
    const children = Array.isArray(props.children) ? props.children : [props.children];
    return children.reduce((promise, child) => {
      const step = new child.type(child.props, context);
      return promise.then(() => {
        const result = step.test();
        if (result.$$typeof === Symbol.for('react.element')) {
          return rocket.testComponent(result);
        } else {
          return result;
        }
      });
    }, Promise.resolve());
  }
}

export default Steps;
