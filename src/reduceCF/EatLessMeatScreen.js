import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

const EatLessMeatScreen = () => {
  return (
    <View>
      <Text style={styles.headingStyle}>Eat Less Meat</Text>
      <Text style={styles.textStyle}>
        "Save the planet" is the battle cry of the younger generations, worried
        about climate change. Whoever would've said that this challenge can be
        overcome by changing our eating habits, consciously choosing what we eat
        everyday. Reducing the consumption of meat (especially red meat) and
        favoring a diet rich in legumes, vegetables and fruit is one of the main
        actions to be taken in order to limit the damage caused by global
        warming and try to solve this difficult condition facing the Earth.
      </Text>
      <Image
        style={styles.imageStyle}
        source={require('../images/eatlessmeatimage.jpg')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  headingStyle: {
    paddingTop: 20,
    fontSize: 40,
    alignSelf: 'center',
    fontWeight: 'bold',
    color: 'black',
    letterSpacing: 1.5,
    paddingLeft: 15,
  },
  textStyle: {
    fontSize: 16,
    paddingTop: 15,
    paddingLeft: 15,
    paddingRight: 15,
    paddingBottom: 15,
    color: 'black',
    lineHeight: 24,
  },
  imageStyle: {
    height: 350,
    width: 400,
    alignSelf: 'center',
  },
});

export default EatLessMeatScreen;
