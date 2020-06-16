import React, { useState, useEffect } from 'react'
import axios from 'axios'
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from '@material-ui/icons/Edit';

//2. Implement the delete note functionality.
//- Callback from the Note component to trigger a delete function.
//- Use the filter function to filter out the item that needs deletion.
//- Pass a id over to the Note component, pass it back to the App when deleting.

function Note(props){
  function handleClicked(){
    props.deleteClicked(props.id)
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleClicked}>
        <DeleteIcon />
      </button>
      <button>
        <EditIcon />
      </button>
    </div>
  )
}

export default Note