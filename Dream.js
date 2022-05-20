import { StyleSheet, Text, TextInput, View } from 'react-native';
import { CardGradient } from './CardGradient';

export const Dream = ({ dream }) => {
  const handleChange = (event) => {
   
  };

  return (
    <View style={styles.container}>
      <CardGradient />
      <TextInput
        style={styles.text}
        value={dream}
        onChange={handleChange}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
  },
  text: {
    //width: '40%',
    //flexBasis: '40%',
    border: '2px solid pink',
    //height: '20%',
    //overflow: 'hidden',
    color: 'white',
    padding: '1em',
    borderRadius: '10px',
    fontWeight: 'bold',
    letterSpacing: '2px',
    fontFamily: 'lucida grande',
    fontSize: '2em',
    width: '100%',
  }
});
