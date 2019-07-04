import { Component, OnInit } from '@angular/core';
import { StorageServiceService } from '../storage-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delivery-details',
  templateUrl: './delivery-details.component.html',
  styleUrls: ['./delivery-details.component.css']
})
export class DeliveryDetailsComponent implements OnInit {

  delivery:any = {
    city:'', add:'', pCode:''
  };

  constructor(private strSrv:StorageServiceService, private router:Router) { }

  ngOnInit() {
  }

  gotoOrderAccepted(valid){
    if(valid){
      for(var e in this.delivery){
        this.strSrv.saveInStorage(e, this.delivery[e]);
      }
      this.router.navigate(['/order-accepted']);
    }

  }
}
