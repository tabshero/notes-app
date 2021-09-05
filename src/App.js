import React, { useState, useEffect } from "react";
import { nanoid } from "nanoid"
import NotesLists from "./components/NotesLists";
import Search from "./components/Search";
import Header from "./components/Header";

const App = () => {

    const [notes, setNotes] = useState([{
        id: nanoid(),
        text: "Hello this is first note",
        date: "05/09/2021"
    }, {
        id: nanoid(),
        text: "Hello this is second note",
        date: "06/09/2021"
    }, {
        id: nanoid(),
        text: "Hello this is third note",
        date: "07/09/2021"
    }]);

    const [searchText, setSearchText] = useState('')
    const [darkMode, setDarkMode] = useState(false)

    useEffect(() => {
      const savedNotes = JSON.parse(localStorage.getItem('react-notes-app-data'))

      if(savedNotes)
      {
          setNotes(savedNotes)
      }
    }, [])
    useEffect(() => {
        localStorage.setItem('react-notes-app-data',JSON.stringify(notes))
    }, [notes])

    const addNote = (text) =>{
        const date = new Date();
        const newNote = {
            id: nanoid(),
            text:text,
            date: date.toLocaleDateString()
        } 
        const newNotes = [...notes,newNote];
        setNotes(newNotes);

    }
     const deleteNote = (id) =>{
        const newNotes = notes.filter((note)=>note.id!== id);
        setNotes(newNotes)
     }


    return (
        <div className={`${darkMode && 'dark-mode'}`}>
        <div className="container">

            <Header handleDarkMode ={setDarkMode}/>
            <Search handleSearchNote={setSearchText}/>

            <NotesLists notes={notes.filter((note)=>note.text.toLowerCase().includes(searchText))}
             handleAddNote={addNote}  
             handleDeleteNote={deleteNote}/>
        </div>
        </div>)

}

export default App;