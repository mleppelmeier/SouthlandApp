import React,{ useState } from 'react';
import { SafeAreaView, FlatList, TouchableOpacity, StyleSheet, 
  Text, View, ScrollView, Linking } from 'react-native';
import {MaterialIcons} from '@expo/vector-icons';

import Header from '../Shared/Header';
import { globalStyles } from '../Shared/Global';

export default function Podcasts({navigation})  {
  //Initialize podcasts and links
  const [podcasts, setlinks] = useState([
    {title: 'DEFINED',  
      info: 'In this podcast we talk about what it looks like to be spiritual women of God', 
      nav: 'https://defined.libsyn.com/', spotify:'spotify:show:5lUROtx80PgmDWm5BeEwBL', key: '1'},
    {title: 'LOCKER ROOM',  
      info: 'In this podcast we are redeeming men\'s conversations by talking about the right things in the right ways.', 
      nav: 'https://lockerroomscc.libsyn.com/', spotify:'spotify:show:3s7IhpN85vy86zoiMZovO1', key: '2'},
    {title: 'PARENTS',  
      info: 'A podcast for parents where a number of topics are covered with the hope to encourage you with what we know and don’t know.', 
      nav: 'https://sccparents.libsyn.com/', spotify:'spotify:show:4pCM4ESc1lTbgaCuKm0xjd', key: '3'},
    {title: 'SERIES',  
      info: 'Past and present weekend teachings from Southland Christian Church.', 
      nav: 'https://southlandcc.libsyn.com/', spotify:'spotify:show:42lkdz4qBNLPUpiANNxZYC', key: '4'},
  ])

  return (
    <SafeAreaView style={globalStyles.safeAreaView}>
      <Header title="PODCASTS" navigation={navigation} backarrow='keyboard-arrow-left' style={globalStyles.moveMenuIcon}/>
      <ScrollView style={globalStyles.scrollView}>
        <View style={globalStyles.blueCircle}></View>
    
        <View style={styles.cardsView}>
          <FlatList data={podcasts} renderItem={({item}) => (
            <TouchableOpacity style={[styles.card, globalStyles.card]} 
              onPress={() => { Linking.openURL(item.spotify).catch(err => Linking.openURL(item.nav))}} >
              
              <View style={styles.textView}>
                <Text style={styles.header}>{item.title}</Text>
                <Text style={styles.info}>{item.info}</Text>
              </View>

              <View>
                <MaterialIcons style={styles.icon} name='arrow-forward-ios'/>
              </View>

            </TouchableOpacity>
          )}/>
          </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  cardsView:{
    position:'absolute', 
    alignSelf: 'center'
  },
  textView:{
    width:'90%'
  },
  card:{
    backgroundColor: "rgba(237,236,236,1)",
    marginVertical: 6,
    alignSelf: 'center',
    width: '90%',
    height: 150,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    color: "rgba(65,65,66,1)",
    fontSize: 30,
    alignSelf:'center',
  },
  header: {
    fontFamily: "open-sans-700",
    color: "rgba(65,65,66,1)",
    fontSize: 30
  },
  info: {
    fontFamily: "open-sans-regular",
    color: "rgba(65,65,66,1)",
    textAlign: "left"
  },
})