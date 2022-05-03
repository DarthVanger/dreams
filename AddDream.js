import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { colors } from './theme';
import Ionicons from '@expo/vector-icons/Ionicons';

export const AddDream = ({ onPress }) => {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={onPress}
    >
      <Text style={styles.text}>
        <Ionicons name="add-circle-outline" size={72 + 24} style={styles.button} />
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    alignSelf: 'flex-end',
    color: colors.primary.action,
  },
});
