import { Component, OnInit } from '@angular/core';
import { StorageServiceService } from '../storage-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-accepted',
  templateUrl: './order-accepted.component.html',
  styleUrls: ['./order-accepted.component.css']
})
export class OrderAcceptedComponent implements OnInit {

  constructor(private strSrv:StorageServiceService, private router:Router) { }

  fullOrder:any = {
    name:'', phone:'', email:'', city:'', add:'', pCode:'' 
  };
  keysArr = [];
  valuesArr = [];

  fullOrderArr = [];

  ngOnInit() {
    for(var e in this.fullOrder){
      this.fullOrder[e] = this.strSrv.getFromStorage(e);
    }
    this.keysArr = Object.keys(this.fullOrder);
    this.valuesArr = Object.values(this.fullOrder);
    this.keysArr.forEach((element, index) => {
      this.fullOrderArr.push({key: element, value: this.valuesArr[index]});
      
    });
  }

  gotoBeginning(){
    this.router.navigate(['/']);

  }


  


}
