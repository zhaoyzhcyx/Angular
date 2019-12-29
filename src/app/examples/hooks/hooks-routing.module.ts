import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HooksComponent} from './hooks.component';
import { HooksChildComponent} from './hooks-child.component';

const routes: Routes = [
  {
    path: '',
    component: HooksComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HooksRoutingModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/