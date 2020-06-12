import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/user';
import { ActivatedRoute, Router } from '@angular/router';
import { UserserviceService } from 'src/app/userservice.service';

@Component({
  selector: 'app-updatecand',
  templateUrl: './updatecand.component.html',
  styleUrls: ['./updatecand.component.css']
})
export class UpdatecandComponent implements OnInit {



  Loc=["Bangalore","Mumbai","Chennai","Hyderabad","Gurugram"];
  Role=["Intern","Employee","Manager","HR"];
  Skills=["C++","Java","Python","Angular","Spring"];
  id: number;
  grad: any;
  userModel:User;
  //updbool:boolean;
  constructor(private route: ActivatedRoute,private router: Router,
    private service:UserserviceService) { }

  ngOnInit() {
    //this.employee = new Employee();
   // this.updbool=true;
    this.id = this.route.snapshot.params['id'];
    
    this.service.getUser(this.id)
      .subscribe(data => {
        console.log(data)
        this.grad = data;//id+userdata
      }, error => console.log(error));
  }

  updateGrad() {
    this.service.updateUser(this.id, this.grad)
      .subscribe(data => console.log(data), error => console.log(error));
    //this.employee = new Employee();
    //this.updbool=false;
    this.gotoList();
  }

  onSubmit() {
    this.updateGrad();    
  }

  gotoList() {
    this.router.navigate(['/view']);
  }

 

}
