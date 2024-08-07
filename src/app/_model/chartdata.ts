export interface ChartDataSet {
    data: number[];
    label: string;
    backgroundColor: string[];
    hoverBackgroundColor: string[];
}

export interface ChartData {
    labels: string[];
    datasets: ChartDataSet[];
}