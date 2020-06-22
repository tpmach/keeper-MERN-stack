import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Note from '../pages/Note'
import NoteAdd from '../notes/NoteAdd'

function NotesList(props) {
  const [notes, setNotes] = useState([])

  useEffect(function() {
    async function getNotes() {
      try {
        const response = await axios.get('/api/notes')
        setNotes(response.data)
      } catch (error) {
        console.log(error)
      }
    }
    getNotes()
  }, [props])

  async function deleteNote(id){
    try {
      await axios.delete(`/api/notes/${id}`)
      props.history.push('/notes')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      <NoteAdd />
      {notes.map(note => {
        return(
          <Note 
            key={note._id} 
            id= {note._id}
            title = {note.title} 
            content={note.content} 
            value={note}
            deleteClicked={deleteNote}
          />
        )
      })}
    </div>
  )
}

export default NotesList 