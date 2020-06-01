import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreatecandidateComponent } from './createcandidate/createcandidate.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppComponent } from './app.component';
import { CandidatetabComponent } from './candidatetab/candidatetab.component';
import { OthertabsComponent } from './othertabs/othertabs.component';


const routes: Routes = [
  {path: 'cc',component : CreatecandidateComponent},
  {path:'home',component:DashboardComponent},
  {path:'candidate',component:CandidatetabComponent},
  {path:'others',component:OthertabsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
