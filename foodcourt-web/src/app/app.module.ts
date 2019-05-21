import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuTopComponent } from './views/menu/menu-top/menu-top.component';
import { SignupComponent } from './views/admin/signup/signup.component';
import { LoginComponent } from './views/admin/login/login.component';
import { RouterModule } from '@angular/router';
import { PasswordRecoveryComponent } from './views/admin/password-recovery/password-recovery.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuTopComponent,
    SignupComponent,
    LoginComponent,
    PasswordRecoveryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      //admin
      { path: '', component: LoginComponent },
      { path: 'signup', component: SignupComponent },
      { path: 'login', component: LoginComponent },
      { path: 'passwordRecovery', component: PasswordRecoveryComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
