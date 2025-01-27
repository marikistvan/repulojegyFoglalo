import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { NativeScriptCommonModule,NativeScriptFormsModule } from '@nativescript/angular'
import { HttpClientModule } from '@angular/common/http';
import { HomeRoutingModule } from './home-routing.module'
import { HomeComponent } from './home.component'

@NgModule({
  imports: [NativeScriptCommonModule, HomeRoutingModule,
    HttpClientModule,NativeScriptFormsModule
  ],
  declarations: [HomeComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class HomeModule {}
