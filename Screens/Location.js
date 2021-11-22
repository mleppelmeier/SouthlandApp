import React from 'react';
import { SafeAreaView, TouchableOpacity, StyleSheet, Text, 
	View, ImageBackground, Linking, ScrollView } from 'react-native';

import Header from '../Shared/Header';
import { globalStyles } from '../Shared/Global';


export default function Location({navigation, route}){

	//Open maps for IOS or Andriod 
	const openGps = (lat, lng, title) => {
		if(Platform.OS === 'ios'){
			return 'maps:0,0?q=Southland Christian Church: ' + title + '@' + lat + ',' +lng;
		}
		return 'geo:0,0?q=' + lat + '(' + lng + ')'
	}

	
	return (
		<SafeAreaView style={globalStyles.safeAreaView}>
			<Header title="LOCATIONS" navigation={navigation} backarrow='keyboard-arrow-left' style={globalStyles.moveMenuIcon}/>

			{route.params.title == 'ONLINE' && 
				<ScrollView  style={globalStyles.scrollView}>
					<View style={styles.imagebox}>
						<ImageBackground style={[styles.image, globalStyles.card,{marginBottom:100}]} source={route.params.picture} >
							<View style={styles.card}>
								<Text style={styles.header}>{route.params.title}</Text>
								<Text style={styles.smallHeader}>Service Times</Text>
								<Text style={[styles.info, {marginBottom:5}]}>{route.params.serviceTime}</Text>
							</View>
						</ImageBackground>
					</View>

					<View style={styles.boxOfButtons}>
						<View style={styles.buttonRow}>
							<TouchableOpacity style={[globalStyles.card, styles.button]}
								onPress={() => Linking.openURL(route.params.moreInformation)}>
								<Text style={styles.buttonText}>Watch Live</Text>
							</TouchableOpacity>
						</View>
					</View>
				</ScrollView>
			}
			{route.params.title != 'ONLINE' && 
				<ScrollView  style={{backgroundColor:"white"}}>
					<View style={styles.imagebox}>
						<ImageBackground style={[globalStyles.card, styles.image,{marginBottom:50}]} source={route.params.picture} >
							<View style={styles.card}>
								<Text style={styles.header}>{route.params.title}</Text>
								<Text style={styles.smallHeader}>Service Times</Text>
								<Text style={styles.info}>{route.params.serviceTime}</Text>
								<Text style={styles.smallHeader}>Office Hours</Text>
								<Text style={styles.info}>{route.params.officeHours}</Text>
								<Text style={styles.smallHeader}>Address</Text>
								<Text style={[styles.info, {marginBottom:5}]}>{route.params.address}</Text>
							</View>
						</ImageBackground>
					</View>

					<View style={styles.boxOfButtons}>
						<View style={styles.buttonRow}>
							<TouchableOpacity style={[globalStyles.card, styles.button]}
								onPress={() => Linking.openURL(route.params.announcements)}>
								<Text style={styles.buttonText}>Announcements</Text>
							</TouchableOpacity>
							
							<TouchableOpacity style={[globalStyles.card, styles.button]}
								onPress={() => Linking.openURL(route.params.events)}>
								<Text style={styles.buttonText}>Events</Text>
							</TouchableOpacity>
						</View> 

						<View style={styles.buttonRow}>
							<TouchableOpacity style={[globalStyles.card, styles.button]}
								onPress={() => Linking.openURL(route.params.facebookGroup)}>
								<Text style={styles.buttonText}>Facebook Group</Text>
							</TouchableOpacity>

							<TouchableOpacity style={[globalStyles.card, styles.button]}
								onPress={() => Linking.openURL(route.params.localOutreach)}>
								<Text style={styles.buttonText}>Local Outreach</Text>
							</TouchableOpacity>
						</View> 

						<View style={styles.buttonRow}>    
							<TouchableOpacity style={[globalStyles.card, styles.button]}
								onPress={() => Linking.openURL('https://southland.church/volunteer/')}>
								<Text style={styles.buttonText}>Volunteer</Text>
							</TouchableOpacity>
							
							<TouchableOpacity style={[globalStyles.card, styles.button]}
								onPress={() => Linking.openURL(openGps(route.params.mapLat,route.params.mapLng, route.params.title))}>
								<Text style={styles.buttonText}>Map</Text>
							</TouchableOpacity>
						</View> 

						<View style={styles.buttonRow}>    
							<TouchableOpacity style={[globalStyles.card, styles.button]}
								onPress={() => Linking.openURL(route.params.moreInformation)}>
								<Text style={styles.buttonText}>More Information</Text>
							</TouchableOpacity>
						</View>
					</View>
				</ScrollView>
			}
		</SafeAreaView>
	)
}
const styles = StyleSheet.create({
	header: {
		fontFamily: "open-sans-700",
		color: "rgba(255,255,255,1)",
		fontSize: 35,
		textAlign: "center",
	},
	smallHeader: {
		fontFamily: "open-sans-600",
		color: "rgba(255,255,255,1)",
		fontSize: 25,
		marginLeft: 5,
		marginTop:0,
		marginEnd: 0,
		paddingVertical: 0,
		lineHeight:30
	},
	info: {
		fontFamily: "open-sans-regular",
		color: "rgba(255,255,255,1)",
		fontSize: 20,
		marginLeft: 15,
		lineHeight: 22
	},
	imagebox:{
		height: '50%',
		width: '90%',
		marginTop:20,
		marginBottom:30,
		alignSelf:'center',
	},
	image: {
		flex:1,
		alignSelf:'center',
		overflow: "hidden",
		resizeMode: 'stretch',
		height: '100%',
		width:'100%',
	},
	card:{
		borderRadius: 9,
		backgroundColor: "rgba(0,0,0,0.43)",
		alignSelf:'center',
		width:'85%',
		marginVertical:20,
	},
	boxOfButtons:{
		height:'25%', 
		width:'85%', 
		alignSelf:'center'
	},
	buttonRow:{
		flexDirection:'row'
	},
	button: {
		flex:1,
		alignItems: 'center',
		justifyContent: 'center',
		paddingVertical: 12,
		backgroundColor: 'rgba(0,148,200,1)',
		width:'25%',
		margin: 2,
	},
	buttonText: {
		fontFamily: "open-sans-regular",
		color: "rgba(255,255,255,1)",
		fontSize: 17
	},
});


