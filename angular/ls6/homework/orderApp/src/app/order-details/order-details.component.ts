import { Component, OnInit } from '@angular/core';
import { StorageServiceService } from '../storage-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {

  order:any = {
    name:'', phone:'', email:''
  };

  constructor(private strSrv:StorageServiceService, private router:Router) { }

  ngOnInit() {
  }

   gotoDeliveryDetails(valid){
    if(valid){
      for(var e in this.order){
        this.strSrv.saveInStorage(e, this.order[e]);
      }
      this.router.navigate(['/delivery-details']);
    }
  }
}
