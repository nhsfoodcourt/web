import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuTopComponent } from './views/menu/menu-top/menu-top.component';
import { SignupComponent } from './views/admin/signup/signup.component';
import { LoginComponent } from './views/admin/login/login.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    MenuTopComponent,
    SignupComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: '', component: LoginComponent },
      { path: 'signup', component: SignupComponent },
      { path: 'login', component: LoginComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
