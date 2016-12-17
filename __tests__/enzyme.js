import React from 'react';

import rocket, {
  Component,
  Steps,
  Assert,
} from '../src';

import App from '../sample/App';

beforeEach(() => {
  rocket.configure({
    driver: 'enzyme',
    app: <App />
  });
});

it('waits for async calls', async () => {
  await rocket.test(
    <Steps>
      <Assert testID="message" text="Loading" />
      <Assert testID="message" text="Hello World" />
    </Steps>
  );
});

it('fails test', async () => {
  await rocket.test(
    <Steps>
      <Assert testID="message" text="Not Loading" />
    </Steps>
  ).catch(error => {
    expect(error.toString()).toContain('Hello World')
  });
});

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
