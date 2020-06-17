import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-candidatetab',
  templateUrl: './candidatetab.component.html',
  styleUrls: ['./candidatetab.component.css']
})
export class CandidatetabComponent implements OnInit {

 
  constructor(private router:Router) { }

  ngOnInit(): void {
    this.router.navigateByUrl('/search');
  }
  searchcand(){

  }
  addcand(){

  }
  viewcand(){

  }
  viewtrend(){

  }
}
