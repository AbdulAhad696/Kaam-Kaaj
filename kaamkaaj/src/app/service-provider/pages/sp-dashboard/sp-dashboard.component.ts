import { Component, OnInit } from '@angular/core';
import { globalcomponent } from 'src/app/objects/global';

@Component({
  selector: 'app-sp-dashboard',
  templateUrl: './sp-dashboard.component.html',
  styleUrls: ['./sp-dashboard.component.css']
})
export class SpDashboardComponent implements OnInit {
  public currency = globalcomponent.currency
  constructor() { }

  ngOnInit(): void {
  }
  earnLineChart=
    {

      
      axisX: {
        valueFormatString: "MMM",
        interval:1,
        intervalType: "month"
      },
      axisY:{
        includeZero: false

      },
      data: [
      {
        type: "line",

        dataPoints: [
        { x: new Date(2012, 0, 1), y: 450 },
        { x: new Date(2012, 1, 1), y: 414 , indexLabel: "lowest",markerColor: "DarkSlateGrey", markerType: "cross"},
          { x: new Date(2012, 2, 1), y: 520, indexLabel: "highest",markerColor: "red", markerType: "triangle"},
        { x: new Date(2012, 3, 1), y: 460 },
        { x: new Date(2012, 4, 1), y: 450 },
        { x: new Date(2012, 5, 1), y: 500 },
        ]
      }
      ]
    };

  bidBarChart=
    {

      axisX: {
        valueFormatString: "MMM",
        interval: 1,
        intervalType: "month"
      },

      data: [
      {
        type: "stackedBar",
        legendText: "meals",
        showInLegend: "true",
        dataPoints: [
        { x: new Date(2012, 1, 1), y: 71 },
        { x: new Date(2012, 2, 1), y: 55},
        { x: new Date(2012, 3, 1), y: 50 },
        { x: new Date(2012, 4, 1), y: 65 },
        { x: new Date(2012, 5, 1), y: 95 }

        ]
      },
        {
        type: "stackedBar",
        legendText: "snacks",
        showInLegend: "true",
        dataPoints: [
        { x: new Date(2012, 1, 1), y: 71 },
        { x: new Date(2012, 2, 1), y: 55},
        { x: new Date(2012, 3, 1), y: 50 },
        { x: new Date(2012, 4, 1), y: 65 },
        { x: new Date(2012, 5, 1), y: 95 }

        ]
      },
        {
        type: "stackedBar",
        legendText: "drinks",
        showInLegend: "true",
        dataPoints: [
        { x: new Date(2012, 1, 1), y: 71 },
        { x: new Date(2012, 2, 1), y: 55},
        { x: new Date(2012, 3, 1), y: 50 },
        { x: new Date(2012, 4, 1), y: 65 },
        { x: new Date(2012, 5, 1), y: 95 }

        ]
      },

        {
        type: "stackedBar",
        legendText: "dessert",
        showInLegend: "true",
        dataPoints: [
        { x: new Date(2012, 1, 1), y: 61 },
        { x: new Date(2012, 2, 1), y: 75},
        { x: new Date(2012, 3, 1), y: 80 },
        { x: new Date(2012, 4, 1), y: 85 },
        { x: new Date(2012, 5, 1), y: 105 }

        ]
      },
        {
        type: "stackedBar",
        legendText: "takeaway",
        showInLegend: "true",
        dataPoints: [
        { x: new Date(2012, 1, 1), y: 20 },
        { x: new Date(2012, 2, 1), y: 35},
        { x: new Date(2012, 3, 1), y: 30 },
        { x: new Date(2012, 4, 1), y: 45 },
        { x: new Date(2012, 5, 1), y: 25 }

        ]
      }

      ]
    };

}
