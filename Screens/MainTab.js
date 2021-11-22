import React from 'react';
import { StyleSheet, View, Text,Linking } from "react-native";
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {MaterialIcons} from '@expo/vector-icons';

import HomeScreen from './Home'
import PrayerScreen from './Prayer';
import LocationScreen from './Location';
import LocationsListScreen from './LocationsList'
import PodcastsScreen from './Podcasts';
import NotesListScreen from './NotesList';

const HomeStack = createStackNavigator();
const LocationsListStack = createStackNavigator();
const MainTab = createBottomTabNavigator();

const EmptyScreen = () =>{
  return(null)
}

const HomeStackScreen = ({navigation}) => {
  return (
    <HomeStack.Navigator initialRouteName={HomeScreen} screenOptions={{headerShown: false }}>
      <HomeStack.Screen name="MainScreen" component={HomeScreen} />
      <HomeStack.Screen name="Prayer" component={PrayerScreen} />
      <HomeStack.Screen name="Podcasts" component={PodcastsScreen} />
      <HomeStack.Screen name="Notes" component={NotesListScreen} />
    </HomeStack.Navigator>
  )
}
  
const LocationsListStackScreen = () => {
  return (
    <LocationsListStack.Navigator initialRouteName={LocationsListScreen} screenOptions={{headerShown: false }}>
      <LocationsListStack.Screen name="Locations" component={LocationsListScreen} />
      <LocationsListStack.Screen name="Location" component={LocationScreen} />
    </LocationsListStack.Navigator>
  )
}

const MainTabScreen = () => {
  const navScreen = (focused, size, icon, title) => {
    return (
      <View style={styles.icon}>
        <MaterialIcons name={icon} style={{color:focused ? 'rgba(153,202,60,1)' : 'rgba(255,255,255,1)'}} size={size}/>
        <Text style={{fontFamily:"open-sans-700", color:focused ? 'rgba(153,202,60,1)' : 'rgba(255,255,255,1)' }}>{title}</Text>
      </View>
    );
  }

  return (
    <MainTab.Navigator screenOptions={{headerShown: false, tabBarStyle: 
      {backgroundColor: "rgba(65,65,66,1)", fontFamily:"open-sans-700"}, tabBarShowLabel: false}}>      
      <MainTab.Screen name="HomeStack" component={HomeStackScreen} 
        options={{tabBarIcon: ({focused, size}) => navScreen(focused, size, "home", "HOME") }}/>
      <MainTab.Screen name="LocationStack" component={LocationsListStackScreen}  initialRouteName={LocationsListScreen}
        options={{tabBarIcon: ({focused, size}) => navScreen(focused, size, "location-on", "LOCATIONS")}}/>
      <MainTab.Screen name="Watch" component={EmptyScreen} 
        listeners={({navigation}) => ({
          tabPress: event=>{
            event.preventDefault();
            Linking.openURL('https://southland.church/watch/')
          }
        })}
        options={{tabBarIcon: ({focused, size}) => navScreen(focused, size, "play-circle-outline", "WATCH")}}/>
      <MainTab.Screen name="Give" component={EmptyScreen} 
        listeners={({navigation}) => ({
          tabPress: event=>{
            event.preventDefault();
            Linking.openURL('https://southland.church/giving/')
          }
        })}
        options={{tabBarIcon: ({focused, size}) => navScreen(focused, size, "favorite-outline", "GIVE")}}/>
    </MainTab.Navigator>
  );
}

const styles = StyleSheet.create({
  icon: {
    color: "rgba(255,255,255,1)",
    alignItems: "center",
    justifyContent: "center"
  }
});

export default MainTabScreen
