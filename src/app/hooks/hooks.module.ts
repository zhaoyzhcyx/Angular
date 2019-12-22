import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HooksRoutingModule } from './hooks-routing.module';
import { HooksComponent} from './hooks.component';
import { HooksChildComponent} from './hooks-child.component';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    HooksRoutingModule
  ],
  declarations: [
    HooksComponent,
    HooksChildComponent
  ]
})
export class HooksModule { }
