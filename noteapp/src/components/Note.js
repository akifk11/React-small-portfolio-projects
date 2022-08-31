import React from "react";

const Note = ({ id, text, date, handleDeleteNote }) => {
    return <div className="note" >
        <span>{text}</span>
        <div className="note-footer">
            <small>{date}</small>
            <i onClick={() => handleDeleteNote(id)} className="delete-icon  fa-solid fa-trash-can"></i>
        </div>
    </div>;
};

export default Note;
