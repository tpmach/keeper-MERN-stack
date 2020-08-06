import React from 'react'
import HighlightIcon from '@material-ui/icons/Highlight';

function Home() {
  return (
		<div className="container centered">
			<HighlightIcon fontSize="large"></HighlightIcon>
			<h1 className="display-3">Keeper</h1>
			<p className="lead">Keep your notes organized.</p>
			<hr />
			<a className="btn btn-light btn-lg" href="/register" role="button">Register</a>
			<a className="btn btn-dark btn-lg" href="/login" role="button">Login</a>
		</div>
  )
}

export default Home