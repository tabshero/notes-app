import {MdDeleteForever} from 'react-icons/md'
import React from 'react'

const Note = ({id,text,date,handleDeleteNote}) => {
    return (
        <div className="note">
            <span>{text}</span>
            <div className="note-footer">
                <small>{date}</small>
                <MdDeleteForever className="delete-icon" size="1.3em" onClick={()=>handleDeleteNote(id)}/>
          
            </div>
            
        </div>
    )
}
 export default Note;