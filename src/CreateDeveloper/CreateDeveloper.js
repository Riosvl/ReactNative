import React from 'react'
import {View, StyleSheet, TextInput, Button} from 'react-native'

export const CreateDeveloper = ({onSubmit}) => {

  const pressHandler = () => {
    onSubmit({
      name: 'Egor',
      id: Date.now().toString()
    })
  }
  return(
    <View style={styles.block}>
      <TextInput style={styles.input}/>
      <Button title={'Add developer'} onPress={pressHandler}/>
    </View>
  )
}

const styles= StyleSheet.create({
  block: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  input: {
    width: '65%',
    borderStyle: 'solid',
    borderWidth: 2,
    borderColor: '#000'
  }
})