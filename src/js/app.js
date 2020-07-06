import '../scss/styles.scss';
import dayjs from 'dayjs';

const initApp = () => {
  const shutdownDay = 22;
  const shutdownDate = dayjs(`2020-03-${shutdownDay}`);
  const today = dayjs();
  const totalDays = today.diff(shutdownDate, 'days');
  const todaysDate = totalDays + shutdownDay;
  const h1el = document.querySelector('h1');
  const h2el = document.querySelector('h2');
  const fullDateString = `March ${todaysDate}, 2020`;
  h1el.classList.remove('invisible');
  h2el.textContent = fullDateString;
  window.document.title = `${fullDateString} | ${window.document.title}`;
};

document.onreadystatechange = () => {
  if (document.readyState === 'interactive') {
    initApp();
  }
};
