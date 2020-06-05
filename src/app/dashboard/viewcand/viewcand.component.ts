import { Component, OnInit } from '@angular/core';
import { UserserviceService } from 'src/app/userservice.service';
import { Router } from '@angular/router';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-viewcand',
  templateUrl: './viewcand.component.html',
  styleUrls: ['./viewcand.component.css']
})
export class ViewcandComponent implements OnInit {
  viewbool:boolean;
  public popoverTitle:string = 'Warning';
  public popoverMessage:string = 'Do you want to delete the record';
  public confirmClicked:boolean=false;
  public cancelClicked:boolean=false;
  Loc=["Bangalore","Mumbai","Chennai","Hyderabad","Gurugram"];
  Role=["Intern","Employee","Manager","HR"];
  grads:any;
  grad:any;
  set:number;
  id:number;
  page:number;
  pageSize:number;
  //totalrecords:number;
  constructor(private service: UserserviceService,private router: Router) { }

  ngOnInit(): void {
    this.viewbool=false;
    this.page=1;
    this.pageSize=5;
    let resp=this.service.getAllUsers();
    resp.subscribe((data)=> {
      this.grads=data
      console.log(data)
  });
    
  }

  deleteGrad(id:number){
    let resp=this.service.deleteUser(id);
    resp.subscribe((data)=> this.grads=data);
  }

  gradupdate(id){
    this.viewbool=true;
    this.set=id;
    //this.router.navigate(['update', id]);
  }


  updatedetails(id,grad){
    this.viewbool=false;
    console.log(id);
    console.log(grad);
    let resp=this.service.updateUser(id,grad);
    resp.subscribe((data)=> this.grads=data);
  }

}
