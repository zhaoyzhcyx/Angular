import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyLoadRoutingModule } from './lazyload-routing.module';
import { LazyLoadComponent} from './lazyload.component';

@NgModule({
  imports: [
    CommonModule,
    LazyLoadRoutingModule
  ],
  declarations: [
    LazyLoadComponent
  ]
})
export class LazyLoadModule { }
