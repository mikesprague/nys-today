import '../scss/styles.scss';
import dayjs from 'dayjs';

const initApp = () => {
  const shutdownDay = 22;
  const shutdownDate = dayjs(`2020-03-${shutdownDay}`);
  const today = dayjs();
  const totalDays = today.diff(shutdownDate, 'days');
  const todaysDate = totalDays + shutdownDay;
  const dateNumberEl = document.querySelector('.todays-date');
  const fullDateString = `March ${todaysDate}, 2020`;
  dateNumberEl.textContent = todaysDate;
  window.document.title = `${fullDateString} | ${window.document.title}`;
};

document.onreadystatechange = () => {
  if (document.readyState === 'interactive') {
    initApp();
  }
};
