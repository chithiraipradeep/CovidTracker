import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StateListPageRoutingModule } from './state-list-routing.module';

import { StateListPage } from './state-list.page';
import { MaterialModule } from '../material.module';
import { TableModule } from '../component/table/table.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StateListPageRoutingModule,
    MaterialModule,
    TableModule
  ],
  declarations: [StateListPage]
})
export class StateListPageModule {}
