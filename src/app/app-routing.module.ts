import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasketsComponent } from './basketsComponet/baskets.component';
import { DataContributionComponent } from './Contribution/data-contribution.component';

const routes: Routes = [
  { path: 'data-contribution', component: DataContributionComponent },
  { path: 'baskets', component: BasketsComponent },

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
