import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class ApiService {
  state:any;
  constructor(private http:HttpClient) {}


getStateData(){
  return this.http.get('https://api.covid19india.org/data.json');
}

getSateDistrictData(){
  return this.http.get('https://api.covid19india.org/state_district_wise.json')
}


}
