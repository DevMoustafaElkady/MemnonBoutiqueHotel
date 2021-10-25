import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, NgForm, Validators, NgModel} from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contactForm = new FormGroup({
    UserName: new FormControl(
      '', [Validators.required]
    ),
    UserMail: new FormControl(
      '', [Validators.email, Validators.pattern('.*com$')]
    ),
    UserPhone: new FormControl(),
    UserMessage: new FormControl()
  });

  constructor(formBuilder: FormBuilder){
    this.UserName = '';
    this.UserMail = '';
    this.UserPhone = '';
    this.UserMessage = '';
  }

  UserName: string;
  UserMail: string;
  UserPhone: string;
  UserMessage: string;


  formSubmit(): void{
    localStorage.setItem('Form', JSON.stringify(this.contactForm.value));
    setTimeout(() => {
      this.contactForm.reset();
    }, 1000);
  }

  ngOnInit(): void {
  }

}
