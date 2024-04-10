import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormComponent } from './client/form/form.component';
import { ListComponent } from './client/list/list.component';
import { UpdateComponent } from './client/update/update.component';


const routes: Routes = [
{path:'form',
  component:FormComponent
},
{
  path:'',
  component:ListComponent
},
 {
  path:'getid/:id',
  component:UpdateComponent
 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
