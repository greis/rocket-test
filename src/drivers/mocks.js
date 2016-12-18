import ReactInstrumentation from 'react-dom/lib/ReactInstrumentation'
import ReactDOMUnknownPropertyHook from 'react-dom/lib/ReactDOMUnknownPropertyHook';
ReactInstrumentation.debugTool.removeHook(ReactDOMUnknownPropertyHook);

[
  'View',
  'TouchableOpacity',
  'Text'
].forEach(component => {
  jest.mock(component, () => component);
});
