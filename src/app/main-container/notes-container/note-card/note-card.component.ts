import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-note-card',
  templateUrl: './note-card.component.html',
  styleUrls: ['./note-card.component.scss']
})
export class NoteCardComponent implements OnInit {
  today: number = Date.now();
  modalRef: BsModalRef;
  @Input() note = {};
  @Output() checked = new EventEmitter();
  @Output() edit = new EventEmitter();

  showCheck: boolean = false;

  constructor(private modalService: BsModalService) { }

  toggleCheck() {
    this.showCheck = !this.showCheck;
  }

  onChecked() {
    this.checked.next(this.note);
  }

  onEditNote() {
    debugger;
    this.edit.next(this.note);
  }

  // openModal(template: Template<any>) {
  //   this.modalRef = this.modalService.show(template);
  // }

  ngOnInit() {
  }

}
