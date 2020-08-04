import { Component, OnInit } from '@angular/core';
import { HealthMeasureService } from '../health-measure.service';
import { HealthMeasure } from '../health-measure';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

    healthArray: HealthMeasure[];
    statisticsArray = [];
    year = 2015;
    selectedState: string;

    constructor( private healthMeasureService: HealthMeasureService ) { }

    ngOnInit(): void {
        this.getHealthMeasure();
    }

    getHealthMeasure(): void {
        this.healthMeasureService.getHealthMeasure(this.year).subscribe(
            data => { 
                this.healthArray = data;
                console.log("data", this.healthArray);
            }
        );               
    }

    selectedItem(selectedState: string): void {
        this.selectedState = selectedState;
        console.log("selected item", selectedState);
        console.log("array", this.healthArray);
        this.statisticsArray = this.healthArray.filter(
            result => result.region == selectedState
        );

        console.log("Statistic data", this.statisticsArray);
    }

}
