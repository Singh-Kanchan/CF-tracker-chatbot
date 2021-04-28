import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

const RenewableAlternativesScreen = () => {
  return (
    <View>
      <Text style={styles.headingStyle}>Use Renewable Alternatives</Text>
      <Text style={styles.textStyle}>
        Single-use products, particularly plastic ones tend to end up in
        landfill and the ocean, causing harm to wildlife and the environment.
        Prevent this by choosing to use reusable and eco-friendly alternatives
        instead. {'\n'}
        {'\n'}
        If you start using a reusable bottle, you could prevent the use of more
        than 100 disposable plastic bottles every year, helping to stop so many
        of them from ending up in landfill and the ocean.
      </Text>
      <Image
        style={styles.imageStyle}
        source={require('../images/alternativesimage.jpg')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  headingStyle: {
    paddingTop: 30,
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
    height: 250,
    width: 420,
    alignSelf: 'center',
  },
});

export default RenewableAlternativesScreen;
