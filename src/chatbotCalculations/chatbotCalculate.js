import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {emissionTransport} from './chatbotTransport';
import {emissionFood} from './chatbotFood';
import {emissionStreaming} from './chatbotStreaming';
import {emissionElectricity} from './chatbotElectricity';

var totalCF = 0;
const ChatbotCalculations = () => {
  console.log(emissionTransport);
  console.log(emissionFood);
  console.log(emissionStreaming);
  console.log(emissionElectricity);

  totalCF = (
    parseFloat(emissionTransport) +
    parseFloat(emissionFood) +
    parseFloat(emissionStreaming) +
    parseFloat(emissionElectricity)
  ).toFixed(2);
  return (
    <View>
      <Text style={styles.textoutput}>Total emissions = {totalCF} kgCO2eq</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textoutput: {
    fontSize: 16,
    fontWeight: '600',
  },
});

export {totalCF};
export default ChatbotCalculations;
