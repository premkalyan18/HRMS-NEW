import { Component, OnInit,ViewChild } from '@angular/core';


@Component({
  selector: 'app-chats',
  templateUrl: './chats.component.html',
  styleUrls: ['./chats.component.scss'],

})
export class ChatsComponent implements OnInit {

  @ViewChild("imagePond", { static: false }) imagePond: any;
  pondOptions = {
    class: "my-filepond",
    multiple: true,
    labelIdle: "Browse and Drop files here",
    acceptedFileTypes: "image/jpeg, image/png",
  };

  pondFiles = ["assets/img/logo2.png"];
  constructor() { }

  ngOnInit(): void {
  }

}
