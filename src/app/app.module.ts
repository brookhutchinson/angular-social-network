// modules
import { NgModule }                from '@angular/core';
import { AppRoutingModule }        from './app-routing.module';
import { BrowserModule }           from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule }             from '@angular/forms';
import { HttpClientModule }        from '@angular/common/http';
import { MatButtonModule,
         MatCardModule,
         MatInputModule }          from '@angular/material';

// components
import { AppComponent }            from './app.component';
import { PostCreateComponent }     from './components/post-create/post-create.component';

@NgModule({
  // modules
  imports: [
             AppRoutingModule, BrowserModule, BrowserAnimationsModule, FormsModule, HttpClientModule,
             MatButtonModule, MatCardModule, MatInputModule
           ],
  // components
  declarations: [ AppComponent, PostCreateComponent ],
  // services
  providers: [],
  // bootstrap
  bootstrap: [ AppComponent ]
})
export class AppModule {}