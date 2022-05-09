import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormProductComponent } from './form-product/form-product.component';
import { ListPorductComponent } from './list-porduct/list-porduct.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {path:'home', component:ListPorductComponent}, 
  {path:'addProduct', component:FormProductComponent}, 
  {path:'**', component:NotFoundComponent}, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
