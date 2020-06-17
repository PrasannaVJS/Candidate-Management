import { Component, OnInit } from '@angular/core';
import { User } from '../../user';
import { User2 } from '../../user2';
import { UserserviceService } from '../../userservice.service';
import { NgForm, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-addcand',
  templateUrl: './addcand.component.html',
  styleUrls: ['./addcand.component.css']
})
export class AddcandComponent implements OnInit {

    Loc=["Bangalore","Mumbai","Chennai","Hyderabad","Gurugram"];
    Role=["Intern","Employee","Manager","HR"];
    Skills=["C++","Java","Python","Angular","Spring"];
    hasError=true;
    errorMsg="";
    returnMsg:any;
    returndisp:boolean;
    userModel:User2;
    constructor(private serv: UserserviceService,private router:Router) { }
  
    ngOnInit(): void {
      this.returndisp=false;
      this.userModel =new User2('','','','','','','','',1234567890,false,false,false,false,false);
    }
  
  
  public enrollNow(candForm:NgForm){
   this.errorCheck();
    if (this.hasError==false){
      console.log(this.userModel);
      this.errorMsg="";
    let resp=this.serv.doEnroll(this.userModel);
    resp.subscribe((data)=> this.returnMsg=data);
     alert("Candidate Successfully added");
this.reset(candForm);
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
  

