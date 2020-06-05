import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { UserserviceService } from 'src/app/userservice.service';

@Component({
  selector: 'app-trends',
  templateUrl: './trends.component.html',
  styleUrls: ['./trends.component.css']
})
export class TrendsComponent implements OnInit {

  title="Number of Grads in Different Locations";
  chart=[];
  chartdata:any;
  chartskilldata:any;
  a:number;
  b:number;
  c:number;
  d:number;
  e:number;
  f:number;
  g:number;
  h:number;
  i:number;
  j:number;
  check:boolean;
  check2:boolean;
  
  constructor(private service: UserserviceService) { }

  ngOnInit(): void {
    this.check=false;
    this.check2=false;
    let resp=this.service.chartlocation();
    resp.subscribe((data)=> this.chartdata=data);
    let resp2=this.service.chartskill();
    resp2.subscribe((data)=> this.chartskilldata=data);
    this.check=true;
    this.check2=true;
  }

 charta(val){
this.a=val;
console.log(this.a);
  }
  chartb(val) {
  this.b=val;
  console.log(this.b);
   }
   chartc(val){
    this.c=val;
    console.log(this.c);
    }
    chartd(val){
    this.d=val;
    console.log(this.d);
    }
    charte(val){
    this.e=val;
    console.log(this.e);
    this.check=false;
    this.callchart();
    }

    chartf(val){
      this.f=val;
      console.log(this.f);
        }
        chartg(val) {
        this.g=val;
        console.log(this.g);
         }
         charth(val){
          this.h=val;
          console.log(this.h);
          }
          charti(val){
          this.i=val;
          console.log(this.i);
          }
          chartj(val){
          this.j=val;
          console.log(this.j);
          this.check2=false;
          this.callchart2();
          }
    


  callchart(){
     this.chart=new Chart('canvas',{
      type:'line',
      data: {
        labels : ['Bangalore','Mumbai','Chennai','Hyderabad','Gurugram'],
        datasets : [
          {
            label : 'Grads',
            data : [this.a,this.b,this.c,this.d,this.e],
            borderColor:'green',
            backgroundColor:'green',
            fill:false
          }]
      },
      options: {
        responsive:true,
        scales: {
          xAxes: [{
            scaleLabel: {
              display:true,
              labelString: 'Locations'
            },
            ticks: {
              major: {
                fontStyle:'bold',
                fontColor:'red'
              }
            }
          }],
          yAxes: [{
            scaleLabel: {
              display:true,
              labelString: 'Number of Grads'
            },
            ticks: {
              major: {
                fontStyle:'bold',
                fontColor:'red'
              }
            }
          }]
        }
      }
    })
}

callchart2(){
  this.chart=new Chart('canvas2',{
   type:'line',
   data: {
     labels : ['CPP','Java','Python','Angular','Spring'],
     datasets : [
       {
         label : 'Grads',
         data : [this.f,this.g,this.h,this.i,this.j],
         borderColor:'violet',
         backgroundColor:'violet',
         fill:false
       }]
   },
   options: {
     responsive:true,
     scales: {
       xAxes: [{
         scaleLabel: {
           display:true,
           labelString: 'Skills'
         },
         ticks: {
           major: {
             fontStyle:'bold',
             fontColor:'red'
           }
         }
       }],
       yAxes: [{
         scaleLabel: {
           display:true,
           labelString: 'Number of Grads'
         },
         ticks: {
           major: {
             fontStyle:'bold',
             fontColor:'red'
           }
         }
       }]
     }
   }
 })


}





}
