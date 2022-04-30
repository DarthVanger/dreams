import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Background } from './Background';
import { ForeGround } from './ForeGround';
import { Dreams } from './Dreams';

import { colors } from './theme';

export default function App() {
  return (
    <View style={styles.container}>

      <Background />
      <ForeGround>
        <Dreams />
        <Text style={styles.text}>
          Welcome to your dreams :)
        </Text>
      </ForeGround>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    padding: '1em',
    borderRadius: '10px',
    fontWeight: 'bold',
    fontSize: '2.5em',

  },
});
