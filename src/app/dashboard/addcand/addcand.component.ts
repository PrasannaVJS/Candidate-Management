import { Component, OnInit } from '@angular/core';
import { User } from '../../user';
import { UserserviceService } from '../../userservice.service';


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


  constructor(private serv: UserserviceService) { }

  ngOnInit(): void {
  }

  userModel = new User('','','','','','',1234567890,false,false,false,false,false);

  public enrollNow(){
   this.errorCheck();
    if (this.hasError==false){
      this.errorMsg="";
    this.serv.doEnroll(this.userModel);
    }
    else {
      this.errorMsg="Enter correct Contact Number";
    }
  }
  
  
  public errorCheck(){
    if (this.userModel.contno==1234567890){
      this.hasError=true;
    }
    else{
      this.hasError=false;
    }
  }
  


}
