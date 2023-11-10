import React from "react";
import { View, Text } from "react-native";

const RowText = (props) => {
  const {
    messageOne,
    messageTwo,
    containerStyle,
    messageOneStyles,
    messageTwoStyles,
  } = props;
  return (
    <View style={containerStyle}>
      <Text style={messageOneStyles}>{messageOne}</Text>
      <Text style={messageTwoStyles}>{messageTwo}</Text>
    </View>
  );
};

export default RowText;
