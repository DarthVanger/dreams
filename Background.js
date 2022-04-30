import { StyleSheet, Text, View } from 'react-native';
import { Gradient } from './Gradient';
import { Mountain } from './Mountain';
import { colors } from './theme';

export const Background = () => (
  <View style={styles.container}>
    <Mountain style={styles.mountain}  />
    <Gradient  />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
    zIdnex: -1,
  },
  mountain: {
    opacity: 0.5,

    alignSelf: 'flex-start',
    flexGrow: 1,
  },
});
