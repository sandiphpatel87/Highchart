Interactive Pie Charts in Salesforce LWC using Highcharts
This repository demonstrates how to create interactive pie charts in a Lightning Web Component (LWC) using the Highcharts library. The implementation allows users to switch between multiple datasets dynamically and visualize data in an engaging and interactive way.

Features
Dynamic Pie Charts: Switch between multiple datasets using a dropdown menu.
Responsive Design: Charts automatically adjust to fit the container size.
Customizable: Easily add or modify datasets and chart configurations.

Prerequisites
Salesforce Org with My Domain enabled.
Highcharts library (download from Highcharts).
Basic knowledge of Lightning Web Components (LWC).

Setup Instructions
1. Upload Highcharts as a Static Resource
Download the Highcharts library from the official website.
In Salesforce, go to Setup → Static Resources → New.
Upload the Highcharts file (e.g., highcharts.js) and name it Highcharts.
Save the static resource.

2. Deploy the LWC Component
Clone this repository or copy the code into your Salesforce environment.
Deploy the following files to your Salesforce org:
JavaScript File: interactivePieCharts.js
HTML File: interactivePieCharts.html
Meta XML File: interactivePieCharts.js-meta.xml

3. Add the Component to a Lightning Page
Go to the Lightning App Builder in Salesforce.
Create or edit a Lightning Page (App Page, Record Page, or Home Page).
Drag and drop the interactivePieCharts component onto the page.
Save and activate the page.

Code Overview
JavaScript File (interactivePieCharts.js)
Loads the Highcharts library using loadScript.
Defines multiple datasets for the pie charts.
Initializes the chart and updates it dynamically based on the selected dataset.
Handles user interaction (e.g., switching datasets).

HTML File (interactivePieCharts.html)
Contains a <lightning-combobox> for dataset selection.
Includes a <div> container for rendering the chart.

Meta XML File (interactivePieCharts.js-meta.xml)
Exposes the component for use in Lightning App Builder and on record pages.

Customization
Add New Datasets: Modify the datasets object in the JavaScript file to include additional datasets.
Change Chart Type: Update the type property in the Highcharts.chart configuration (e.g., change pie to bar or line).
Styling: Customize colors, tooltips, and legends using Highcharts' extensive configuration options.

Contributing
Contributions are welcome! If you find any issues or have suggestions for improvement, please open an issue or submit a pull request.

Author
Sandip Patel
https://github.com/sandiphpatel87
https://www.linkedin.com/in/sandiphpatel87/


Enjoy building interactive and dynamic visualizations in Salesforce! 🚀
#Salesforce #LWC #Highcharts #DataVisualization #LightningWebComponents
