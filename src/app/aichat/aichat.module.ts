import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { NativeScriptCommonModule } from '@nativescript/angular'

import { AiChatRoutingModule } from './aichat-routing.module'
import { AiChatComponent } from './aichat.component'

@NgModule({
  imports: [NativeScriptCommonModule, AiChatRoutingModule],
  declarations: [AiChatComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AiChatModule {}
