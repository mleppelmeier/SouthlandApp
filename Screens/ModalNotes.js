import React from 'react';
import {  Modal, SafeAreaView, StyleSheet, Text, View, ScrollView, TextInput } from "react-native";
import {MaterialIcons} from '@expo/vector-icons';

import { globalStyles, newNote } from '../Shared/Global';

const ModalNotes = ({modalVisible, setModalVisible,noteEditing, setNoteEditing, handleAddNote, notes, handleEditNote, handleDeleteNote}) => {
  //action when leaving modal notes page
  const handleSubmit = () =>{
    if(noteEditing.title != newNote.title || noteEditing.note != newNote.note){
      if(noteEditing.key == ''){
        handleAddNote({ title: noteEditing.title, date: new Date().toDateString(), note: noteEditing.note, 
          key: `${(notes[notes.length-1] && parseInt(notes[notes.length-1].key) +1) || 1}`})
      }else{
        handleEditNote({ title: noteEditing.title, date: new Date().toDateString(),
          note: noteEditing.note, key: noteEditing.key})
      }
      setNoteEditing(newNote)
    }
    setModalVisible(false)
  }
  
  //action when deleting a note
  const handleDelete = () => {
    handleDeleteNote(noteEditing.key)
  }

  return (
    <Modal animationType="slide" transparent={true} visible={modalVisible}>
      <SafeAreaView style={globalStyles.safeAreaView}>
        <View style={styles.header}>
          <MaterialIcons name='keyboard-arrow-left' onPress={handleSubmit} style={styles.icon1} />
          <Text style={styles.title}>EDIT NOTE</Text>
          <MaterialIcons name='delete-outline' onPress={handleDelete} style={styles.icon3}/>
        </View>

        <ScrollView style={{backgroundColor:"white", padding:10}}>
          <TextInput multiline={true}style={styles.title1} defaultValue={noteEditing.title} 
            onChangeText={(text)=>setNoteEditing({title: text, date: noteEditing.date,
            note: noteEditing.note, key: noteEditing.key})}/>
          
          <Text style={styles.date}> {noteEditing.date}</Text>
          
          <TextInput style={styles.textInput} multiline={true} defaultValue={noteEditing.note} 
            onChangeText={(text)=>setNoteEditing({ title: noteEditing.title, date: noteEditing.date,
            note: text, key: noteEditing.key})}/>

        </ScrollView>
      </SafeAreaView>
    </Modal>
  )
}

const styles = StyleSheet.create({
  title: {
    fontFamily: "open-sans-700",
    color: "rgba(255,255,255,1)",
    fontSize: 30,
    textAlign: "center",
  },
  title1: {
    fontFamily: "open-sans-700",
    color: "rgba(65,65,66,1)",
    fontSize: 23,
  },
  date: {
    fontFamily: "open-sans-regular",
    color: "rgba(155,155,155,1)",
    fontSize: 14,
  },
  textInput: {
    fontFamily: "open-sans-regular",
    color: "rgba(0,0,0,1)",
    fontSize: 16,
  },
  header: {
    flexDirection: 'row',
    backgroundColor: "rgba(65,65,66,1)",
    height: 65,
    alignItems: "center",
    justifyContent: "center"
  },
  icon1: {
    color: "rgba(255,255,255,1)",
    fontSize: 35,
    position: 'absolute',
    left: 5
  },
  icon3: {
    color: "rgba(255,255,255,1)",
    fontSize: 30,
    position: 'absolute',
    right: 15
  },

})

export default ModalNotes