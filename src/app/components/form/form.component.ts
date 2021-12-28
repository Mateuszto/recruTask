import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  messageForm: FormGroup;
  allSubjects= ['Współpraca', 'Pomoc Techniczna', 'Rekrutacja'];

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.messageForm = this.fb.group({
      companyName: ['', Validators.required],
      companyNipNumber: [''],
      emailAddress: [''],
      phoneNumber: [''],
      messageSubject: [''],
      messageContent: [''],
      formAgreement: ['', Validators.requiredTrue],
    })
  }

  sendMessage() {
    console.log(this.messageForm.value);
  }

}
