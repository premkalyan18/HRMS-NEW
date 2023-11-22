import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from "@angular/forms";
// import { ToastrService } from "ngx-toastr";
// import { FeatureModuleService } from "../../feature-module.service";


@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {
  public addContactForm: FormGroup | any;
  public editContactForm: FormGroup | any;
  public allContacts: any = [];
  public contactSidebar = ["company", "client", "staff"];
  public tempId: any;
  public editId: any;
  public searchText: any;
  public url: any = "contacts";
  constructor(private formBuilder: FormBuilder,

) { }

    // getContact() {
    //   this.allModuleService.get(this.url).subscribe((data) => {
    //     this.allContacts = data;
    //   });
    // }

  ngOnInit(): void {
    // this.getContact();
     // Add Contact Form Validation And Getting Values

     this.addContactForm = this.formBuilder.group({
      contactName: ["", [Validators.required]],
      contactNumber: ["", [Validators.required]],
      contactEmail: ["", [Validators.required]],
    });

    // Edit Contact Form Validation And Getting Values

    this.editContactForm = this.formBuilder.group({
      editContactName: ["", [Validators.required]],
      editContactEmail: ["", [Validators.required]],
      editContactNumber: ["", [Validators.required]],
    });
  }
  edit(value: any) {
    this.editId = value;
    const index = this.allContacts.findIndex((item : any) => {
      return item.id === value;
    });
    let toSetValues = this.allContacts[index];
    this.editContactForm.setValue({
      editContactName: toSetValues.name,
      editContactEmail: toSetValues.email,
      editContactNumber: toSetValues.number,
    });
  }

}
