import React from 'react';

function DateCompo() {
  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];
  const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
  ];
  const date = new Date();
  const day = days[date.getDay()];
  const currMonth = monthNames[date.getMonth()];
  const dayNum = date.getDate();

  return (
    <div className='currentDate'>
      <p>{day},</p>
      <p>{`${currMonth} ${dayNum}`}</p>
    </div>
  );
}
export default DateCompo;
