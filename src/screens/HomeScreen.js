import React from 'react';
import {View, Button} from 'react-native';

const HomeScreen = ({navigation}) => {
  return (
    <View>
      <Button title="ChatBot" onPress={() => navigation.navigate('Bot')} />
      <Button title="About Us" onPress={() => navigation.navigate('AboutUs')} />
      <Button
        title="Methodology"
        onPress={() => navigation.navigate('Methodology')}
      />
      <Button
        title="Insights"
        onPress={() => navigation.navigate('Insights')}
      />
    </View>
  );
};

export default HomeScreen;
