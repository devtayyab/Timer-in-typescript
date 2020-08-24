import React from 'react';

function TimerComponent(props:any) {

  return (
    <div className="timegroup">
      <span className="display">{(props.time.hours >0 ? props.time.hours : "00")}</span>
      <span className="display">{(props.time.minute >0 ?  props.time.minute : "00")}</span>
      <span className="display">{(props.time.second >0 ?  props.time.second : "00")}</span>
      <span className="display">{(props.time.msecond >0 ?  props.time.msecond : "00")}</span> 
     

    </div>
  );
}

export default TimerComponent;
