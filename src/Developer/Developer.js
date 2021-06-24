import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Developer = ({value, customStyle}) => {


  return(
    <View style={customStyle}>
      {value.map(name => (
       <Text>{name.name}</Text>
          ))}
    </View>
  )

}

export default Developer;