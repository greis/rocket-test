import React from 'react';

import rocket, {
  Steps,
  Assert,
  Press,
} from '../src';

it('passes', () => {});

export default function commonTests() {
  it('waits for async calls', async () => {
    await rocket.test(
      <Steps>
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

  it('allows press event', async () => {
    await rocket.test(
      <Steps>
        <Assert testID="message" text="Hello World" />
        <Press testID="button" />
        <Assert testID="message" text="Clicked!" />
      </Steps>
    );
  });
}
