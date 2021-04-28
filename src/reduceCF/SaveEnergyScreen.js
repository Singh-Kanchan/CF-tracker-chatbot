import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

const SaveEnergyScreen = () => {
  return (
    <View>
      <Text style={styles.headingStyle}>Save Energy</Text>
      <Text style={styles.textStyle}>
        By using less energy, you can help to reduce carbon emissions. There are
        a number of ways you can save energy at home, including switching off
        standby applications, turning your heating down and hanging clothes to
        dry instead of using a dryer.
      </Text>
      <Image
        style={styles.imageStyle}
        source={require('../images/saveenergyimage.jpg')}
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
    height: 400,
    width: 400,
    alignSelf: 'center',
  },
});

export default SaveEnergyScreen;
