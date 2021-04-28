import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

const AboutUsScreen = () => {
  return (
    <View>
      <Text style={styles.headingStyle}>About Us</Text>
      <Text style={styles.textStyle}>
        Climate change is the ultimate effect of large carbon footprints.
        Problems that effect sustainability don't need to be restricted to large
        companies, in one way or another we all contribute to it. So it is
        important that at an individual level we must keep a track and monitor
        our lifestyle.{'\n'}
        {'\n'}
        Chaitanya is a carbon footprint monitoring application that allows you
        to track your overall carbon footprint generated through everyday
        activities and suggest actions that can be taken to reduce your produced
        totals.
      </Text>
      <Image
        style={styles.imageStyle}
        source={require('../images/Chaitanya.gif')}
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
    width: 400,
    alignSelf: 'center',
  },
});

export default AboutUsScreen;
