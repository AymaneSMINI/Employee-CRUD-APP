import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditEmplComponent } from './edit-empl/edit-empl.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
