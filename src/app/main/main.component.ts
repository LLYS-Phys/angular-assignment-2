import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  username = ''

  constructor() { }

  ngOnInit(): void {
  }

  isStringEmpty(){
    if (this.username == ''){
      return true
    }
    else{
      return false
    }
  }

  onClickEvent(){
    this.username = ''
  }

}
