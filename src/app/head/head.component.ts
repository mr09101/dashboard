import { Component, OnInit } from '@angular/core';
import { EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.css']
})
export class HeadComponent implements OnInit {

  @Output() sendToEvent = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  dataType(type: any): void { // 타입을 받는 멧소드
    
    this.sendToEvent.emit(type);
  }

}
