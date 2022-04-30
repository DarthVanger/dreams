
import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, Text, View } from 'react-native';

import { colors } from './theme';

export const CardGradient = () => (
  <LinearGradient
    colors={[
      'rgba(127, 127, 213, 0.2)',
      'rgba(134, 168, 231, 0.2)',
      'rgba(145, 234, 228, 0.2)'
    ]}
    start={[0, 0, 0]}
    end={[1, 1, 1]}
    location={[0.19, 0.58, 0.97]}
    style={styles.background}
  />
);


const styles = StyleSheet.create({
  background: {
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
    zIndex: -1,
    flexGrow: 1,
  },
});
