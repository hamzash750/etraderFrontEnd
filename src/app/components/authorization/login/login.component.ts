import { Component, OnDestroy, OnInit, AfterViewInit } from '@angular/core';
const url = 'assets/js/mymain.js';
declare var $:any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit,AfterViewInit ,OnDestroy {

  constructor() { }

 
  ngOnInit(): void {
  }
  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
setTimeout(() => {
  this.loadScript();
}, 500);
  }
  public loadScript() {
    let node = document.createElement('script');
    node.src = url;
    node.id="mainScript";
    node.type = 'text/javascript';
    node.async = true;
    node.charset = 'utf-8';
    document.getElementsByTagName('head')[0].appendChild(node);
  }
  ngOnDestroy(): void {
    $('#mainScript').remove();
  }
}