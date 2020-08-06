import React from 'react';
import Header from './components/pages/Header'
import Footer from './components/pages/Footer'
//import Note from './components/pages/Note'
//import CreateArea from './components/pages/CreateArea'
import NotesList from './components/notes/NotesList'
import NoteAdd from './components/notes/NoteAdd'
import NoteEdit from './components/notes/NoteEdit'
import Home from './components/pages/Home'
import Login from './components/pages/Login'
import Register from './components/pages/Register'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <div>
      <Header />
      <Router>
        <Main />
      </Router>
      <Footer />
    </div>
  );
}

function Main(){
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/login' component={Login} />
      <Route exact path='/register' component={Register} />
      <Route exact path='/notes' component={NotesList} />
      <Route exact path='/notes/new' component={NoteAdd} />
      <Route exact path='/notes/:id' component={NotesList} />
      <Route exact path='/notes/:id/edit' component={NoteEdit} />
    </Switch>
  )
}

export default App;
