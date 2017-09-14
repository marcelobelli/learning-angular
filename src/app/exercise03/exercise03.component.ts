import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercise03',
  templateUrl: './exercise03.component.html',
  styleUrls: ['./exercise03.component.css']
})
export class Exercise03Component implements OnInit {

  password = 'MyPassword';
  showDetail = false;
  messages = [];

  constructor() { }

  ngOnInit() {
  }

  onClickDetails() {
    this.showDetail = !this.showDetail;
    this.messages.push(this.messages.length + 1);
  }
 
}
