import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  messageForm: FormGroup;
  allSubjects= ['Współpraca', 'Pomoc Techniczna', 'Rekrutacja', 'Inny'];

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.messageForm = this.fb.group({
      companyName: ['', [Validators.required, Validators.minLength(2)]],
      companyNipNumber: [''],
      emailAddress: ['', [Validators.required, Validators.email]],
      phoneNumber: [''],
      messageSubject: [this.allSubjects[0]],
      messageContent: ['', [Validators.required, Validators.minLength(16)]],
      formAgreement: ['', Validators.requiredTrue],
    })
  }

  get control() {
    return this.messageForm.controls;
  }

  sendMessage() {
    if(this.messageForm.valid) {
      console.log(this.messageForm.value);
    }
  }

}
