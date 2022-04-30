import { StyleSheet, Text, View } from 'react-native';

export const ForeGround = ({ children }) => {
  return (
    <View style={styles.container}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
    zIdnex: 1,

    justifyContent: 'center',
    alignItems: 'center',
  },
});
