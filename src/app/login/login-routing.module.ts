import { NgModule } from '@angular/core'
import { Routes } from '@angular/router'
import { NativeScriptRouterModule } from '@nativescript/angular'
import { NativeScriptDateTimePickerModule } from '@nativescript/datetimepicker/angular'
import { LoginComponent } from './login.component'

const routes: Routes = [{ path: '', component: LoginComponent }]

@NgModule({
  imports: [NativeScriptDateTimePickerModule,
  NativeScriptRouterModule.forChild(routes)],
  })
export class LoginRoutingModule {}