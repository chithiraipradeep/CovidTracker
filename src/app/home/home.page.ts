import { Component } from "@angular/core";
import { ApiService } from "../provider/api.service";
import { NavController } from "@ionic/angular";
import {Router,NavigationExtras} from '@angular/router';

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
})
export class HomePage {
  displayedColumns: string[] = ["state", "confirmed", "recovered", "deaths"];
  public dataSource: any = [];
  selectedIndex: any;
  totalCase: any = [];
  resultData: any = [];

  finaldata: any = [];

  constructor(private apiservice: ApiService, private navCtrl: NavController,private router:Router) {}
  ionViewWillEnter() {
    this.apiservice.getStateData().subscribe((response: any) => {
      this.resultData = response.statewise;
      this.resultData.forEach((data, index) => {
        if (data.state == "Total") {
          this.totalCase = data;
          console.log(this.totalCase);
          this.resultData.splice(index, 1);
        }
      });

       this.finaldata=["confirmed","recovered","deaths"];
      
      // this.finaldata = [
      //   {
      //     class: "confirmed",
      //      case: this.totalCase.confirmed,
      //      footer: "Confirmed",
      //   },
      //   {
      //     class: "recovered",
      //     case: this.totalCase.recovered,
      //     footer: "recovered",
      //   },
      //   {
      //     class: "deaths",
      //     case: this.totalCase.deaths,
      //     footer: "deaths",
      //   },
      // ];

      console.log(this.totalCase);
      console.log(this.resultData);
      this.dataSource = this.resultData;
    });
  }

  getSelected(i, data) {
    console.log(data);
    this.selectedIndex = i;
    this.apiservice.state = data;
    this.navCtrl.navigateForward("/state-list");
  }

  stateclicked(event) {
    console.log(event.value);
    this.apiservice.state = event.value;
  
    // this.router.navigateForward("/state-list");

let data:NavigationExtras={
  queryParams:{
    state:JSON.stringify(event.value)
  }
}
this.router.navigate(['state-list'],data);


  }
}
