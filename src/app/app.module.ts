// modules
import { NgModule }                from '@angular/core';
import { AppRoutingModule }        from './app-routing.module';
import { BrowserModule }           from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule }             from '@angular/forms';
import { HttpClientModule }        from '@angular/common/http';

// components
import { AppComponent }            from './app.component';

@NgModule({
  // modules
  imports: [ AppRoutingModule, BrowserModule, BrowserAnimationsModule, FormsModule, HttpClientModule ],
  // components
  declarations: [ AppComponent ],
  // services
  providers: [],
  // bootstrap
  bootstrap: [ AppComponent ]
})
export class AppModule {}