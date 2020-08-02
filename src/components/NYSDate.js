import dayjs from 'dayjs';
import React from 'react';
import './NYSDate.scss';

export default function NYSDate() {
  const shutdownDay = 22;
  const shutdownDate = dayjs(`2020-03-${shutdownDay}`);
  const today = dayjs();
  const dayOfWeek = dayjs(today).format('dddd');
  console.log(dayOfWeek);
  const totalDays = today.diff(shutdownDate, 'days');
  const todaysDate = totalDays + shutdownDay;
  const fullDateString = `March ${todaysDate}, 2020`;
  window.document.title = `${fullDateString} | ${window.document.title}`;

  return (
    <div className="container page-wrapper">
      <div className="heading-wrapper">
        <h1 className="">Today&apos;s Date</h1>
        <img className="nys-image" alt="New York State" src="/images/new-york-state.png" />
      </div>
      <div className="card-wrapper">
        <div className="card">
          <div className="card-header">
            <h2>March 2020</h2>
          </div>
          <div className="card-body">
            <h3>{todaysDate}</h3>
            <h4>{dayOfWeek}</h4>
          </div>
        </div>
      </div>
    </div>
  );
}
