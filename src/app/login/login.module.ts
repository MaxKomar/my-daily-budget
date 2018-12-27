import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './login-page/login-page.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import {LoginRoutingModule} from './login-routing.module';

@NgModule({
  declarations: [LoginPageComponent, LoginFormComponent, RegisterPageComponent],
  imports: [
    CommonModule,
    LoginRoutingModule
  ]
})
export class LoginModule { }
