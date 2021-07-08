import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Header1Component } from './components/header1/header1.component';

const COMPONENTS = [
  Header1Component
];

@NgModule({
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
  imports: [
    CommonModule
  ]
})
export class ThemeModule { }
