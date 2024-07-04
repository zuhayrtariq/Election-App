import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
 const dataset = [
    {
     
      name: 'Furqan',
      votes : 100
    },
    
    {
     
      name: 'Wasiq',
      votes : 20
    },
  ];
  
const chartSetting = {
  xAxis: [
    {
      label: 'President',
      
    },
  ],
};

const valueFormatter = (value) => `${value}mm`;

export default function PresidentChart() {
  return (
    <BarChart
      dataset={dataset}
      yAxis={[{ scaleType: 'band', dataKey: 'name' }]}
      series={[{ dataKey: 'votes', label: 'Votes', valueFormatter }]}
      layout="horizontal"
      {...chartSetting}
    />
  );
}
