import { Component, OnInit } from '@angular/core'
import { NavigationEnd, Router } from '@angular/router'
import { RouterExtensions } from '@nativescript/angular'
import {
  DrawerTransitionBase,
  RadSideDrawer,
  SlideInOnTopTransition,
} from 'nativescript-ui-sidedrawer'
import { filter } from 'rxjs/operators'
import { Application } from '@nativescript/core'
import { firebase } from '@nativescript/firebase-core';
import "@nativescript/firebase-auth";
import "@nativescript/firebase-firestore";
const firestore = firebase().firestore();

@Component({
  selector: 'ns-app',
  templateUrl: 'app.component.html',
})
export class AppComponent implements OnInit {
  user=firebase().auth().currentUser;
  auth = firebase().auth();
  firstname="";
  lastName="";
  fullName="";
  private _activatedUrl: string
  private _sideDrawerTransition: DrawerTransitionBase

  constructor(private router: Router, private routerExtensions: RouterExtensions,) {}

  ngOnInit(): void {
    if(this.user!=null){
      firebase()
      .firestore()
      .collection("users")
      .doc(this.user.uid)
      .get()
      .then((snapshot) => {
        if (snapshot && !snapshot.exists) {
          console.log('Document does not exist')
          return
        }
        this.firstname=snapshot.data()['firstName'];
        this.lastName=snapshot.data()['lastName'];
        this.fullName=this.firstname+' '+this.lastName;
        console.log(
          `Full Name: ${snapshot.data()['firstName']} ${
            snapshot.data()['lastName']
          }`
        )
      });
    }else{
      this.fullName="";
    }

    this._activatedUrl = '/home'
    this._sideDrawerTransition = new SlideInOnTopTransition()

    this.router.events
      .pipe(filter((event: any) => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => (this._activatedUrl = event.urlAfterRedirects))
  }
  setTheMenu():void{
    this.user=firebase().auth().currentUser;
    if(this.user!=null){
      firebase()
      .firestore()
      .collection("users")
      .doc(this.user.uid)
      .get()
      .then((snapshot) => {
        if (snapshot && !snapshot.exists) {
          console.log('Document does not exist')
          return
        }
        this.firstname=snapshot.data()['firstName'];
        this.lastName=snapshot.data()['lastName'];
        this.fullName=this.firstname+' '+this.lastName;
        console.log(
          `Full Name: ${snapshot.data()['firstName']} ${
            snapshot.data()['lastName']
          }`
        )
      });
    }else{
      this.fullName="";
    }
  }

  get sideDrawerTransition(): DrawerTransitionBase {
    return this._sideDrawerTransition
  }

  isComponentSelected(url: string): boolean {

    return this._activatedUrl === url

  }

  onNavItemTap(navItemRoute: string): void {
    this.routerExtensions.navigate([navItemRoute], {
      transition: {
        name: 'fade',
      },
    })
    const sideDrawer = <RadSideDrawer>Application.getRootView()
    sideDrawer.closeDrawer()
  }
  
}
