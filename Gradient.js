import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, Text, View } from 'react-native';

import { colors } from './theme';

export const Gradient = () => (
  <LinearGradient
    colors={[colors.primary.main, colors.secondary.main]}
    start={[0, 0]}
    end={[1, 1]}
    location={[0.25, 0.4, 1]}
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
