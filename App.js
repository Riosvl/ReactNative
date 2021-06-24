import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Navbar from './src/Navbar/Navbar';
import Developer from './src/Developer/Developer'
import {CreateDeveloper} from "./src/CreateDeveloper/CreateDeveloper";
export default function App() {


  const [developers, setDevelopers] = useState([
    {id: 0, name: 'Vlad'},
    {id: 1, name:'Ruslan'}
  ])

  const addDeveloper = (developer) => {
      setDevelopers([
      ...developers, developer
    ])
  }


  return (
    <View>
      <Navbar customStyle={styles.navbarStyle}/>
      <View style={styles.developerStyle}><Text style={styles.h1Style}>Developer List:</Text></View>
      <Developer value={developers} customStyle={styles.developerStyle}/>
      <CreateDeveloper onSubmit={addDeveloper} />
      <View style={styles.container}>
        <View>
          <Text style={styles.text}>Люблю, целую</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#000',
  },
  navbarStyle: {
    height: 55,
    backgroundColor: '#3949ab',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  developerStyle: {
    alignItems: 'center',
    display: 'flex',
    padding: '3%'
  },
  h1Style: {
    fontWeight: 'bold',
    fontSize: 20
  }
});
