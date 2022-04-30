import { StyleSheet, Text, View } from 'react-native';

export const Dream = ({ dream }) => {
  console.log('dream: ', dream);
  return (
    <View style={styles.container}>
      <>dream</>
    </View>
  );
};

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
