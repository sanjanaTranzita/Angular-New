import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {
    path:'about',
    component: AboutComponent
  },
   {
    path:'home',
    component: HomeComponent
  },
   {
    path:'user',
    component: UserComponent
  },
  {
    path:'**',
    component: ContactComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
