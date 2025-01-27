import { Component, OnInit } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import { Application } from "@nativescript/core";
import { RouterExtensions } from "@nativescript/angular";
import { EventData, SearchBar } from "@nativescript/core";
import { AmadeusService } from "../AmadeusService";
//import { registerElement } from 'nativescript-angular/element-registry';
import { FilterSelect } from 'nativescript-filter-select';

//registerElement('FilterSelect', () => FilterSelect);


@Component({
  selector: "Home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  destinations: any[] = [];
  hova: "";
  honnan: "";
  selectedDate: Date;
  dateIsOk: boolean;
  datum: "";
  valami: "";
  

  constructor(
    private routerExtensions: RouterExtensions,
    private amadeusService: AmadeusService
  ) {}

  ngOnInit(): void {}
  onDateChange(event: any) {
    this.selectedDate = event.value;
    console.log(event.value);
    const isAdult = this.checkIfOld(this.selectedDate);
    console.log("Elmúlt 18 éves:", isAdult);
    this.dateIsOk = isAdult;
  }
  checkIfOld(elem) {
    return true;
  }
  
  Submit() {
    console.log(`honnan: ${this.honnan}`);
    console.log(`hova: ${this.hova}`);
    console.log(
      `mikor: ${this.selectedDate.getFullYear()} ${
        this.selectedDate.getMonth() + 1
      } ${this.selectedDate.getDate()}`
    );
    let date_String: string =
      this.selectedDate.getFullYear() +
      "-0" +
      (this.selectedDate.getMonth() + 1) +
      "-" +
      +this.selectedDate.getDate();
    this.amadeusService.getToken().subscribe((response) => {
      this.amadeusService.setAccessToken(response.access_token);
      console.log("Token megszerezve:", response.access_token);

      this.amadeusService
        .searchFlights(this.honnan, this.hova, date_String, "30")
        .subscribe(
          (data) => {
            console.log(data);
            console.log(this.legolcsobbut(data));
          },
          (error) => console.error("Hiba:", error)
        );
    });
  }
  legolcsobbut(data): string {
    let min=10000;
    let id=0;
    data.data.forEach(element => {
      if(element.price.total < min){
        min=element.price.total;
        id=element.id;
      }
    });
    return `legolcsóbb út ára: ${min}`;
  }
  onDrawerButtonTap(): void {
    const sideDrawer = <RadSideDrawer>Application.getRootView();
    sideDrawer.showDrawer();
  }
}
