import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { UserserviceService } from 'src/app/userservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-trends',
  templateUrl: './trends.component.html',
  styleUrls: ['./trends.component.css']
})
export class TrendsComponent implements OnInit {

  constructor(private service: UserserviceService,private router:Router){}
  view: any[] = [600, 400];
  trends:any;
  trends2:any;
  trends3:any;
  single;
  single2;
  single3;


  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel1 = 'Locations';
  showYAxisLabel = true;
  yAxisLabel1 = 'Number of Candidates';
  timeline = true;
  xAxisLabel2 = 'Skills';
  yAxisLabel2 = 'Number of Candidates';
  xAxisLabel3 = 'Designation';
  yAxisLabel3 = 'Number of Candidates';
  colorScheme = {
    domain: ['violet','blue','green','orange','yellow']
  };

  colorScheme2 = {
    domain: ['indigo','red','grey','pink','brown']
  };

  colorScheme3 = {
    domain: ['blue','red','green','yellow']
  };

 
  showLabels = true;

  ngOnInit():void {
    this.service.chartLocation().subscribe((trends:any[])=> {
      console.log(trends)
      let data:any[]=[];
      for (let trend of trends){
        data.push({
          "name":trend.loc,
          "value":trend.count
        })
      }
      this.single=data;
    });

    this.service.chartSkill().subscribe((trends2:any[])=> {
      console.log(trends2)
      let data:any[]=[];
      for (let trend2 of trends2){
        data.push({
          "name":trend2.sname,
          "value":trend2.gradcount
        })
      }
      this.single2=data;
    });

    this.service.chartPosition().subscribe((trends3:any[])=> {
      console.log(trends3)
      let data:any[]=[];
      for (let trend3 of trends3){
        data.push({
          "name":trend3.pos,
          "value":trend3.poscount
        })
      }
      this.single3=data;
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

 





