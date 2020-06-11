import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { UserserviceService } from 'src/app/userservice.service';

@Component({
  selector: 'app-trends',
  templateUrl: './trends.component.html',
  styleUrls: ['./trends.component.css']
})
export class TrendsComponent implements OnInit {

  constructor(private service: UserserviceService){}
  view: any[] = [600, 400];
  trends:any;
  trends2:any;
  single;
  single2;


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
  colorScheme = {
    domain: ['violet','blue','green','orange','yellow']
  };

  colorScheme2 = {
    domain: ['indigo','red','grey','pink','brown']
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


  }
}

 





