import { Injectable } from '@angular/core';
import {InMemoryDbService} from 'angular-in-memory-web-api';  // 임포트

@Injectable({
  providedIn: 'root'
})
export class WebDbService implements InMemoryDbService  {
  private _database: any; // 데이타베이스

  constructor() { }

  createDb() {
    this._database = {};
    this._database.user = [
      {name: '관리자', data: '2019-01-20', id: 'root'},
      {name: '고급사용자', data: '2019-06-18', id: 'admin'},
      {name: '일반사용자', data: '2019-07-20', id: 'user'}
    ]; // 유저이름 디비
    this._database.dash = [
      {title: 'title -1 ', desc: 'description', date: '2019-05-11'},
      {title: 'title -2 ', desc: 'description', date: '2019-06-11'}
    ]; // dash이름 디비
    return this._database;
  }
}
