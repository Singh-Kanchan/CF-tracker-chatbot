import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import {Text, View, StyleSheet} from 'react-native';
import {transport} from 'carbon-footprint';

var emissionTransport = 0;
const ChatbotTransport = (props) => {
  const [state, setState] = useState({transportType: '', kilometer: 0});

  useEffect(() => {
    const {steps} = props;
    const {transportType, kilometer} = steps;
    setState({transportType, kilometer});
  }, [props]);

  const {transportType, kilometer} = state;
  //console.log(transportType.value);
  //console.log(kilometer.value);

  if (transportType.value !== undefined) {
    emissionTransport = (
      kilometer.value *
      1000 *
      transport[transportType.value]
    ).toFixed(2);
    //console.log(emissionTransport);
  }

  return (
    <View>
      <Text style={styles.textoutput}>
        Transport emission = {emissionTransport} kgCO2eq
      </Text>
    </View>
  );
};

ChatbotTransport.propTypes = {
  steps: PropTypes.object,
};

ChatbotTransport.defaultProps = {
  steps: undefined,
};

const styles = StyleSheet.create({
  textoutput: {
    fontSize: 16,
    fontWeight: '600',
  },
});

export {emissionTransport};
export default ChatbotTransport;
