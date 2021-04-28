import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

const InsightsScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.imageStyle}
        source={require('../images/insightsimage.png')}
      />
      <Text style={styles.headingStyle}>Insights</Text>
      <Text style={styles.textStyle}>A guide to sustainable life</Text>
      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => navigation.navigate('SaveEnergy')}>
        <Text style={styles.buttonTextStyle}>Save Energy</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => navigation.navigate('EatLessMeat')}>
        <Text style={styles.buttonTextStyle}>Eat less meat</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => navigation.navigate('DriveLess')}>
        <Text style={styles.buttonTextStyle}>Drive Less</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => navigation.navigate('RenewableAlternatives')}>
        <Text style={styles.buttonTextStyle}>Use Reusable alternatives</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
  },
  headingStyle: {
    fontSize: 40,
    alignSelf: 'center',
    fontWeight: 'bold',
    color: 'black',
    letterSpacing: 1.5,
    marginBottom: -10,
  },
  textStyle: {
    fontSize: 16,
    alignSelf: 'center',
    color: 'black',
  },
  imageStyle: {
    height: 300,
    width: 330,
    alignSelf: 'center',
  },
  buttonStyle: {
    height: 50,
    backgroundColor: 'white',
    elevation: 8,
    paddingLeft: 20,
    borderRadius: 15,
    justifyContent: 'center',
    marginLeft: 10,
    marginRight: 10,
    borderColor: '#7ed957',
    borderWidth: 2,
  },
  buttonTextStyle: {
    fontSize: 18,
    color: '#008037',
  },
});

export default InsightsScreen;
