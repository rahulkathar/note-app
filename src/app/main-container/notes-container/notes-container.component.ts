import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notes-container',
  templateUrl: './notes-container.component.html',
  styleUrls: ['./notes-container.component.scss']
})
export class NotesContainerComponent implements OnInit {

  notes = [
    {title: 'one', value: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', color: 'white'},
    {title: 'two', value: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', color: 'white'},
    {title: 'three', value: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', color: 'white'}
  ];

  onNoteChecked(note, i) {
    this.notes.splice(i, 1);
  }

  onCreateNote(note) {
    this.notes.push(note);
  }
  constructor() { }

  ngOnInit() {
  }

}
