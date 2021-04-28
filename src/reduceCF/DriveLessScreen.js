import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

const DriveLessScreen = () => {
  return (
    <View>
      <Text style={styles.headingStyle}>Drive Less</Text>
      <Text style={styles.textStyle}>
        Public transportation significantly reduces the number of cars on the
        road. This means less pollution from motor vehicle emissions. Fumes
        produced by vehicles can lead to respiratory diseases. Few cars on the
        road mean a reduction in the possibility of these dangerous diseases. A
        clean environment boosts living standards and brings immense benefits to
        the economy. {'\n'}Walk or ride a bike to your destination instead of
        driving if it's clos enough - it's better for the environment and your
        health. Using public transport is another good way to help reduce
        greenhouse gas emissions.
      </Text>
      <Image
        style={styles.imageStyle}
        source={require('../images/drivelessimage.jpg')}
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
    color: 'black',
    lineHeight: 24,
  },
  imageStyle: {
    height: 258,
    width: 450,
    alignSelf: 'center',
  },
});

export default DriveLessScreen;
