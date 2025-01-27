import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { NativeScriptModule } from '@nativescript/angular'
import { NativeScriptUISideDrawerModule } from 'nativescript-ui-sidedrawer/angular'
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module'
import { firebase } from '@nativescript/firebase-core';
import { DropDownModule } from "nativescript-drop-down/angular";
import { AppComponent } from './app.component'
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http'; 
import { ReactiveFormsModule } from '@angular/forms';
import { NativeScriptDateTimePickerModule } from "@nativescript/datetimepicker/angular";


@NgModule({
  bootstrap: [AppComponent],
  imports: [AppRoutingModule, NativeScriptModule, ReactiveFormsModule, NativeScriptUISideDrawerModule,DropDownModule,FormsModule,HttpClientModule,NativeScriptDateTimePickerModule ],
  declarations: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {
  constructor() {
    firebase()
      .initializeApp()
      .then(() => console.log('Firebase initialized successfully'))
      .catch((error) => console.error('Firebase initialization failed:', error));
  }
}