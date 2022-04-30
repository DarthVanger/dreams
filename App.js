import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Background } from './Background';

import { colors } from './theme';

export default function App() {
  return (
    <View style={styles.container}>

      <Background />

      <Text style={{color: 'white'}}>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
  },
});
