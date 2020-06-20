import { Component, OnInit } from '@angular/core';
import { UserserviceService } from 'src/app/userservice.service';
import { Router } from '@angular/router';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-testcomponent',
  templateUrl: './testcomponent.component.html',
  styleUrls: ['./testcomponent.component.css']
})
export class TestcomponentComponent implements OnInit {
  showModal:boolean;
  Loc=["Bangalore","Mumbai","Chennai","Hyderabad","Gurugram"];
  Role=["Intern","Employee","Manager","HR"];
  grads:any;
  grad:any;
  set:number;
  id:number;
  page:number;
  pageSize:number;
  userdata:any;
  user:any;
  space:String=" ";
  deleteModal:boolean;
  //totalrecords:number;
  constructor(private service: UserserviceService,private router: Router) { }

  ngOnInit(): void {
    this.showModal=false;
    this.deleteModal=false;
    this.page=1;
    this.pageSize=5;
    let resp=this.service.getAllUsers();
    resp.subscribe((data)=> {
      this.grads=data
      console.log(data)
  });
    
  }

  deleteGrad(id:number){
    this.deleteModal=false;
    let resp=this.service.deleteUser(id);
    resp.subscribe((data)=> this.grads=data);
  }

  gradupdate(id){
    let disp=this.service.getUser(id);
    disp.subscribe((data)=>this.userdata=data);
    this.showModal=true;
    //this.router.navigate(['update', id]);
  }

  deletegraddetails(id){
    let disp=this.service.getUser(id);
    disp.subscribe((data)=> this.userdata=data);
    this.set=id;
    this.deleteModal=true;
  }


  updatedetails(id,user){
    this.showModal=false;
    console.log(id);
    console.log(user);
    let resp=this.service.updateUser(id,user);
    resp.subscribe((data)=> this.grads=data);
  }

  cancelMethod(){
    this.showModal=false;
    let resp=this.service.getAllUsers();
    resp.subscribe((data)=> {
      this.grads=data
      //console.log(data)
  });
  }

  searchcand(){
    this.router.navigateByUrl('/search');
      }
      addcand(){
        this.router.navigateByUrl('/addcandidate');
      }
      viewcand(){
        this.router.navigateByUrl('/viewcandidate');
      }
      viewtrend(){
        this.router.navigateByUrl('/viewtrends');
      }



}
