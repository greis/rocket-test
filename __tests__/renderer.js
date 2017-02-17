import React from 'react';
import commonTests from './common';
import App from '../sample/App';
import rocket, {
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
  const CustomAssertion = ({props}) => {
    return <Assert testID="message" text={props.text} />
  }

  await rocket.test(
    <Steps>
      <CustomAssertion text="Loading" />
      <CustomAssertion text="Hello World" />
    </Steps>
  );
});
