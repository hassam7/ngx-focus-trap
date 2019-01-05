import { Component, ViewChild } from '@angular/core';
import { NgxFocusTrapDirective } from 'ngx-focus-trap';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
})
export class AppComponent {
  title = 'ngx-focus-trap-app';

  onActivate() {
    console.log('activated');
  }

  onDeactivate() {
    console.log('onDeactivate');
  }
}
