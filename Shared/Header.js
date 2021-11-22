import React from "react";
import { StyleSheet, View, Text } from "react-native";
import {MaterialIcons} from '@expo/vector-icons';

function Header(props) {
  //Navigate to the respective page
  const onPress = () =>{
   if(props.title == 'LOCATIONS'){
      props.navigation.navigate('Locations')
    }else{
      props.navigation.navigate('MainScreen')
    }
  }

  return (
    <View style={styles.header}>
      <MaterialIcons name={props.backarrow} onPress={onPress} style={styles.icon1} />
      <MaterialIcons name='menu' onPress={()=>props.navigation.openDrawer()} style={props.style || styles.icon2}/>
      <Text style={styles.title}>{props.title}</Text>
      <MaterialIcons name={props.rightIcon} onPress={() => props.setModalVisible(true)} style={styles.icon3}/>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    backgroundColor: "rgba(65,65,66,1)",
    height: 65,
    alignItems: "center",
    justifyContent: "center"
  },
  title: {
    fontFamily: "open-sans-700",
    color: "rgba(255,255,255,1)",
    fontSize: 30,
    textAlign: "center",
  },
  icon1: {
    color: "rgba(255,255,255,1)",
    fontSize: 35,
    position: 'absolute',
    left: 5
  },
  icon2: {
    color: "rgba(255,255,255,1)",
    fontSize: 32,
    position: 'absolute',
    left: 15
  },
  icon3: {
    color: "rgba(255,255,255,1)",
    fontSize: 30,
    position: 'absolute',
    right: 15
  },
});

export default Header;