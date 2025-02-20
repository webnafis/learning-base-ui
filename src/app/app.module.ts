import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module'; // <-- Add this
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent, ],
  imports: [
    BrowserModule,
    AppRoutingModule // <-- Add this line
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 

  // dont use server side rendering cause u dont need it now

}