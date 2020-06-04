import { Component, OnInit } from '@angular/core';
import { UserserviceService } from 'src/app/userservice.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  type:any;
  input:any;
  grads:any;
  grad:any;
  searchtype:any;
  searchcontent:any;
  idtable:boolean;
  gradtable:boolean;
  options=["By Role","By Location"];
  constructor(private service:UserserviceService) { }

  ngOnInit(): void {
    this.idtable=false;
    this.gradtable=true;
  }

  searchGrad(searchtype,searchcontent){
    console.log(searchtype);
    console.log(searchcontent);
    if(this.searchtype=="By Location"){
      this.idtable=false;
      this.gradtable=true;
      let resp=this.service.searchByLocation(searchcontent);
      resp.subscribe((data)=> this.grads=data);
    }
    else if(this.searchtype=="By Role"){
      this.idtable=false;
      this.gradtable=true;
      let resp=this.service.searchByJob(searchcontent);
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
