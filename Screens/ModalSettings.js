import React,{ useState } from 'react';
import { Switch, Modal, SafeAreaView, StyleSheet, Text, View, ScrollView} from "react-native";
import DropDownPicker from 'react-native-dropdown-picker';
import {MaterialIcons} from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { globalStyles } from '../Shared/Global';

const ModalSettings = ({modalVisible, setModalVisible, campus, setCampus, switches, setSwitches}) => {
  
	//If the drop down menu is open
	const [open, setOpen] = useState(false);
	//selection options in drop down menu
	const [items, setItems] = useState([
		{label: 'Danville', value: 'DANVILLE'},
		{label: 'Georgetown', value: 'GEORGETOWN'},
		{label: 'Lexington', value: 'LEXINGTON'},
		{label: 'Nicholasville', value: 'NICHOLASVILLE'},
		{label: 'Richmond', value: 'RICHMOND'},
	]);

	//add selected item to async storage
	const onChangeItem = (value) =>{
		AsyncStorage.setItem('campus', value).then(() => {
		}).catch(error => console.log(error))
	}

	//update async storage if a switch has changed
	const switchValueChange = (editedSwitch) => {
		const newSwitches = [...switches]
		const switchIndex = switches.findIndex((oneSwitch) => oneSwitch.key == editedSwitch.key)
		newSwitches.splice(switchIndex, 1,editedSwitch)

		AsyncStorage.setItem('toggleSwitch', JSON.stringify(newSwitches)).then(() => {
			setSwitches(newSwitches)
		}).catch(error => console.log(error))
	};

	//get the value at key from switches
	const getValue = (key)=>{
		if(switches != undefined){
			const switchIndex = switches.findIndex((oneSwitch) => oneSwitch.key == key)
			if(switchIndex != -1 && switches != undefined){
				return switches[switchIndex].info
			}
		}
		return false;
	}

	return (        
		<Modal animationType="slide" transparent={true} visible={modalVisible}>
			<SafeAreaView style={globalStyles.safeAreaView}>
				<View style={styles.header}>
					<MaterialIcons name={'keyboard-arrow-left'} onPress={()=>setModalVisible(false)} style={styles.icon1} />
					<Text style={styles.headertitle}>SETTINGS</Text>
				</View>     

				<ScrollView style={globalStyles.scrollView}>
					<View style={[globalStyles.card,styles.campusView]}>
						<Text style={styles.title}>Select a Home Campus:</Text>
					</View>

					<DropDownPicker
							open={open} value={campus} items={items}
							setOpen={setOpen} setValue={setCampus} setItems={setItems}
							onChangeValue={(item) => {onChangeItem(item)}}
							closeAfterSelecting={true}
							showTickIcon={false}

							itemStyle={{ justifyContent: 'flex-start'}}
							style={[globalStyles.card, styles.dropstyle]}
							dropDownContainerStyle={[globalStyles.card, styles.dropcontainer]}
							labelStyle={styles.droptext}
							textStyle={styles.droptext}

							ArrowUpIconComponent={() => <MaterialIcons name='keyboard-arrow-up' style={styles.dropIcon} />}
							ArrowDownIconComponent={() => <MaterialIcons name='keyboard-arrow-down' style={styles.dropIcon} />}
						/>

					<View style={[globalStyles.card, styles.toggleView]}>
						<Text style={styles.title2}>Customize Home Screen:</Text>

						<Text style={styles.subTitle}>Campus</Text>
						<View style={styles.subVeiw}>
							<View style={{flexDirection:'row'}}>
								<Text style={styles.text}>Announcements</Text>
								<Switch trackColor={{ false: "#414142", true: "#99CA3C" }} thumbColor="#FFFFFF"
									onValueChange={() => switchValueChange({title: 'ANNOUNCEMENTS',  info:!getValue(1) , key: '1'},)}
									value={getValue(1)}/>
							</View>

							<View style={{flexDirection:'row'}}>
								<Text style={styles.text}>Events</Text>
								<Switch trackColor={{ false: "#414142", true: "#99CA3C" }} thumbColor="#FFFFFF"
									onValueChange={() => switchValueChange({title: 'EVENTS',  info: !getValue(4), key: '4'},)}
									value={getValue(4)}/>
							</View>

							<View style={{flexDirection:'row'}}>
								<Text style={styles.text}>Online</Text>
								<Switch trackColor={{ false: "#414142", true: "#99CA3C" }} thumbColor="#FFFFFF"
									onValueChange={() => switchValueChange({title: 'ONLINE',  info: !getValue(7), key: '7'},)}
									value={getValue(7)}/>
							</View>
						</View>

						<Text style={styles.subTitle}>Connect</Text>
						<View style={styles.subVeiw}>
							<View style={{flexDirection:'row'}}>
								<Text style={styles.text}>Groups</Text>
								<Switch trackColor={{ false: "#414142", true: "#99CA3C" }} thumbColor="#FFFFFF"
									onValueChange={() => switchValueChange({title: 'GROUPS',  info:!getValue(5) , key: '5'},)}
									value={getValue(5)}	/>
							</View>

							<View style={{flexDirection:'row'}}>
								<Text style={styles.text}>Prayer</Text>
								<Switch trackColor={{ false: "#414142", true: "#99CA3C" }} thumbColor="#FFFFFF"
									onValueChange={() => switchValueChange({title: 'PRAYER',  info:!getValue(9) , key: '9'},)}
									value={getValue(9)} />
							</View>

							<View style={{flexDirection:'row'}}>
								<Text style={styles.text}>Volunteer</Text>
								<Switch trackColor={{ false: "#414142", true: "#99CA3C" }} thumbColor="#FFFFFF"
									onValueChange={() => switchValueChange({title: 'VOLUNTEER',  info:!getValue(10) , key: '10'},)}
									value={getValue(10)}/>
							</View>
						</View>

						<Text style={styles.subTitle}>Grow</Text>
						<View style={styles.subVeiw}>
							<View style={{flexDirection:'row'}}>
								<Text style={styles.text}>Bible</Text>
								<Switch trackColor={{ false: "#414142", true: "#99CA3C" }} thumbColor="#FFFFFF"
									onValueChange={() => switchValueChange({title: 'BIBLE',  info:!getValue(2) , key: '2'},)}
									value={getValue(2)}/>
							</View>

							<View style={{flexDirection:'row', alignItems:'center'}}>
								<Text style={styles.text}>Notes</Text>
								<Switch trackColor={{ false: "#414142", true: "#99CA3C" }} thumbColor="#FFFFFF"
									onValueChange={() => switchValueChange({title: 'NOTES',  info:!getValue(6) , key: '6'},)}
									value={getValue(6)}/>
							</View>

							<View style={{flexDirection:'row', alignItems:'center'}}>
								<Text style={styles.text}>Devotion</Text>
								<Switch trackColor={{ false: "#414142", true: "#99CA3C" }} thumbColor="#FFFFFF"
									onValueChange={() => switchValueChange({title: 'DEVOTION',  info:!getValue(3) , key: '3'},)}
									value={getValue(3)} />
							</View>

							<View style={{flexDirection:'row'}}>
									<Text style={styles.text}>Podcasts</Text>
									<Switch trackColor={{ false: "#414142", true: "#99CA3C" }} thumbColor="#FFFFFF"
										onValueChange={() => switchValueChange({title: 'PODCASTS',  info:!getValue(8) , key: '8'},)}
										value={getValue(8)}/>
							</View>
						</View>
					</View>
				</ScrollView>
			</SafeAreaView>
		</Modal>
	)
}

