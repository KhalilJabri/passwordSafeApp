import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { primaryColor } from "../constants/colors";

const UrlItem = (props) => {
  return (
    <TouchableOpacity onPress={props.selected}
      style={[styles.container, 
        { backgroundColor: props.number === props.index ? primaryColor : "#e6e6e6" }]}>
      <Text
        style={[
          styles.text,
          { color: props.number === props.index ? "white" : "#252525" },
        ]}>
        {props.name}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: Dimensions.get("window").width / 65,
    paddingHorizontal: Dimensions.get("window").width / 45,
    paddingVertical: Dimensions.get("window").height / 45,
    borderRadius: 15,
  },
  text: {
    fontSize: Dimensions.get("window").width / 30,
  },
});

export default UrlItem;
