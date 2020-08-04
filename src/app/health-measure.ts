export interface HealthMeasure {
    region: string,
    period: number,
    atLeastOneMeasure: number,
    immunizationMeasure: number,
    reportableResultsMeasure: number,
    syndromicSurveillanceMeasure: number,
    registryMeasure: number
}