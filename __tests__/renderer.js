import React from 'react';
import commonTests from './common';
import App from '../sample/App';
import rocket, {
  Component,
  Steps,
  Assert,
} from '../index';

beforeEach(() => {
  rocket.configure({
    driver: 'renderer',
    app: <App />
  });
});

commonTests();

it('allows custom components to return other components', async () => {
  class CustomAssertion extends Component {
    test() {
      return <Assert testID="message" text={this.props.text} />
    }
  }

  await rocket.test(
    <Steps>
      <CustomAssertion text="Loading" />
      <CustomAssertion text="Hello World" />
    </Steps>
  );
});
