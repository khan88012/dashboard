import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  home = false;
  configs= false;
  agents=false;
  consumers=false;

  enableHome()
  {
    this.configs=false;
    this.agents=false;
    this.consumers=false;
    this.home=!this.home;
  }

  enableConfigurations(){
    this.home= false;
    this.agents=false;
    this.consumers=false;
    this.configs = !this.configs;
  }
  enableConsumers(){
    this.home= false;
    this.agents=false;
    this.configs=false;
    this.consumers=!this.consumers;
  }
enableAgents(){
  this.home=false;
  this.configs=false;
  this.consumers=false;
  this.agents=!this.agents;
}

  constructor() { }

  ngOnInit(): void {
  }

}
