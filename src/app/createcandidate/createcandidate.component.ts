import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserserviceService } from '../userservice.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-createcandidate',
  templateUrl: './createcandidate.component.html',
  styleUrls: ['./createcandidate.component.css']
})
export class CreatecandidateComponent implements OnInit {

  Loc=["Bangalore","Mumbai","Chennai","Hyderabad","Gurugram"];
  Role=["Intern","Employee","Manager","HR"];
  Skills=["C++","Java","Python","Angular","Spring"];
  hasError=true;
  errorMsg="";
  returnMsg:any;
  returndisp:boolean;
  constructor(private serv: UserserviceService) { }

  ngOnInit(): void {
    this.returndisp=false;

  }
userModel =new User('','','','','','',1234567890,false,false,false,false,false);

public enrollNow(){
 this.errorCheck();
  if (this.hasError==false){
    console.log(this.userModel);
    this.errorMsg="";
  let resp=this.serv.doEnroll(this.userModel);
  resp.subscribe((data)=> this.returnMsg=data);
  this.returndisp=true;
  //this.errorMsg="Details entered successfully"
  }
  else {
    this.errorMsg="Enter correct Contact Number";
  }
}


public errorCheck(){
  if (this.userModel.contactno==1234567890){
    this.hasError=true;
  }
  else{
    this.hasError=false;
  }
}

reset(candForm : NgForm){
candForm.resetForm();
this.userModel.contactno=1234567890;
this.returndisp=false;
}

}
