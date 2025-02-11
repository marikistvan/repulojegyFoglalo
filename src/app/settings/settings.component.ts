import { Component, OnInit } from '@angular/core'
import { RadSideDrawer } from 'nativescript-ui-sidedrawer'
import { Application } from '@nativescript/core'
import "@nativescript/firebase-auth";
import { firebase } from '@nativescript/firebase-core';
import { AppComponent } from '../app.component';

@Component({

  selector: 'Settings',
  templateUrl: './settings.component.html',
})
export class SettingsComponent implements OnInit {
  auth=firebase().auth();
  constructor(private app: AppComponent) {
    // Use the component constructor to inject providers.
  }

  ngOnInit(): void {
    // Init your component properties here.
  }

  onDrawerButtonTap(): void {
    const sideDrawer = <RadSideDrawer>Application.getRootView()
    sideDrawer.showDrawer()
  }
  signOut():void{
    this.auth.signOut();
    this.app.setTheMenu();
    console.log("ki van jelentkeve!");
  }
}
