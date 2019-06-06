import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  data = 'This Is My Content!!!!';
  color:string;
  bgColor = 'green';

  constructor() { }

  ngOnInit() {
  }

  change1(){
    this.data = 'change1';
    this.color = 'red';
  }
  change2(){
    this.data = 'change2';
    this.color = 'pink';
    
  }
  change3(){
    this.data = 'change3';
    this.color = 'blue';
    
  }

  changeColor(inp:string){
    if(inp.length == 11){
      this.bgColor = 'red';
    }
    if(inp.length == 21){
      this.bgColor = 'black';
    }
    if(inp.length == 0){
      this.bgColor = 'green';
    }


  }

}
