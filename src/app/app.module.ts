import { NoteEditorComponent } from './main-container/notes-container/note-editor/note-editor.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { TooltipModule } from 'ngx-bootstrap';
import { AppComponent } from './app.component';
import { AppBarComponent } from './app-bar/app-bar.component';
import { MainContainerComponent } from './main-container/main-container.component';
import { NotesContainerComponent } from './main-container/notes-container/notes-container.component';
import { NoteCardComponent } from './main-container/notes-container/note-card/note-card.component';
import { NoteCreatorComponent } from './main-container/notes-container/note-creator/note-creator.component';

@NgModule({
  declarations: [
    AppComponent,
    AppBarComponent,
    MainContainerComponent,
    NotesContainerComponent,
    NoteCardComponent,
    NoteCreatorComponent,
    NoteEditorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    CommonModule,
    ModalModule.forRoot(),
    TooltipModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
