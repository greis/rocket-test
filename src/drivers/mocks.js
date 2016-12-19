[
  'View',
  'TouchableOpacity',
  'Text'
].forEach(component => {
  jest.mock(component, () => component);
});
