import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Note from '../pages/Note'

function NotesList() {
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
  }, [])

  return (
    <div>
      {notes.map(note => {
        return(
          <Note title = {note.title} content={note.content} />
        )
      })}
    </div>
  )
}

export default NotesList 