import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
@Component({
  selector: 'app-note-creator',
  templateUrl: './note-creator.component.html',
  styleUrls: ['./note-creator.component.scss']
})
export class NoteCreatorComponent implements OnInit {
  modalRef: BsModalRef;
  fullForm: boolean = false;
  @Output() createNote = new EventEmitter();
  newNote = {
    title: '',
    value: '',
    color: 'white'
  };

  onCreateNote() {
    const { title, value, color } = this.newNote; // this is es6 syntax
    if (title && value) {
      this.createNote.next({ title, value, color });
    }

    this.reset();
    this.fullForm = false;
  }

  reset() {
    this.newNote = {
      title: '',
      value: '',
      color: 'white'
    };
  }

  constructor(private modalService: BsModalService) { }

  openModal(template: Template<any>) {
    this.modalRef = this.modalService.show(template);
  }
  ngOnInit() {
  }
}
