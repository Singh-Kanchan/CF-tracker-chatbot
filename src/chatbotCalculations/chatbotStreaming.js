import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import {Text, View, StyleSheet} from 'react-native';
import {streaming} from 'carbon-footprint';

var emissionStreaming = 0;
const ChatbotStreaming = (props) => {
  const [state, setState] = useState({streamingType: '', streamingDuration: 0});

  useEffect(() => {
    const {steps} = props;
    const {streamingType, streamingDuration} = steps;
    setState({streamingType, streamingDuration});
  }, [props]);

  const {streamingType, streamingDuration} = state;
  //console.log(streamingType.value);
  //console.log(streamingDuration.value);

  if (streamingType.value !== undefined) {
    emissionStreaming = (
      (streamingDuration.value * streaming[streamingType.value]) /
      (60 * 60 * 1000)
    ).toFixed(2);
    //console.log(emissionStreaming);
  }
  return (
    <View>
      <Text style={styles.textoutput}>
        Streaming emission = {emissionStreaming} kgCO2eq
      </Text>
    </View>
  );
};

ChatbotStreaming.propTypes = {
  steps: PropTypes.object,
};

ChatbotStreaming.defaultProps = {
  steps: undefined,
};

const styles = StyleSheet.create({
  textoutput: {
    fontSize: 16,
    fontWeight: '600',
  },
});

export {emissionStreaming};
export default ChatbotStreaming;
