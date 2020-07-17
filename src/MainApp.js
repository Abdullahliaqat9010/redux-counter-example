// MainApp.js
import React from "react";
import { View, Text, Button } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import {
  increment_counter,
  decrement_counter,
} from "../redux/actions/counter_actions";
const MainApp = () => {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Button title="increase" onPress={() => dispatch(increment_counter())} />
      <Text>{counter}</Text>
      <Button title="decrease" onPress={() => dispatch(decrement_counter())} />
    </View>
  );
};
export default MainApp;
