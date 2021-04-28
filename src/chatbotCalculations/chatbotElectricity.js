import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import {Text, View, StyleSheet} from 'react-native';
import {electricity} from 'carbon-footprint';

var emissionElectricity = 0;
const ChatbotElectricity = (props) => {
  const [state, setState] = useState({electricitykwh: 0});

  useEffect(() => {
    const {steps} = props;
    const {electricitykwh} = steps;
    setState({electricitykwh});
  }, [props]);

  const {electricitykwh} = state;
  //console.log(electricitykwh.value);

  if (electricitykwh.value !== undefined) {
    emissionElectricity = (
      electricitykwh.value *
      electricity['world'] *
      3.6 *
      Math.pow(10, 6)
    ).toFixed(2);
    //console.log(emissionElectricity);
  }
  return (
    <View>
      <Text style={styles.textoutput}>
        Electricity emission = {emissionElectricity} kgCO2eq
      </Text>
    </View>
  );
};

ChatbotElectricity.propTypes = {
  steps: PropTypes.object,
};

ChatbotElectricity.defaultProps = {
  steps: undefined,
};

const styles = StyleSheet.create({
  textoutput: {
    fontSize: 16,
    fontWeight: '600',
  },
});

export {emissionElectricity};
export default ChatbotElectricity;
