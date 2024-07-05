import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import './style.css'

const valueFormatter = (value) => `${value}`;

export default function ComparisonBarChart({label = "President",dataset = [
    {
     
      name: 'Furqan',
      votes : 100
    },
    
    {
     
      name: 'Wasiq',
      votes : 20
    },
  ]}) {
    const chartSetting = {
        yAxis: [
            {
              label : "Votes",
              tickMinStep:1
            },
          ],
          
      };
  return (
    <div className='h-full w-full'>

    <BarChart
      colors={['#379F2E']}
      dataset={dataset}
      xAxis={[{ scaleType: 'band', dataKey: 'name',label : label }]}
      series={[{ dataKey: 'votes', label: 'Votes', valueFormatter }]}
      layout='vertical'
      {...chartSetting}
      borderRadius={10}
      barLabel="value"
      slotProps={{ legend: { hidden: true } }}
      />
      </div>
  );
}
