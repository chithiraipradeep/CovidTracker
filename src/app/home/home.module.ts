import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { HomePageRoutingModule } from './home-routing.module';
import { MaterialModule } from '../material.module';
import { CardModule } from '../component/card/card.module';
import { TableModule } from '../component/table/table.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    MaterialModule,
    CardModule,
    TableModule
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
