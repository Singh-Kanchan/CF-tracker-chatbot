import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

const MethodologyScreen = () => {
  return (
    <View>
      <Text style={styles.headingStyle}>Methodology</Text>
      <Text style={styles.textStyle}>
        Carbon footprint is the total set of GHGs emission caused by a product.
        It is often expressed in terms of carbon dioxide equivalent to all GHGs
        emitted.{'\n'}
        {'\n'}A product's carbon footprint can be measured by undertaking a GHG
        emissions assessment.
        {'\n'}
        {'\n'}
        Once the size of a carbon footprint is known, a strategy can be devised
        to reduce it by technological developments, better process and product
        management, and alternate consumption strategies.
      </Text>
      <Image
        style={styles.imageStyle}
        source={require('../images/aboutusimage.png')}
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
    width: 250,
    alignSelf: 'center',
  },
});

export default MethodologyScreen;
