import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { colors } from './theme';

export const AddDream = ({ onPress }) => {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={onPress}
    >
      <Text style={styles.text}>+</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    alignSelf: 'flex-end',
    margin: '1rem',
    padding: '2rem',
    borderRadius: '50%',
    backgroundColor: colors.primary.action,
    width: '8rem',
    height: '8rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: '5rem',
    color: 'white',
  }
});
