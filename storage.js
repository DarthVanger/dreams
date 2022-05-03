import AsyncStorage from '@react-native-community/async-storage';

const key = 'dreams';

export const saveDreams = async (dreams) => {
  return await AsyncStorage.setItem(key, dreams)
}

export const loadDreams = async () => {
  const value = await AsyncStorage.getItem(key);
  console.log(value);
  return value;
};
