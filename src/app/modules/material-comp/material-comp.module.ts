import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatSliderModule} from '@angular/material/slider';
import {MatToolbarModule} from '@angular/material/toolbar';


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [MatToolbarModule, MatSliderModule,]
})
export class MaterialCompModule { }
