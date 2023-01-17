import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandsComponent } from './component/brands/brands.component';
import { SidebarComponent } from './component/sidebar/sidebar.component';

const routes: Routes = [
  {
    path:'brands',component: BrandsComponent
  },
  {
    path:'sidebar',component: SidebarComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
