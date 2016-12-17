import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import React from 'react';

class App extends React.Component {
  state = {
    message: 'Loading',
  }

  render() {
    return <View style={styles.container}>
      <Text testID="message">
        {this.state.message}
      </Text>
      <TouchableOpacity testID="button"
        onPress={() => {this.setState({message: 'Clicked!'})}}>
        <Text>Click me</Text>
      </TouchableOpacity>
    </View>
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        message: 'Hello World'
      });
    }, 100);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default App;
