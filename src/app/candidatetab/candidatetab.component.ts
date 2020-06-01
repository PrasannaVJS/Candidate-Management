import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-candidatetab',
  templateUrl: './candidatetab.component.html',
  styleUrls: ['./candidatetab.component.css']
})
export class CandidatetabComponent implements OnInit {

  searchtab:true;
  constructor() { }

  ngOnInit(): void {
  }

  options=["By ID","By Name","By Location"];
}
