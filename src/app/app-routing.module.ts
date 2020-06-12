import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreatecandidateComponent } from './createcandidate/createcandidate.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppComponent } from './app.component';
import { CandidatetabComponent } from './candidatetab/candidatetab.component';
import { OthertabsComponent } from './othertabs/othertabs.component';
import { UpdatecandComponent } from './dashboard/viewcand/updatecand/updatecand.component';
import { ViewcandComponent } from './dashboard/viewcand/viewcand.component';
import { AboutusComponent } from './aboutus/aboutus.component';


const routes: Routes = [
 // {path:'',redirectTo:'/AUhome',pathMatch:'full'},
  {path:'AUhome',component:AppComponent},
  {path:'aboutus',component: AboutusComponent},
  {path: 'cc',component : CreatecandidateComponent},
  {path:'home',component:DashboardComponent},
  {path:'candidate',component:CandidatetabComponent},
  {path:'others',component:OthertabsComponent},
  {path:'update/:id',component:UpdatecandComponent},
  {path:'view',component:ViewcandComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
