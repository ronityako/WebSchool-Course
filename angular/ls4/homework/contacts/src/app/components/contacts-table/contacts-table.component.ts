import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-contacts-table',
  templateUrl: './contacts-table.component.html',
  styleUrls: ['./contacts-table.component.css']
})
export class ContactsTableComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() contactsList:any[] = [];
}
