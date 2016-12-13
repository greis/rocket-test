import Test from './Test';

class Steps extends Test {
  test() {
    const { props, context } = this;
    const children = Array.isArray(props.children) ? props.children : [props.children];
    return children.reduce((promise, child) => {
      const step = new child.type(child.props, context);
      return promise.then(() => {
        return step.test();
      });
    }, Promise.resolve());
  }
}

export default Steps;
