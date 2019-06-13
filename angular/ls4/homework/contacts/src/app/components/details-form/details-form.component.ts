import { Component, OnInit } from '@angular/core';
import { TelNumberService } from '../../services/tel-number.service';

@Component({
  selector: 'app-details-form',
  templateUrl: './details-form.component.html',
  styleUrls: ['./details-form.component.css']
})
export class DetailsFormComponent implements OnInit {

  constructor( private telValidateSrv: TelNumberService) { }

  ngOnInit() {
  }

  contactsArr:any[] = [];

  addContact(name:string, tel:number, mail:string){
    let valid = this.telValidateSrv.validateTelNumber(tel);
    let putTel = tel.toString();
    if(!valid){
      putTel = 'מספר ספרות שגוי';
    }
    this.contactsArr.push({name:name, tel:putTel, mail:mail});
  }

}
