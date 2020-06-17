import React from 'react'
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from '@material-ui/icons/Edit';
import { Link } from 'react-router-dom'
import Fab from "@material-ui/core/Fab";

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
      <Fab onClick={handleClicked}>
        <DeleteIcon />
      </Fab>
      <Fab>
        <Link to={`/notes/${props.id}/edit`}>
          <EditIcon style = {{color: "#f5ba13"}}/>   
        </Link> 
      </Fab>
    </div>
  )
}

export default Note

