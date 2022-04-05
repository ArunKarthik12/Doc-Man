import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Docmain1Component } from './docmain1/docmain1.component';
import { Docmain2Component } from './docmain2/docmain2.component';

const routes: Routes = [
  {path:'',redirectTo:'docmain1',pathMatch:'full'},
  {path:'docmain1',component:Docmain1Component},
  {path:'docmain2', component:Docmain2Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
