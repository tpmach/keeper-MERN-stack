import React, { useState } from 'react'
import { post } from 'axios'
import CreateArea from '../pages/CreateArea'

function NoteAdd(props) {
  const [note, setNote] = useState({
    title:"",
    content:""
  })

  const [isExpanded, setExpand] = useState(false)

  function handleChange(event){
    setNote({ ...note, [event.target.name]: event.target.value })
  }

  function expand(){
    setExpand(true)
  }

  function addNote(event){
    if (!note.title || !note.content) return
    async function postNote(){
      try {
        const response = await post('/api/notes', note)
        props.history.push(`/notes`)
      } catch (error) {
        console.log(error)
      }
    }
    postNote()
  }

  return (
    <CreateArea 
      expanded = {isExpanded}
      titleValue={note.title || ''}
      contentValue={note.content || ''}
      changed={handleChange}
      clicked={addNote}
      textAreaClicked={expand}
    />
  )
}

export default NoteAdd