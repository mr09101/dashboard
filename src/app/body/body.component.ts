import { Component, OnInit, Input, Inject } from '@angular/core';
import { ShareService } from '../share.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  private code: any;
  private service: ShareService;

  constructor(@Inject('hodu') alias, serve: ShareService) {

    this.code = alias;
    this.service = serve;
  }

  private list : any;  //user 데이터를 그려줄 리스트
  private list2 : any;  //dash 데이터를 그려줄 리스트

  @Input()  set getShowType(arg: any) {
    this.code.forEach((item, index) => {    // 배열  1: A타입 2: B타입  for 문
      if (item.type == arg){
        this.service.getData(item.url, {}, (result)=>{
          if(index == 0){  //A값이면
            this.list = result;
            this.list2 = null;
          } else {  //B값이면
            this.list = null;
            this.list2 = result;
          }
        });
      }
    });
  } // 아까 @Output의 반대




ngOnInit() {
  }

}
