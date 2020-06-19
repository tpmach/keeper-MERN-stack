import React from 'react'
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from '@material-ui/icons/Edit';
import { Link } from 'react-router-dom'
import Fab from "@material-ui/core/Fab";

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

