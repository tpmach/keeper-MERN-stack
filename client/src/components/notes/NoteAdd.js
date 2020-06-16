import React, { useState } from 'react'
import { post } from 'axios'
import CreateArea from '../pages/CreateArea'

//CHALLENGE:
//1. Implement the add note functionality.
//- Create a constant that keeps track of the title and content.
//- Pass the new note back to the App.
//- Add new note to an array.
//- Take array and render seperate Note components for each item.

function NoteAdd(props) {
  const [note, setNote] = useState({})

  function handleChange(event){
    setNote({ ...note, [event.target.name]: event.target.value })
  }

  function addNote(event){
    if (!note.title || !note.content) return
    async function postNote(){
      try {
        const response = await post('/api/notes', note)
        props.history.push('/notes')
      } catch (error) {
        console.log(error)
      }
    }
    postNote()
  }

  return (
    <CreateArea 
      titleValue={note.title || ''}
      contentValue={note.content || ''}
      changed={handleChange}
      clicked={addNote}
    />
  )
}

export default NoteAdd