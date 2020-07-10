import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxChartsModule } from '@swimlane/ngx-charts';
const MODULES =  [
  CommonModule,
  RouterModule,
  BrowserAnimationsModule,
  NgxChartsModule,
]
// Components
import { NavbarComponent } from './navbar/navbar.component';
import { ChartComponent } from './chart/chart.component';
const COMPONENTS = [
  NavbarComponent,
  ChartComponent,
];

@NgModule({
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
  imports: [...MODULES],
})
export class ComponentsModule { }
