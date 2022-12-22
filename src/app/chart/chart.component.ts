import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css'],
})
export class ChartComponent implements OnInit {

  ngOnInit() {
    const data = {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [
        {
          label: '# of Votes',
          data: [12, 19, 3, 5, 2, 3],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)',
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
          ],
          borderWidth: 1,
        },
      ],
    };

    const options = {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
      aspectRatio: 2
    };

    var barChart = new Chart('barChart', {
      type: 'bar',
      data: data,
      options: options,
    });
    var bar = document.getElementById('barChart');

    var lineChart = new Chart('lineChart', {
      type: 'line',
      data: data,
      options: options,
    });
    var line = document.getElementById('lineChart');

    var pieChart = new Chart('pieChart', {
      type: 'pie',
      data: data,
      options: options,
    });
    var pie = document.getElementById('pieChart');

    var doughnutChart = new Chart('doughnutChart', {
      type: 'doughnut',
      data: data,
      options: options,
    });
    var doughnut = document.getElementById('doughnutChart');

    var bubbleChart = new Chart('bubbleChart', {
      type: 'bubble',
      data: data,
      options: options,
    });
    var bubble = document.getElementById('bubbleChart');
  }
}
