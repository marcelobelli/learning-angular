import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercise02',
  templateUrl: './exercise02.component.html',
  styleUrls: ['./exercise02.component.css']
})
export class Exercise02Component implements OnInit {
  username = "";
  canSubmit = false;

  constructor() { }

  ngOnInit() {
  }

  onEnableSubmitBtn(event: Event) {
    if (this.username.length > 0) {
      this.canSubmit = true;
    }
    else {
      this.canSubmit = false;
    }
  }

  onClickSubmitBtn() {
    this.username = "";
    this.canSubmit = false;
  }

}
