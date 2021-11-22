import React,{ useEffect, useState } from 'react';
import { SafeAreaView, TouchableHighlight, StyleSheet, 
  Text, View, ScrollView, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { SwipeListView } from 'react-native-swipe-list-view';
import {MaterialIcons} from '@expo/vector-icons';

import Header from '../Shared/Header';
import { globalStyles, newNote } from '../Shared/Global';
import ModalNotes from './ModalNotes'


export default function NotesList({navigation})  {

  //List of Notes created by user
  const [notes, setNotes] = useState([{title: "Welcome to Notes!",date: new Date().toDateString(),
    note: "Welcome to Notes! Easily write down your thoughts and ideas. Happy note taking!",key: "1"}])
  //If a note is currently swipped
  const [swipedRow, setSwipedRow] = useState(null)
  //If the notes modal is currently open
  const [modalVisible, setModalVisible] = useState(false)
  //Note sent to modal,If new note set to newNote
  const [noteEditing, setNoteEditing] = useState(newNote);
  
  //Update notes when page is reloaded
  useEffect(() => { getData()}, [])
  
  //Get notes stored in async storage
  const getData = () => {
    AsyncStorage.getItem('notes').then(data => {
      if(data != null){ setNotes(JSON.parse(data))}
    }).catch((error)=>console.log(error))
  }

  //add note to async storage
  const handleAddNote = (note) => {
    const newNotes = [...notes, note]
    AsyncStorage.setItem('notes', JSON.stringify(newNotes)).then(() => {
      setNotes(newNotes)
    }).catch(error => console.log(error))
  }

  //delete note from async storage
  const handleDeleteNote = (rowKey) =>{
    const newNotes = [...notes]
    const noteIndex = notes.findIndex((note) => note.key === rowKey)

    Alert.alert( 'Delete Note', 'Are you sure you would like to delete this note?',
      [{text: 'Cancel',style: 'cancel'},
        {text: 'Delete',  onPress: () => {
          if(noteIndex != -1){
            newNotes.splice(noteIndex, 1)
            AsyncStorage.setItem('notes', JSON.stringify(newNotes)).then(() => {
              setNotes(newNotes)
            }).catch(error => console.log(error))
          }
          setNoteEditing(newNote)
          setModalVisible(false)
        }},
      ],
      {cancelable: true},
    );
  }

  //action when note is pressed to be edited 
  const handleTriggerEdit = (note) => {
    setModalVisible(true)
    setNoteEditing(note)
  }

  //action when a note has been edited
  const handleEditNote=(editedNote)=>{
    const newNotes = [...notes]
    const noteIndex = notes.findIndex((note) => note.key == editedNote.key)
    newNotes.splice(noteIndex, 1,editedNote)

    AsyncStorage.setItem('notes', JSON.stringify(newNotes)).then(() => {
      setNotes(newNotes)
      setModalVisible(false)
    }).catch(error => console.log(error))
  }
  
  return (
    <SafeAreaView style={globalStyles.safeAreaView}>
      <Header title="NOTES" navigation={navigation} backarrow='keyboard-arrow-left' style={globalStyles.moveMenuIcon} setModalVisible={setModalVisible} rightIcon='add'/>
      <ScrollView style={globalStyles.scrollView}>
        {notes.length == 0 && <Text style={styles.title}>No Notes Found. Create a new note to get started!</Text>}
        {notes.length != 0 && <SwipeListView data = {notes} 
          renderItem = {(data)=>{ return( 
            <TouchableHighlight underlayColor='rgba(237,236,236,1)' onPress={()=>handleTriggerEdit(data.item)} >
              <View style = {[globalStyles.card, styles.card]}>
                <Text numberOfLines={1} style={styles.title}>{data.item.title}</Text>
                <Text numberOfLines={2} style={styles.body}>{data.item.note}</Text>
                <Text style={styles.date}>{data.item.date}</Text>
              </View>
            </TouchableHighlight>)}} 
          renderHiddenItem={(data)=>{ return(
            <View style = {styles.hidden}>
              <View style={styles.hidden2}>
                <MaterialIcons name="delete-outline" onPress={() => props.navigation.navigate('Settings')} style={styles.icon} onPress={()=>handleDeleteNote(data.item.key)}/>
              </View>
            </View> )}}
          rightOpenValue={-80} disableRightSwipe={true}
          showsVerticalScrollIndicator={false} style={{flex:1}} 
          onRowOpen={(rowKey)=>{ setSwipedRow(rowKey)}}
          onRowClose={()=>{ setSwipedRow(null)}} />}
      </ScrollView>
      <ModalNotes modalVisible = {modalVisible} setModalVisible={setModalVisible}
        noteEditing={noteEditing} setNoteEditing={setNoteEditing}
        handleAddNote= {handleAddNote} notes={notes}
        handleEditNote ={handleEditNote} handleDeleteNote ={handleDeleteNote} />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  icon: {
    color: '#fff',
    fontSize: 40,
    right: 20
  },
  hidden:{
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
  hidden2:{
    alignItems: 'flex-end',
    justifyContent: 'center',
    backgroundColor: "#99CA3C",
    height:'88%',
    width:"80%",
    borderRadius: 9,
    right:5
  },
  title: {
    fontFamily: "open-sans-700",
    color: "rgba(65,65,66,1)",
    fontSize: 20
  },  
  body: {
    fontFamily: "open-sans-regular",
    color: "rgba(65,65,66,1)",
    fontSize: 16,
  },
  date: {
    fontFamily: "open-sans-regular",
    color: "rgba(0,0,0,1)",
    position: 'absolute',
    top: 78,
    fontSize: 14,
    paddingHorizontal:18,
  },
  card:{
    flex:1,
    height: 110, 
    marginHorizontal: 4,
    marginVertical: 6,
    paddingHorizontal:18,
    paddingTop:5,
    backgroundColor: "rgba(237,236,236,1)",
  },
})