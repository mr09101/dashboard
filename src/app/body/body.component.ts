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
  @Input()  set getShowType(arg: any) {
    this.code.forEach(item => {    // 배열  1: A타입 2: B타입  for 문
      if (item.type == arg){
        this.service.getData(item.url, {});
      }
    });
  } // 아까 @Output의 반대




ngOnInit() {
  }

}
