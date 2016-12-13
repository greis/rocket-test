import { Text } from 'react-native';
import React from 'react';

jest.mock('Text', () => 'Text');

import {
  rocket,
  Test,
  Steps,
  Assert,
} from '../src';

class App extends React.Component {
  state = {
    message: 'Loading',
  }

  render() {
    return <Text>
      {this.state.message}
    </Text>
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        message: 'Hello World'
      });
    }, 100);
  }
}

beforeEach(() => {
  rocket.configure({
    app: <App />
  });
});

it('waits for async calls', async () => {
  await rocket.test(
    <Steps>
      <Assert selector="Text" text="Loading" />
      <Assert selector="Text" text="Hello World" />
    </Steps>
  );
});

it('allows custom components to return other components', async () => {
  class CustomAssertion extends Test {
    test() {
      return <Assert selector="Text" text={this.props.text} />
    }
  }

  await rocket.test(
    <Steps>
      <CustomAssertion text="Loading" />
      <CustomAssertion text="Hello World" />
    </Steps>
  );
});
