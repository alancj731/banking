import { Component, Input, AfterViewInit, ElementRef } from '@angular/core';
import { ChartData } from 'chart.js';
import { Chart, registerables } from 'chart.js/auto';
Chart.register(...registerables);

@Component({
  selector: 'app-doughnutchart',
  standalone: true,
  imports: [],
  templateUrl: './doughnutchart.component.html',
  styleUrl: './doughnutchart.component.css',
})
export class DoughnutchartComponent  implements AfterViewInit {
  
  constructor(private elementRef: ElementRef) { }

  @Input() data: ChartData = {
    labels: ['TD Bank', 'BMO Bank', 'CIBC Bank'],
    datasets: [
      {
        data: [1250, 2500, 3750],
        label: 'Banks',
        backgroundColor: ['#0747b6', '#2265d8', '#2f91fa'],
        hoverBackgroundColor: ['#0747b6', '#2265d8', '#2f91fa']
      }
    ]
  };

  RenderChart() {
    var myChart = new Chart('doughnutchart', {
      type: 'doughnut',
      data: this.data,
      options: {
        responsive: true,
        plugins: {
          legend: {
            display: false,
          },
          title: {
            display: false,
          }
        }
      }
    });
  }

  ngAfterViewInit(): void {
    this.RenderChart();
  }
  
}
