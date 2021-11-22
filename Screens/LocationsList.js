import React from 'react'
import { SafeAreaView, FlatList, TouchableOpacity, StyleSheet, 
  Text, View, ScrollView, Image } from 'react-native';

import Header from '../Shared/Header';
import {MaterialIcons} from '@expo/vector-icons';
import {globalStyles, listOfLocation} from '../Shared/Global';

export default function locationsList({ navigation, online })  {
	return (
		<SafeAreaView style={globalStyles.safeAreaView}>
			<Header title="LOCATIONS" navigation={navigation}/>
			<ScrollView style={globalStyles.scrollView} >
				<FlatList data={Object.keys(listOfLocation)} renderItem={({item}) => (
					<TouchableOpacity onPress={() => navigation.navigate('Location', listOfLocation[item])} >
						<View style={[globalStyles.card, styles.card]}>
							<View style={styles.imageView}>
								<Image  style={styles.image} source={listOfLocation[item].picture}/>
								<Text style={styles.text}>{listOfLocation[item].title}</Text>
							</View>

							<View style={styles.iconView}>
								<MaterialIcons style={styles.icon} name='arrow-forward-ios'/>
							</View>
						</View>
					</TouchableOpacity>
				)}/>
			</ScrollView>
		</SafeAreaView>
	)
}


const styles = StyleSheet.create({
	imageView:{
		width:'90%', 
		flexDirection:'row'
	},
	iconView:{
		justifyContent: 'center'
	},
	card:{
		backgroundColor: "rgba(237,236,236,1)",
		marginVertical: 6,
		flexDirection:'row',
		alignSelf: 'center',
		width: '90%',
		height: 100,
	},
	text: {
		fontFamily: "open-sans-600",
		color: "rgba(65,65,66,1)",
		fontSize: 26,
		alignSelf: 'center',
	},
	icon: {
		color: "rgba(65,65,66,1)",
		fontSize: 30,
		alignSelf:'center',
	},
	image: {
		width: 80,
		height: 60,
		borderRadius: 9,
		alignSelf: 'center',
		margin:10
	},
})
