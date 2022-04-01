import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Docmain1Component } from './docmain1/docmain1.component';

const routes: Routes = [
  {path:'',redirectTo:'docmain1',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
