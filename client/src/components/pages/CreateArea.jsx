import React from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";

function CreateArea(props) {
  return (
    <div>
      <form className="create-note">
        <input value={props.titleValue} name="title" placeholder="Title" onChange={props.changed} />
        <textarea value={props.contentValue} name="content" placeholder="Take a note..." rows="3" onChange={props.changed} />
        
        <button onClick={props.clicked}><AddIcon /></button>
      </form>
    </div>
  )
}

export default CreateArea;
