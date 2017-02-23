const mockComponent = require('react-native/jest/mockComponent');

[
  'TouchableOpacity',
].forEach(component => {
  jest.mock(component, () => mockComponent(component));
});
