import { NONE_TYPE } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ChartConfiguration, ChartData, ChartOptions } from 'chart.js';
import { Card } from '../card';
import { ChartType } from 'chart.js';
//import { MultiDataSet, Label, PluginServiceGlobalRegistrationAndOptions } from 'ng2-charts';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  byMonth=true;
  byWeek= false;

  

  //card
  cardtitle: string[] = ['the number of agents', 'the number of consumers'];

  cardContent :Card[]=[
    { title:"Total number of consumers", total:1000},
    { title:"Total number of Agents", total:400},
    {title:"Total Referral codes", total:6000},
    {title:"Total offers", total:5000}
  ];
  //card

  //line charts
  title = 'charts';

  public MonthlyData: ChartConfiguration<'line'>['data'] = {
    labels: [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'august'
    ],
    datasets: [
      {
        data: [ 65, 59, 80, 81, 56, 55, 40,36],
        label: 'Monthly Status' ,
        fill: false,
        tension: 0.5,
        borderColor: 'cyan',
        backgroundColor: ''
      }
    ]
  };

  public WeeklyData: ChartConfiguration<'line'>['data']={
    labels:[
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday'
    ],
    datasets:[
      {
        data: [ 65, 59, 80, 81, 56, 55, 40,36],
        label: 'Weekly Status',
        fill: false,
        tension: 0.5,
        borderColor: 'grey',
        backgroundColor: ''

      }
    ]
  };


  public lineChartOptions: ChartOptions<'line'> = {
    responsive: false
  };
  public lineChartLegend = true;

  //line chart ends

//doughnut chart starts


  // Doughnut
  public agentConsumerChartLabels:string[] = ['Agents', 'Consumers'];
  public agentConsumerData:ChartData = 
  {
       datasets:[
        {
          data:[30,70],

        }
       ],
       labels:['Agents', 'Consumers']
       


  };
  
  public agentConsumerChartOptions:ChartOptions={
    responsive: false
  }

  public exposerChartLabels:string[] = ['Social Media', 'Peer Referral', 'Google Search'];
  public exposerChartData:ChartData = 
  {
       datasets:[
        {
          data:[20,70,10],

        }
       ],
       labels:['Social Media', 'Peer Referral','Google Search']
       


  };
  
  public exposerChartOptions:ChartOptions={
    responsive: false
  }
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }



//doughnut chart ends


//bar chart starts
public barChartOptions: ChartOptions = {
  responsive: true,
};
//public barChartLabels: Label[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
public barChartType: ChartType = 'bar';
public barChartLegend = true;
public barChartPlugins = [];

  public barChartData: ChartData = {
    datasets:[
      {
        data:[650, 599, 805, 818, 567, 555, 404],
        label:'referral-consumer'
      }
    ],
    labels:['ref code 1', 'ref code 2', 'ref code 3', 'ref code 4', 'ref code 5', 'ref code 6', 'ref code 7']

  };


//bar chart ends



  constructor() {
  }

  ngOnInit() {
  }

  monthly(){
    this.byWeek=false;
    this.byMonth=true;
  }

  weekly(){
    this.byWeek=true;
    this.byMonth=false;
  }
}
