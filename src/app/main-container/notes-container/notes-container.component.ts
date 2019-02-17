import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notes-container',
  templateUrl: './notes-container.component.html',
  styleUrls: ['./notes-container.component.scss']
})
export class NotesContainerComponent {
  notes = [
    {id: 1, title: 'one', value: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', color: 'white'},
    {id: 2, title: 'two', value: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', color: 'white'},
    {id: 3, title: 'three', value: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', color: 'white'}
  ];

  onNoteChecked(note, i) {
    this.notes.splice(i, 1);
  }

  onCreateNote(note) {
    this.notes.push(note);
  }

  onEditNote(editedNote) {
    this.notes.splice(this.notes.findIndex((note => note.id === editedNote.id)), 1, editedNote);
  }
}