const styles = StyleSheet.create({
	header: {
		flexDirection: 'row',
		backgroundColor: "rgba(65,65,66,1)",
		height: 65,
		alignItems: "center",
		justifyContent: "center"
	},
	headertitle: {
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
	dropstyle:{
		flexDirection:'row',
		backgroundColor:"rgba(65,65,66,1)",
		height: 50,
		width: 350,
		borderWidth:0,
		justifyContent: 'center',
		flexDirection:'row', 
		alignItems:'center',
		position: 'absolute',
		top: -65,
		marginHorizontal: 20,

	},
	dropcontainer:{
		flexDirection:'row',
		backgroundColor:"rgba(65,65,66,1)",
		borderRadius:0,
		borderWidth: 0,
		width: 350,
		position: 'absolute',
		top: -10,
		marginHorizontal: 20,
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
	campusView:{
		backgroundColor: "rgba(0,148,200,1)",
		marginHorizontal: 15,
		marginVertical:10,
		padding: 5,
		height: 100
	},
	toggleView:{
		backgroundColor: "rgba(237,236,236,1)",
		borderRadius: 9,
		marginHorizontal: 15,
		padding: 5,
	},
	title2: {
		fontFamily: "open-sans-regular",
		color: "rgba(65,65,66,1)",
		fontSize: 27
	},  
	subTitle: {
		fontFamily: "open-sans-regular",
		color: "rgba(65,65,66,1)",
		fontSize: 23,
		marginHorizontal: 30
	},  
	title: {
		fontFamily: "open-sans-regular",
		color: '#fff',
		fontSize: 27
	},  
	subVeiw: {
		marginHorizontal:60,
	},
	text:{
		fontFamily: "open-sans-regular",
		color: "rgba(65,65,66,1)",
		fontSize: 18,
		width:'80%'
	}
})

export default ModalSettings