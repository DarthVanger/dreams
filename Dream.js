import { useState, useRef, useEffect } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { CardGradient } from './CardGradient';

export const Dream = ({ dream, onChange }) => {
  const [height, setHeight] = useState();
  const textInputRef = useRef(null);

  // https://stackoverflow.com/a/995374/1657101
  const getHeight = (element) => {
    element.style.height = '1px';
    return 10 + element.scrollHeight + 'px';
  }

  const handleChange = (event) => {
    dream.text = event.target.value;
    onChange(dream);
  };

  useEffect(() => {
    const textarea = textInputRef.current;
    textarea && setHeight(getHeight(textarea));
  }, [dream]);

  return (
    <View style={styles.container} key={dream.id}>
      <CardGradient />
      <TextInput
        ref={textInputRef}
        style={[styles.textArea, {height}] }
        value={dream.text}
        onChange={handleChange}
        multiline={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textArea: {
    border: '2px solid pink',
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
