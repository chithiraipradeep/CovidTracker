import { Component } from "@angular/core";
import { ApiService } from "../provider/api.service";
import { NavController } from "@ionic/angular";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-state-list",
  templateUrl: "./state-list.page.html",
  styleUrls: ["./state-list.page.scss"],
})
export class StateListPage {
  stateData: any = [];
  states: any = [];
  public disctrictData: any = [];
  public dataSource: any = [];
  district: any = [];
  displayedColumns: string[] = ["district", "confirmed", "recovered", "deaths"];
  constructor(
    private apiservice: ApiService,
    private navCtrl: NavController,
    private router: Router,
    private activeRoute: ActivatedRoute
  ) {}

  ionViewWillEnter() {
    this.activeRoute.queryParams
    .subscribe(param => {
      console.log(param);
      if(param.state){
        this.stateData = JSON.parse(param.state);
        console.log(this.stateData);
      }
    });

    // this.stateData = this.apiservice.state;
    let obj = new Object();
    this.apiservice.getSateDistrictData().subscribe((response: any) => {
      this.states = Object.keys(response);
      this.states.forEach((state) => {
        if (state == this.stateData.state) {
          this.district = response[state].districtData;
          let state_district = Object.keys(this.district);
          state_district.forEach((district) => {
            obj = {
              district: district,
              confirmed: this.district[district].confirmed,
              deaths: this.district[district].deceased,
              recovered: this.district[district].recovered,
            };
            this.disctrictData.push(obj);
          });
          this.dataSource = this.disctrictData;
        }
      });
      console.log(this.dataSource);
    });
  }
}
