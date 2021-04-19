import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { CardComponent } from './card.component';
import { MaterialModule } from 'src/app/material.module';

@NgModule({
  declarations: [CardComponent],
  imports: [CommonModule, IonicModule,MaterialModule],
  exports: [CardComponent],
})
export class CardModule {}
