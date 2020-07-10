import { Component, OnDestroy, Input } from '@angular/core';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent {

  @Input() games: [];
  
  // options
  showXAxis = true;
  showYAxis = true;
  gradient = true;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Games';
  showYAxisLabel = true;
  yAxisLabel = 'Votes';

  colorScheme = 'nightLights';

  // interval;

  constructor() { 

    // this.interval = setInterval( () => {
    //   console.log('tick')
    //   const newResults = [...this.results];
    //   for (const key in newResults) {
    //     newResults[key].value = Math.round( Math.random() * 500 );
    //   }

    //   this.results = [...newResults];
    // }, 1500);

  }

  // ngOnDestroy() {
  //   clearInterval( this.interval );
  // }

  onSelect(event) {
    console.log(event);
  }
}
