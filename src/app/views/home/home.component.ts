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
    content: 'Fabulous food! Highly recommended. The location is perfect, right beside the iconic Colossi of Memnon and the beautiful Western Mountains.',
    author: 'Kate Baker',
    position: '5/5'
  },
  {
    content: 'Wow! Fantastic restaurant with amazing view. The food is divine! We had the shrimps and mixed salad.',
    author: 'Donna Roie',
    position: '5/5'
  },
  {
    content: 'My favourite restaurant in Luxor! Best garlic shrimps in Luxor!',
    author: 'Psychic Twin Feathers',
    position: '5/5'
  },
  {
    content: 'Very good again! Highly recommended!',
    author: 'Miranda van Dijk',
    position: '5/5'
  },
  {
    content: 'A quiet, wonderful place with a magnificent view of the historical evidence of Luxor. The hot chocolate is highly recommended.',
    author: 'Anette Luise',
    position: '5/5'
  },
  {
    content: 'nice little family hotel, vis a vis the former temple of Memnon. Good location, many sights on foot or by bike. Good price performance.',
    author: 'Markus Hegnauer',
    position: '5/5'
  },
  {
    content: 'The food is very good and the staff is very friendly.',
    author: 'Cau Brualla',
    position: '5/5'
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
