import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { NativeScriptCommonModule,NativeScriptFormsModule } from '@nativescript/angular'
import { FormsModule } from '@angular/forms';
import { LoginRoutingModule } from './login-routing.module'
import { LoginComponent } from './login.component'
import { DropDownModule } from "nativescript-drop-down/angular";

@NgModule({
  imports: [
    NativeScriptCommonModule,
    NativeScriptFormsModule,
    LoginRoutingModule,
    FormsModule,
    DropDownModule,
  ],
  declarations: [LoginComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class LoginModule {}
