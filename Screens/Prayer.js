import React,{ useState } from 'react';
import { SafeAreaView, Linking, StyleSheet, Text, View, ScrollView, 
	TextInput,TouchableOpacity,Alert } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import {MaterialIcons} from '@expo/vector-icons';

import Header from '../Shared/Header';
import { globalStyles } from '../Shared/Global';

export default function Prayer({navigation})  {

	//Prayer from text input
	const [note, setNote] = useState('');
	//Is the dropdown menu open
	const [open, setOpen] = useState(false);
	//Value of the dropdown menu
	const [value, setValue] = useState(null);
	//Items in the dropdown menu
	const [items, setItems] = useState([
		{label: 'Prayer Request', value: 'Prayer Request'},
		{label: 'Praise', value: 'Praise'},
	]);

	//Send an email if possible 
	const sendEmail = () => {
		if(value != null && note != ''){
			Linking.openURL('mailto:jesus@gmail.com?subject=' + 
				value + '&body=To Southland Prayer Team, ' + note).catch(err => 
				Alert.alert(
				'Failed to send',
				'Please download Gmail app and try agian.',
				[{text: 'Ok'}]
			))
		}else{
			Alert.alert(
				'Your submission is empty!',
				'Please type in your prayer or praise and submit.',
				[{text: 'Ok'}]
			)
		}
	}

	return (
		<SafeAreaView style={globalStyles.safeAreaView}>
			<Header title="PRAYER" navigation={navigation} backarrow='keyboard-arrow-left' style={globalStyles.moveMenuIcon}/>
			<ScrollView style={globalStyles.scrollView}>
				<View style={styles.center}>

					<View style={globalStyles.blueCircle}></View>

					<View style={styles.inputView}>
						<DropDownPicker
							open={open} value={value} items={items} 
							setOpen={setOpen} setValue={setValue} setItems={setItems}
							
							closeAfterSelecting={true}
							showTickIcon={false}
							placeholder="I'm sharing a..."

							style={[globalStyles.card, styles.dropstyle]}
							dropDownContainerStyle={[globalStyles.card, styles.dropcontainer]}
							labelStyle={styles.droptext}
							textStyle={styles.droptext}

							ArrowUpIconComponent={({style}) => <MaterialIcons name='keyboard-arrow-up' style={styles.dropIcon} />}
							ArrowDownIconComponent={({style}) => <MaterialIcons name='keyboard-arrow-down' style={styles.dropIcon} />}
						/>
						<TextInput style={[globalStyles.card, styles.input]} multiline={true} 
							placeholder='Enter a prayer request or praise to be sent to our prayer team...' 
							onChangeText={(val) => setNote(val)}/>
						<TouchableOpacity style={[globalStyles.card, styles.button]} onPress={sendEmail}>
							<Text style={styles.buttonText}>Submit</Text>
						</TouchableOpacity>
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	center: {
		justifyContent:'center'
	},
	inputView: {
		position:'absolute', 
		alignSelf:'center', 
		width:'80%'
	},
	button: {
		flex:1,
		alignSelf: 'flex-end',
		alignItems: 'center',
		paddingVertical: 12,
		backgroundColor: "rgba(153,202,60,1)",
		width:'50%',
		marginTop: 10,
	},
	buttonText: {
		fontFamily: "open-sans-regular",
		color: "rgba(255,255,255,1)",
		fontSize: 20
	},
	input:{
		height: 200,
		backgroundColor:"rgba(237,236,236,1)",
		padding:5,
		fontSize: 20,
		fontFamily: "open-sans-regular",
		color: "rgba(65,65,66,1)",
		marginTop: 10
	},
	dropstyle:{
		flexDirection:'row',
		backgroundColor:"rgba(65,65,66,1)",
		height: 50,
		borderWidth:0,
		justifyContent: 'center',
		flexDirection:'row', 
		alignItems:'center',
	},
	dropcontainer:{
		flexDirection:'row',
		backgroundColor:"rgba(65,65,66,1)",
		borderRadius:0,
		borderWidth: 0,
		marginTop: 2,
	},
	droptext:{
		fontFamily: "open-sans-regular",
		color: "rgba(255,255,255,1)",
		fontSize: 20,
		padding: 5,
		alignSelf: 'center'
	},
	dropIcon:{
		color: "rgba(255,255,255,1)",
		fontSize: 25,
	},

});