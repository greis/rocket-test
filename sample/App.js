import { Text } from 'react-native';
import React from 'react';

class App extends React.Component {
  state = {
    message: 'Loading',
  }

  render() {
    return <Text testID="hello">
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

export default App;
