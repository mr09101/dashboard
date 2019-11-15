import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ShareService {

  public shareValue: number = 1004;
  private HTTP : HttpClient;

  constructor(http : HttpClient) { 
    this.HTTP = http;
  }

  getData(url, param, callback){  //가져오는 함수
    this.HTTP.get(url, param).subscribe((res)=>{
      console.log(res);
      callback(res);
    });
  }

  setData(url, param, callback){  //등록하는 함수
    this.HTTP.put(url, param).subscribe((res)=>{
      console.log(res);
      callback(res);
    });
  }
}
