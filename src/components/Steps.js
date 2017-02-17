import rocket from '../rocket';

const Steps = ({props}) => {
  const children = Array.isArray(props.children) ? props.children : [props.children];
  return children.reduce((promise, child) => {
    return promise.then(() => {
      const result = rocket.testComponent(child);
      if (result.$$typeof === Symbol.for('react.element')) {
        return rocket.testComponent(result);
      } else {
        return result;
      }
    });
  }, Promise.resolve());
}

export default Steps;
