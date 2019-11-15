import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeadComponent } from './head/head.component';
import { BodyComponent } from './body/body.component';
import { ShareService } from './share.service';

import { HttpClientModule } from '@angular/common/http';  //http
import {WebDbService} from './web-db.service';  //웹DB
import {InMemoryWebApiModule} from 'angular-in-memory-web-api';  //DB구현 모듈

const ShareData = [
  {type:'A', url: '/test/user'},
  {type:'B', url: '/test/dash'}
]

@NgModule({
  declarations: [
    AppComponent,
    HeadComponent,
    BodyComponent
  ],
  imports: [
    BrowserModule,
    InMemoryWebApiModule.forRoot(WebDbService,{delay:500,put204:false}),  //DB구현 모듈 추가
    HttpClientModule  //HTTP 연결
  ],
  providers: [{provide: 'hodu', useValue: ShareData}, ShareService],
  bootstrap: [AppComponent]
})
export class AppModule { }
