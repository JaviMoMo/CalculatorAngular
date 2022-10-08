import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { CalculatorComponent } from 'src/app/components/calculator/calculator.component';


@NgModule({
  declarations: [
    HomeComponent,
    CalculatorComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
