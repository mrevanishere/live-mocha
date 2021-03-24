import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Note from './components/Note'
import noteService from './services/notes'

import Notification from './components/Notification'

const Footer = () => {
  const footerStyle = {
    color: 'green',
    fontStyle: 'italic',
    fontSize: 16
  }
  return (
    <div style={footerStyle}>
      <br />
      <em>Note app, Department of CS, University of LeetCode 2021</em>
    </div>
  )
}

const App = () => {
  const [ notes, setNotes ] = useState([])
  const [ newNote, setNewNote] = useState('a new note...')
  const [showAll, setShowAll] = useState(true)
  const [errorMessage, setErrorMessage] = useState('')

  // useEffect(hook, [])
  useEffect(() => {
    noteService
      .getAll()
      .then(initialNotes => {
        setNotes(initialNotes)
      })
  }, [])
  console.log('render', notes.length, 'notes')
  
  const toggleImportanceOf = (id) => {
    // const url = `http://localhost:3001/notes/${id}`
    const note = notes.find(n => n.id === id)
    const changedNote = { ...note, important: !note.important}

    noteService
      .update(id, changedNote)
      .then(returnedNote => {
        setNotes(notes.map(note => note.id !== id ? note : returnedNote))
      })
      .catch(error => {
        setErrorMessage(
          `Note '${note.content}' was already removed from server`
        )
        setTimeout(() => {
          setErrorMessage(null)
        }, 5000)
        setNotes(notes.filter( n => n.id !== id) )
      })

    // back quotes
    // console.log(`importance of ${id} needs to be toggled`)

    // axios.put(url, changedNote).then(response => {
    //   setNotes(notes.map(note => note.id !== id ? note : response.data))
    // })
  }


  var addNote = event => {
    event.preventDefault() // prevents default reload and submit
    const noteObject = {
      content: newNote,
      date: new Date().toISOString(),
      important: Math.random() < .5,
      id: notes.length + 1,
    }

    noteService
      .create(noteObject)
      .then(returnedNote => {
        setNotes(notes.concat(returnedNote))
        setNewNote('')
      })

    // axios
    //   .post('http://localhost:3001/notes', noteObject)
    //   .then(response => {
    //     // console.log(response)
    //     setNotes(notes.concat(noteObject))
    //     setNewNote('')
    //   })

    
    // console.log('button clicked', event.target)
  }

  // allows for changing of input box set by the App component
  const handleNoteChange = (event) => {
    console.log(event.target.value)
    setNewNote(event.target.value)
  }

  const notesToShow = showAll ? notes : notes.filter(note=>note.important === true)

  

  return (
    <div>
      <h1>Notes</h1>
      <Notification message={errorMessage} />
      <div>
        <button onClick={() => setShowAll(!showAll)}>
          show {showAll ? 'important': 'all'}
        </button>
      </div>
      <ul>
        {notesToShow.map(note => 
          <Note 
            key={note.id} 
            note={note} 
            toggleImportance={() => toggleImportanceOf(note.id)}
          />
        )}
      </ul>
      <form onSubmit={addNote}>
        <input value={newNote} onChange={handleNoteChange}/>
        <button type="Submit">save</button>
      </form>
      <Footer />
    </div>
  )
}

export default App