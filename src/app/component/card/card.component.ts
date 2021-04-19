import { Component, OnInit,Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit,OnChanges {
  @Input() class: string;
  @Input() caseData: any;
  @Input() footerData: any;
  
  constructor() { }

  ngOnInit() {

  }
  ngOnChanges(){
    console.log(this.class);
    let data =Object.keys(this.class);
    console.log(data);
  }

}
