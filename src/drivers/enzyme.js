import { mount } from 'enzyme';

const init = (options) => {
  return mount(options.app);
};

export default {
  init,
};
