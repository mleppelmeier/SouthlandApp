import React from 'react';
import { StyleSheet, SafeAreaView, Text, View, Linking, Image } from 'react-native';

export function DrawerContent(props) {
	return(
		<SafeAreaView style={styles.drawer}>
			<View style={{flex: 1, height:'25%'}}>
				<Image  style={styles.image} source={require('../assets/images/SouthlandLogo.png')}/>
			</View>
			<View style={styles.container}>
				<Text style={styles.textHeader}>Connect</Text>
				<Text style={styles.text} onPress={() => {Linking.openURL('https://southland.church/groups/')}}>Groups</Text>
				<Text style={styles.text} onPress={() => {props.navigation.navigate('Prayer')}} >Prayer</Text>
				<Text style={styles.text} onPress={() => {Linking.openURL('https://southland.church/volunteer/')}}>Volunteer</Text>
			</View>
			<View style={styles.container}>
				<Text style={styles.textHeader}>Grow</Text>
				<Text style={styles.text} onPress={() => {Linking.openURL('https://youversion.com/the-bible-app/')}}>Bible</Text>
				<Text style={styles.text} onPress={() => {props.navigation.navigate('Notes')}}>Notes</Text>
				<Text style={styles.text} onPress={() => {Linking.openURL('https://southland.church/devotions/')}}>Devotion</Text>
				<Text style={styles.text} onPress={() => {props.navigation.navigate('Podcasts')}}>Podcasts</Text>
			</View>
			<View style={styles.container}>
				<Text style={styles.textHeader}>More Information</Text>
				<Text style={styles.text} onPress={() => {Linking.openURL('https://southland.church/')}}>Website</Text>
			</View>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	text: {
		fontFamily: "open-sans-regular",
		color: "rgba(65,65,66,1)",
		fontSize: 25,
		textAlign: "center",
		lineHeight: 30
	},
	textHeader: {
		fontFamily: "open-sans-700",
		color: "rgba(65,65,66,1)",
		fontSize: 28,
	},
	drawer: {
		backgroundColor: '#E6E6E6',
		flex: 1,
		alignItems: "center"  
	},
	container: {
		flex: 1,
		borderColor: "rgba(65,65,66,1)",
		borderTopWidth: 1,
		width: '90%',
		alignItems: "center",
		justifyContent: "center",
	},
	image: {
		flex: 1,
		width: 250,
		height: 60,
		resizeMode: 'contain',
		alignSelf:'center'
	},
});
  
  