import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Background } from './Background';
import { Image } from 'react-native';

import { colors } from './theme';

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={require('./assets/restly.png')} style={styles.image} />

      <Background />

      <Text style={{color: 'white'}}>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    //flexDirecton: 'row',
    justifyContent: 'center',
  },
  image: {
    width: '200px',
    height: '200px',
    alignSelf: 'center',
    position: 'absolute',
    zIndex: 1,
    opacity: 1,
  }
});
