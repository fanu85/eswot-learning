import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {MaterialCompModule} from '../material-comp/material-comp.module';

@NgModule({
  declarations: [HeaderComponent, FooterComponent],
  imports: [
    CommonModule,
    MaterialCompModule,
  ],
  exports:[HeaderComponent, FooterComponent]
})
export class LayoutModule { }
