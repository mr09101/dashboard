import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dashboard';
 constructor(){}

  private showType: any; // body 컴포넌트한테 전해줄 데이터

  getEventFromHead(event) { // head 컴로넌트로 부터 데이터를 받기위한 메소드 
    console.log(event);
    this.showType = event; // body 컴포넌트한테 줄 데이터를 변경하는 부분
  }
}
