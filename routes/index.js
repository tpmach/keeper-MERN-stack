const express = require ('express')
const Note = require('../models/note')
const { response } = require('express')

const router = express.Router()

// MARK: Read - Get all notes
router.get('/notes', (req, res) => {
  Note.find( (err, notes) => {
    res.json(notes)
  })
})

// MARK: Read - Get a note
router.get('/notes/:id', (req, res) => {
  Note.findById(req.params.id, (err, note) => {
    if (!note) {
      res.status(404).send('No result found')
    } else {
      res.json(note)
    }
  })
})

// MARK: Create - Post a new note
router.post('/notes', (req, res) => {
  let note = new Note(req.body)
  note.save()
    .then(note => {
      res.send(note)
    })
    .catch(err => {
      res.status(422).send('Note add failed')
    })
})

// MARK: Update - update a specific note
router.patch('/notes/:id', (req, res) => {
  Note.findByIdAndUpdate(req.params.id, req.body)
    .then(() => {
      res.json('Note updated')
    })
    .catch(error => {
      res.status(422).send('Note update failed.')
    })
})

//MARK: Delete - delete a note
router.delete('/notes/:id', (req, res) => {
  Note.findById(req.params.id, (err, note) => {
    if (!note) {
      res.status(404).send('Note not found!')
    } else {
      Note.findByIdAndDelete(req.params.id)
        .then(() => {
          res.status(200).json('Note deleted')
        })
        .catch(error => {
          res.status(400).send('Note delete failed')
        })
    }
  })
})

module.exports = router