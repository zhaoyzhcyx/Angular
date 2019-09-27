import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LazyLoadComponent} from './lazyload.component';

const routes: Routes = [
  {
    path: 'order',
    loadChildren: () => import('./order/order.module').then(mod => mod.OrderModule)
  },
  {
    path: '',
    component: LazyLoadComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazyLoadRoutingModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/