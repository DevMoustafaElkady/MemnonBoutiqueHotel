import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  testemonials = [
    {
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis harum iure, tempore culpa autveritatis fuga, libero eum, numquam nemo debitis reiciendis',
    author: 'Moustafa Elkady',
    position: 'Founder of Mender'
  },
  {
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis harum iure, tempore culpa autveritatis fuga, libero eum, numquam nemo debitis reiciendis',
    author: 'Ahmed Khaled',
    position: 'Founder of Corta'
  }
];

reviewForm = new FormGroup({
  ReveiewerName: new FormControl(),
  ReveiewerMail: new FormControl(
    '', [Validators.email, Validators.pattern('.*com$')]
  ),
  ReveiewerMessage: new FormControl(),
});

  constructor(formBuilder: FormBuilder, public translate: TranslateService) {}

   ReveiewerName = '';
   ReveiewerMail = '';
   ReveiewerMessage = '';

  ngOnInit(): void {}



}
