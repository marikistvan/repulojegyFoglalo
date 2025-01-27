import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { NativeScriptCommonModule } from '@nativescript/angular'

import { BasketRoutingModule } from './basket-routing.module'
import { BasketComponent } from './basket.component'

@NgModule({
  imports: [NativeScriptCommonModule, BasketRoutingModule],
  declarations: [BasketComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class BasketModule {}
