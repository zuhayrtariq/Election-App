import moment from 'moment';
import React, { useEffect, useMemo, useState } from 'react'
import { Countdown } from 'react-daisyui';

const DateCountdown = () => {
    const currentDateTime = moment().format('YYYY-MM-DD HH:mm:ss');

    const votingEndDateTime = moment('2024-07-12 17:00:00','YYYY-MM-DD HH:mm:ss') 
    const duration = moment.duration(votingEndDateTime.diff(currentDateTime));
    const days = duration.get('days')
    const hrs = duration.get('hours')
    const min = duration.get('minutes')
    const sec = duration.get('seconds')
    const [value, setValue] = useState(40);
    useEffect(() => {
      const timer = setTimeout(() => {
        setValue(v => v <= 0 ? (40) : v - 1);
      }, 100);
      return () => {
        clearTimeout(timer);
      };
    }, [value]);
  return (
   <>
<div className="grid grid-flow-col gap-5 text-center auto-cols-max">
  <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
    <span className="countdown font-mono text-4xl ">
      <span className='text-white -mb-1' style={{"--value":days}}></span>
    </span>
    days
  </div>
  <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
    <span className="countdown font-mono text-4xl ">
      <span className='text-white -mb-1' style={{"--value":hrs}}></span>
    </span>
    hours
  </div>
  <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
    <span className="countdown font-mono text-4xl ">
      <span className='text-white -mb-1' style={{"--value":min}}></span>
    </span>
    min
  </div>
  <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
    <span className="countdown font-mono text-4xl ">
      <span className='text-white -mb-1' style={{"--value":sec}}></span>
    </span>
    sec
  </div>
</div>
   </>
  )
}

export default DateCountdown