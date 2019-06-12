import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  tasksArr = [];

  taskName:string;
  taskDate:string;
  taskDisc:string;

  constructor() { }

  addTask(){
    console.log('in addTask()');
    this.tasksArr.push({name:this.taskName, date:this.taskDate, disc:this.taskDisc});
    console.log(this.tasksArr);
  }

  ngOnInit() {
  }

}
