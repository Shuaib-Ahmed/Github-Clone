import React from 'react';

import ReactFC from 'react-fusioncharts';
import FusionCharts from 'fusioncharts';

// type of chart
import Chart from 'fusioncharts/fusioncharts.charts';

// theme of chart
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

ReactFC.fcRoot(FusionCharts, Chart, FusionTheme);

const ChartComponent = ({data}) => {
  const chartConfigs = {
    type: 'pie3d',
    width: '100%',
    height: '400',
    dataFormat: 'json',
    dataSource: {
      chart: {
        caption: "Language",
        theme: "fusion",
        pieRadius: '30%',
        paletteColors: "",
      },
      data: data
    },
  }

  return <ReactFC {...chartConfigs}/>
}


export default ChartComponent;
