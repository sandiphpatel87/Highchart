import { LightningElement } from 'lwc';
import { loadScript } from 'lightning/platformResourceLoader';
import HIGHCHARTS from '@salesforce/resourceUrl/Highcharts'; // Import the static resource

export default class InteractivePieCharts extends LightningElement {
    highchartsInitialized = false;
    chart;
    currentDataset = 'dataset1'; // Default dataset

    // Dropdown options
    datasetOptions = [
        { label: 'Browser Market Share', value: 'dataset1' },
        { label: 'Global Market Distribution', value: 'dataset2' },
        { label: 'Device Usage', value: 'dataset3' }
    ];

    // Sample datasets for pie charts
    datasets = {
        dataset1: [
            { name: 'Chrome', y: 61.41 },
            { name: 'Internet Explorer', y: 11.84 },
            { name: 'Firefox', y: 10.85 },
            { name: 'Edge', y: 4.67 },
            { name: 'Safari', y: 4.18 },
            { name: 'Other', y: 7.05 }
        ],
        dataset2: [
            { name: 'North America', y: 35 },
            { name: 'Europe', y: 30 },
            { name: 'Asia', y: 20 },
            { name: 'South America', y: 10 },
            { name: 'Africa', y: 5 }
        ],
        dataset3: [
            { name: 'Mobile', y: 55 },
            { name: 'Desktop', y: 35 },
            { name: 'Tablet', y: 10 }
        ]
    };

    renderedCallback() {
        if (this.highchartsInitialized) {
            return;
        }
        this.highchartsInitialized = true;

        // Load Highcharts from the static resource
        loadScript(this, HIGHCHARTS)
            .then(() => {
                console.log('Highcharts loaded successfully');
                this.initializeChart();
            })
            .catch(error => {
                console.error('Error loading Highcharts', error);
            });
    }

    initializeChart() {
        const container = this.template.querySelector('.chart-container');
        this.chart = Highcharts.chart(container, {
            chart: {
                type: 'pie' // Pie chart type
            },
            title: {
                text: 'Browser Market Share' // Default title
            },
            tooltip: {
                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: true,
                        format: '<b>{point.name}</b>: {point.percentage:.1f} %'
                    },
                    showInLegend: true
                }
            },
            series: [{
                name: 'Share',
                colorByPoint: true,
                data: this.datasets[this.currentDataset] // Load default dataset
            }]
        });
    }

    // Handle dataset change
    handleDatasetChange(event) {
        this.currentDataset = event.detail.value; // Update selected dataset
        this.updateChart();
    }

    // Update chart with new dataset
    updateChart() {
        this.chart.update({
            title: {
                text: this.getChartTitle(this.currentDataset) // Update chart title
            },
            series: [{
                data: this.datasets[this.currentDataset] // Update chart data
            }]
        });
    }

    // Get chart title based on dataset
    getChartTitle(dataset) {
        switch (dataset) {
            case 'dataset1':
                return 'Browser Market Share';
            case 'dataset2':
                return 'Global Market Distribution';
            case 'dataset3':
                return 'Device Usage';
            default:
                return 'Pie Chart';
        }
    }
}