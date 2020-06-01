import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddcandComponent } from './addcand/addcand.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  hometab: boolean;
  otherstab:boolean;
  candidtab:boolean;
  ccoption:boolean;
  addcandbool:boolean;
  searchbool:boolean;
  constructor(private router:Router) { }

  ngOnInit(): void {
    this.hometab=true;
    this.otherstab=false;
    this.candidtab=false;
    this.ccoption=false;
    this.addcandbool=false;
    this.searchbool=false;
  }

  options=["By ID","By Name","By Location"];

  showhometab(){
    this.searchbool=false;
    this.otherstab=false;
    this.candidtab=false;
    this.hometab=true;

  }

  showotherstab(){
    this.searchbool=false;
    this.hometab=false;
    this.candidtab=false;
    this.otherstab=true;
  }

  showcandidtab(){
    this.hometab=false;
    this.otherstab=false;
    this.addcandbool=false;
    this.candidtab=true;
    this.searchbool=true;
  }

  addcand(){
    this.addcandbool=true;
  }

  searchcand(){
    this.addcandbool=false;
    this.searchbool=true;
  }

  
}
