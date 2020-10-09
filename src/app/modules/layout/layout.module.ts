import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {MaterialCompModule} from '../material-comp/material-comp.module';
import { DrawerContainerComponent } from './drawer-container/drawer-container.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, DrawerContainerComponent],
  imports: [
    CommonModule,
    MaterialCompModule,
  ],
  exports:[HeaderComponent, FooterComponent, DrawerContainerComponent]
})
export class LayoutModule { }
