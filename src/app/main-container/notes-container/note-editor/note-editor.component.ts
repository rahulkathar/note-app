import { Component, OnInit, Output, Input, EventEmitter, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
@Component({
  selector: 'app-note-editor',
  templateUrl: './note-editor.component.html',
  styleUrls: ['./note-editor.component.scss']
})
export class NoteEditorComponent {
  modalRef: BsModalRef;
  fullForm: boolean = false;
  @Output() noteEdited = new EventEmitter();
  note;
  isOpen = false;

  onEditNote() {
    const { title, value, color } = this.note; // this is es6 syntax
    if (title && value) {
      this.noteEdited.emit({ title, value, color });
    }
    this.isOpen = false;
    this.reset();
    this.fullForm = false;
  }

  reset() {
    this.note = {
      title: '',
      value: '',
      color: 'white'
    };
  }

  constructor(private modalService: BsModalService) { }
  editNote(note) {
    this.isOpen = true;
    this.note = note;
  }
}
