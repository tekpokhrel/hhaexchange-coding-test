import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { HealthMeasure } from './health-measure';

@Injectable({
    providedIn: 'root'
})
export class HealthMeasureService {   

    private healthUrl = 'https://dashboard.healthit.gov/api/open-api.php?source=hospital-mu-public-health-measures.csv';

    constructor( private http: HttpClient ) { }

    getHealthMeasure(year: number): Observable<HealthMeasure[]> {
        return this.http.get<HealthMeasure[]>(this.healthUrl)
        .pipe(
            map(result => result.filter(item => item.period == year))
        );
    }

}
