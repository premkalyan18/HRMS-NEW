import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-clients-modal',
  templateUrl: './clients-modal.component.html',
  styleUrls: ['./clients-modal.component.scss']
})
export class ClientsModalComponent implements OnInit {
  public addClientForm: FormGroup | any;
  public editClientForm: FormGroup | any;
  constructor( private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    
    //Add clients form
    this.addClientForm = this.formBuilder.group({
      clientName: ["", [Validators.required]],
      clientPhone: ["", [Validators.required]],
      clientEmail: ["", [Validators.required]],
      clientCompany: ["", [Validators.required]],
      clientRole: ["", [Validators.required]],
      clientId: ["", [Validators.required]],
    });

    //Edit Clients Form
    this.editClientForm = this.formBuilder.group({
      editClientName: ["", [Validators.required]],
      editClientPhone: ["", [Validators.required]],
      editClientEmail: ["", [Validators.required]],
      editClientCompany: ["", [Validators.required]],
      editClientRole: ["", [Validators.required]],
      editClientId: ["", [Validators.required]],
      editId: ["", [Validators.required]],
    });
  }



}
