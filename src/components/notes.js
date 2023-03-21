import React, { useState, useEffect } from 'react';
import sx from './sx';


function Notes(content, setContent) {
    const [notes, setNotes] = useState([]);

    function StickyNote({ content, onDelete }) {
        return (
            <div className="sticky-note" style={sx.stickyNote}>
                <button onClick={onDelete} style={sx.deleteButton}>X</button>
                <p>{content}</p>
            </div>
        );
    }

    function StickyNoteForm({ onSubmit }) {
        const [content, setContent] = useState('');

        const handleSubmit = (e) => {
            e.preventDefault();
            onSubmit(content);
            setContent('');
        };

        return (
            <form onSubmit={handleSubmit} >
                <textarea value={content} onChange={(e) => setContent(e.target.value)} style={sx.noteText}/>
                <button type="submit" style={sx.button}>Add note</button>
            </form>
        );
    }

    const handleAddNote = (content) => {
        setNotes([...notes, { id: Date.now(), content }]);
    };

    const handleDeleteNote = (id) => {
        setNotes(notes.filter((note) => note.id !== id));
    };

    return (
        <div className="app" style={sx.noteSection}>
            <StickyNoteForm onSubmit={handleAddNote} />
            {notes.map((note) => (
                <StickyNote
                    key={note.id}
                    content={note.content}
                    onDelete={() => handleDeleteNote(note.id)}
                />
            ))}
        </div>
    );
}

export default Notes;