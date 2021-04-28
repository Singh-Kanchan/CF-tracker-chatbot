import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import {Text, View, StyleSheet} from 'react-native';
import {food} from 'carbon-footprint';

var emissionFood = 0;
const ChatbotFood = (props) => {
  const [state, setState] = useState({foodType: '', foodQuantity: 0});

  useEffect(() => {
    const {steps} = props;
    const {foodType, foodQuantity} = steps;
    setState({foodType, foodQuantity});
  }, [props]);

  const {foodType, foodQuantity} = state;
  //console.log(foodType.value);
  //console.log(foodQuantity.value);

  if (foodType.value !== undefined) {
    emissionFood = ((foodQuantity.value * food[foodType.value]) / 1000).toFixed(
      2,
    );
    //console.log(emissionFood);
  }
  return (
    <View>
      <Text style={styles.textoutput}>
        Food emission = {emissionFood} kgCO2eq
      </Text>
    </View>
  );
};

ChatbotFood.propTypes = {
  steps: PropTypes.object,
};

ChatbotFood.defaultProps = {
  steps: undefined,
};

const styles = StyleSheet.create({
  textoutput: {
    fontSize: 16,
    fontWeight: '600',
  },
});

export {emissionFood};
export default ChatbotFood;
