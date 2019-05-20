import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuTopComponent } from './views/menu/menu-top/menu-top.component';
import { SignupComponent } from './views/admin/signup/signup.component';
import { LoginComponent } from './views/admin/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuTopComponent,
    SignupComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
