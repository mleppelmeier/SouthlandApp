import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MainTabScreen from './Screens/MainTab';
import { DrawerContent } from './Screens/DrawerContent';
import * as Font from 'expo-font'
import {Asset} from 'expo-asset'
import AppLoading from 'expo-app-loading'

const Drawer = createDrawerNavigator();

const getFonts = () => {
  return Font.loadAsync({
  "open-sans-regular": require("./assets/fonts/open-sans-regular.ttf"),
  "open-sans-700": require("./assets/fonts/open-sans-700.ttf"),
  "open-sans-600": require("./assets/fonts/open-sans-600.ttf")
})
}

const getImage = async() => {
  const images = [
    require('./assets/images/DANVILLE.jpeg'),
    require('./assets/images/GEORGETOWN.jpeg'),
    require('./assets/images/LEXINGTON.jpeg'),
    require('./assets/images/NICHOLASVILLE.jpeg'),
    require('./assets/images/RICHMOND.jpeg'),
    require('./assets/images/ANNOUNCEMENTS.jpeg'),
    require('./assets/images/BIBLE.jpeg'),
    require('./assets/images/DEVOTION.jpg'),
    require('./assets/images/EVENTS.jpeg'),
    require('./assets/images/GROUPS.jpeg'),
    require('./assets/images/NOTES.jpeg'),
    require('./assets/images/ONLINE.jpg'),
    require('./assets/images/PODCASTS.jpeg'),
    require('./assets/images/PRAYER.jpeg'),
    require('./assets/images/VOLUNTEER.jpeg')

  ]

  const cacheImages = images.map(image => {
    console.log(image)
    return Asset.fromModule(image).downloadAsync()

  })

  return Promise.all(cacheImages)
}

const _preloadsAsync = async () => {
  const fonts = getFonts()
  const image = getImage()

  await Promise.all([fonts, image])
}


export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false)
  
  if(fontsLoaded){
    return (
      <NavigationContainer>
        <Drawer.Navigator screenOptions={{headerShown: false}} 
          drawerContent={props => <DrawerContent {... props} /> }>
          <Drawer.Screen name="Home" component={MainTabScreen} />
        </Drawer.Navigator>
     </NavigationContainer>
    );
  } else {
    return (
      <AppLoading 
        startAsync={_preloadsAsync}
        onError={error => console.warn(error)}
        onFinish={() => setFontsLoaded(true)}
      />
    )
  }
}
