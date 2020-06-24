import React, { useState, useEffect } from 'react'
import { get, patch } from 'axios'
import CheckIcon from '@material-ui/icons/Check';

function NoteEdit(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  })

  useEffect(function(){
    async function getNote(){
      try {
        const response = await get(`/api/notes/${props.match.params.id}`)
        setNote(response.data)
      } catch (error) {
        console.log(error)
      }
    }
    getNote()
  }, [props])

  function handleChange(event){
    setNote({ ...note, [event.target.name]: event.target.value})
  }

  function handleSubmit(event){
    async function updateNote(){
      try {
        await patch(`/api/notes/${note._id}`, note)
        props.history.push('/notes')
      } catch (error) {
        console.log(error)        
      }
    }
    updateNote()
    event.preventDefault()
  }

  return (
    <div>
    <div className="text-center">
      <h2> Update Note</h2>
    </div>
      <form onSubmit={handleSubmit} className="create-note">
        <input value={note.title} name="title" onChange={handleChange} />
        <textarea value={note.content} name="content" rows="3" onChange={handleChange} />
        <button><CheckIcon /></button>
      </form>
    </div>
  )
}

export default NoteEdit