import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppsRoutingModule } from './apps-routing.module';
// import filepond module
import { FilePondModule } from 'ngx-filepond'; 

import { AppsComponent } from './apps.component';
import { CalendarComponent } from './calendar/calendar.component';
import { ContactsComponent } from './contacts/contacts.component';

import { FileManagerComponent } from './file-manager/file-manager.component';
import { ChatsComponent } from './chat/chats/chats.component';
import { VoiceCallComponent } from './calls/voice-call/voice-call.component';
import { VideoCallComponent } from './calls/video-call/video-call.component';
import { OutgoingCallComponent } from './calls/outgoing-call/outgoing-call.component';
import { IncomingCallComponent } from './calls/incoming-call/incoming-call.component';
import { ChatSidebarComponent } from './chat/chat-sidebar/chat-sidebar.component';
import { CallSidebarComponent } from './calls/call-sidebar/call-sidebar.component';
import { CallModalComponent } from './calls/call-modal/call-modal.component';
import { EmailPagecontentComponent } from './emails/email-pagecontent/email-pagecontent.component';
import { EmailComposeComponent } from './emails/email-compose/email-compose.component';
import { EmailEmailviewComponent } from './emails/email-emailview/email-emailview.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import { SharedModule } from 'src/app/shared/shared.module';
import { EmailSidebarComponent } from './emails/email-sidebar/email-sidebar.component';



@NgModule({
  declarations: [
    AppsComponent,
    CalendarComponent,
    ContactsComponent,
    FileManagerComponent,
    ChatsComponent,
    VoiceCallComponent,
    VideoCallComponent,
    OutgoingCallComponent,
    IncomingCallComponent,
    ChatSidebarComponent,
    CallSidebarComponent,
    CallModalComponent,
    EmailPagecontentComponent,
    EmailComposeComponent,
    EmailEmailviewComponent,
    EmailSidebarComponent,
    
  ],
  imports: [
    CommonModule,
    AppsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FilePondModule,
    FullCalendarModule,
    SharedModule
  ]
})
export class AppsModule { }
