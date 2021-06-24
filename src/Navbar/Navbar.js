import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Navbar = (props) => {
  return(
    <View style={props.customStyle}>
      <Text>It's an App</Text>
    </View>
  );
}
export default Navbar;