import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { colors } from './theme';
import { PlusIcon } from './PlusIcon';

export const AddDream = ({ onPress }) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
    >
      <Text style={styles.text}>
        <PlusIcon style={styles.button} />
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
  button: {
    color: colors.primary.action,
  },
});
