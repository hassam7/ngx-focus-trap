import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxFocusTrapModule } from 'ngx-focus-trap';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxFocusTrapModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
