import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppComponent } from './app.component';
import { OthertabsComponent } from './othertabs/othertabs.component';
import { ViewcandComponent } from './dashboard/viewcand/viewcand.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { SearchComponent } from './dashboard/search/search.component';
import { AddcandComponent } from './dashboard/addcand/addcand.component';
import { TrendsComponent } from './dashboard/trends/trends.component';


const routes: Routes = [
 // {path:'',redirectTo:'/AUhome',pathMatch:'full'},
  {path:'AUhome',component:AppComponent},
  {path:'aboutus',component: AboutusComponent},
  {path:'others',component:OthertabsComponent},
  {path:'viewcandidate',component:ViewcandComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'search',component:SearchComponent},
  {path:'addcandidate',component:AddcandComponent},
  {path:'viewtrends',component:TrendsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
