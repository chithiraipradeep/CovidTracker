import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { TableComponent } from './table.component';
import { MaterialModule } from 'src/app/material.module';

@NgModule({
  declarations: [TableComponent],
  imports: [CommonModule, IonicModule,MaterialModule],
  exports: [TableComponent],
})
export class TableModule {}
