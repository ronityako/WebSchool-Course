import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.css']
})
export class MyFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  submitForm(valid){
    if(valid){
      console.log("The form is correct");
    }
  }

  user:any={
    idType: '', idNum: '', codeType: '', phone: '', confirm: false
  };
}
