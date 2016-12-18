import rocket from '../index';
import commonTests from './common';

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

commonTests();
