import { Component, OnInit } from '@angular/core';
import { UserserviceService } from 'src/app/userservice.service';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  page:number;
  pageSize:number;
  type:any;
  input:any;
  grads:any;
  grad:any;
  searchtype:any;
  searchcontent:any;
 // idtable:boolean;
  //gradtable:boolean;
  options=["By Role","By Location","By Skill"];
  
  constructor(private service:UserserviceService) { }

  ngOnInit(): void {
    //this.idtable=false;
    //this.gradtable=true;
    this.page=1;
    this.pageSize=5;
  }

  searchGrad(searchtype,searchcontent){
    console.log(searchtype);
    console.log(searchcontent);
    this.page=1;
    if(this.searchtype=="By Location"){
      //this.idtable=false;
      //this.gradtable=true;
      let resp=this.service.searchByLocation(searchcontent);
      resp.subscribe((data)=> this.grads=data);
    }
    else if(this.searchtype=="By Role"){
      //this.idtable=false;
      //this.gradtable=true;
      let resp=this.service.searchByJob(searchcontent);
      resp.subscribe((data)=> this.grads=data);
    }
    else if(this.searchtype=="By Skill"){
     let resp=this.service.searchBySkill(searchcontent);
     resp.subscribe((data)=> this.grads=data);
    }
    /* else if(this.searchtype=="By ID"){
      this.gradtable=false;
      this.idtable=true;
      let resp=this.service.getUser(searchcontent);
      resp.subscribe((data)=> this.grad=data);
    } */
  }
}
