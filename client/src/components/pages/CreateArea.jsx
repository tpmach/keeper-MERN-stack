import React from "react";
//import { Link } from "react-router-dom";

function CreateArea(props) {
  return (
    <div>
      <form onSubmit={props.clicked}>
        <input value={props.titleValue} name="title" placeholder="Title" onChange={props.changed} />
        <textarea value={props.contentValue} name="content" placeholder="Take a note..." rows="3" onChange={props.changed} />
        <button>Add</button>
      </form>
    </div>
  )
}

export default CreateArea;
