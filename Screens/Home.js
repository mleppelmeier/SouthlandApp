import React,{ useState,useEffect } from 'react';
import { StatusBar, SafeAreaView, FlatList, TouchableOpacity, 
  StyleSheet, Text, View, ScrollView, Linking, ImageBackground  } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StackActions } from '@react-navigation/native';

import Header from '../Shared/Header';
import {links, listOfLocation, globalStyles} from '../Shared/Global';
import ModalSettings from './ModalSettings'



export default function Home({navigation})  {

  //Initalize toggle switches to be true
  const initialSwitches =[ {title: 'ANNOUNCEMENTS',  info: true, key: '1'},
    {title: 'BIBLE',  info: true, key: '2'},
    {title: 'DEVOTION',  info: true, key: '3'},
    {title: 'EVENTS',  info: true, key: '4'},
    {title: 'GROUPS',  info: true, key: '5'},
    {title: 'NOTES',  info: true, key: '6'},
    {title: 'ONLINE',  info: true, key: '7'},
    {title: 'PODCASTS',  info: true, key: '8'},
    {title: 'PRAYER',  info: true, key: '9'},
    {title: 'VOLUNTEER',  info: true, key: '10'}]

  //Home campus for campus links
  const [campus, setCampus] = useState('DANVILLE')
  //Links currently shown on home page
  const [shownlinks, setShownLinks] = useState(links)
  //Settings Modal Page
  const [modalVisible, setModalVisible] = useState(false)
  //State of toggle switches
  const [switches, setSwitches] = useState(initialSwitches)


  //Update home campus when campus changes
  useEffect(() => {
    getCampusData()
  },[campus])

  //Update shownLinks when switches change
  useEffect(()=>{
    getShownLinks()
  },[switches])

  //Update switches when page is reloaded
  useEffect(()=>{
    getSwitchData()
  },[])

  //Update shownLinks to match true toggle switches
  const getShownLinks = () =>{
    let newShownlinks = [];
      for(let i = 0; i < 10; i++){
        if(switches != undefined && switches[i].info){
          newShownlinks.push(links[switches[i].title]);
        }
      }
      setShownLinks(newShownlinks)
  }

  //get switch data from async storage
  const getSwitchData = () => {
    AsyncStorage.getItem('toggleSwitch').then(data => {
      if(data != null && data != switches){
        setSwitches(JSON.parse(data))
      }
    }).catch((error)=>console.log(error))
  }

  //get campus data from async storage
  const getCampusData = () => {
    AsyncStorage.getItem('campus').then(data => {
      if(data != null){
        setCampus(data)
      }
    }).catch((error)=>console.log(error))
  }

  return (
    <SafeAreaView style={globalStyles.safeAreaView}>
      <StatusBar barStyle={'light-content'} /> 
      <Header title="HOME" navigation={navigation} setModalVisible={setModalVisible} rightIcon='settings'/>

      <ScrollView style={globalStyles.scrollView}>
          <FlatList data={Object.keys(shownlinks)} renderItem={({item}) => (
            <TouchableOpacity onPress={() => {
              if(shownlinks[item].title=='ONLINE'){

                const pushAction = StackActions.push('LocationStack');

                navigation.dispatch(pushAction);
                navigation.navigate('LocationStack', {screen:shownlinks[item].nav, params:shownlinks[item].navItems})

              }else if(shownlinks[item].title=='EVENTS'){
                Linking.openURL(listOfLocation[campus].events)
              }else if(shownlinks[item].title=='ANNOUNCEMENTS'){
                Linking.openURL(listOfLocation[campus].announcements)
              }else if (shownlinks[item].screen == 'true') {
                  navigation.navigate(shownlinks[item].nav)
              } else {
                Linking.openURL(shownlinks[item].nav)
              }
            }} >
              <View style={styles.card}>
                <ImageBackground style={[globalStyles.card, styles.image]} source={shownlinks[item].picture} >
                  <Text style={styles.header}>{shownlinks[item].title}</Text>
                  <Text style={styles.info}>{shownlinks[item].info}</Text>
                </ImageBackground>
              </View>
            </TouchableOpacity>)}
          />
      </ScrollView>
      <ModalSettings switches={switches} setSwitches={setSwitches}
        campus={campus} setCampus={setCampus}
        modalVisible={modalVisible} setModalVisible={setModalVisible}/>
    </SafeAreaView>
  )
}



const styles = StyleSheet.create({
  card: {
    width:'85%',
    alignSelf: 'center',
    marginVertical: 5,
  },
  image: {
    paddingHorizontal: 10,
    overflow: "hidden",
    resizeMode: 'stretch',
    height:150,
    justifyContent: 'flex-end',
    padding: 5
  },
  info: {
    fontFamily: "open-sans-regular",
    color: "rgba(255,255,255,1)",
    alignSelf: 'baseline',
    fontSize:18
  },
  header: {
    fontFamily: "open-sans-700",
    color: "rgba(255,255,255,1)",
    fontSize: 25
  },
})