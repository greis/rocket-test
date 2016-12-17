import React from 'react';

import rocket, {
  Steps,
  Assert,
  Press,
} from '../src';

jasmine.DEFAULT_TIMEOUT_INTERVAL = 40000;

beforeEach(() => {
  rocket.configure({
    driver: 'appium',
    host: 'localhost',
    port: 4723,
    capabilities: {
      platformName: 'iOS',
      platformVersion: '10.0',
      deviceName: 'iPhone 6s',
      bundleId: 'org.reactjs.native.example.SampleApp',
      noReset: true,
    },
  });
});

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
