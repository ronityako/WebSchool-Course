import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TelNumberService {

  constructor() { }

  validateTelNumber(tel:number){
    if(tel.toString().length == 9 || tel.toString().length == 10){
      return true;
    }
    else return false;
  }
}
