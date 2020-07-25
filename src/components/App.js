import dayjs from 'dayjs';
import React from 'react';
import './App.scss';

export default function App() {
  const shutdownDay = 22;
  const shutdownDate = dayjs(`2020-03-${shutdownDay}`);
  const today = dayjs();
  const totalDays = today.diff(shutdownDate, 'days');
  const todaysDate = totalDays + shutdownDay;
  const fullDateString = `March ${todaysDate}, 2020`;
  window.document.title = `${fullDateString} | ${window.document.title}`;

  return (
    <div className="container page-wrapper">
      <div className="heading-wrapper d-flex justify-content-center align-items-end">
        <h1 className="display-1">Today&apos;s Date</h1>
        <img className="nys-image" alt="New York State" src="/images/new-york-state.png" />
      </div>
      <div className="d-flex justify-content-center align-items-center card-wrapper flex-grow-1">
        <div className="card border-light bg-secondary">
          <div className="card-header border-light bg-dark text-light">
            <h2>March 2020</h2>
          </div>
          <div className="card-body">
            <blockquote className="mt-0 mb-0 blockquote bg-secondary">
              <h3 className="todays-date">{todaysDate}</h3>
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  );
}
