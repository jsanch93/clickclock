/******
DATE
******/
/************
Static Data
************/
const allTheMonths = [
  "01",
  "02",
  "03",
  "04",
  "05",
  "06",
  "07",
  "08",
  "09",
  "10",
  "11",
  "12"
];
const allTheDays = [
  "Sun",
  "Mon",
  "Tues",
  "Wed",
  "Thurs",
  "Fri",
  "Sat"
];

/************
Dynamic Data
************/
// define `theClockApp` stored in function to be ran
// const theClockApp = () => {
  
// Get and store current date and time with `new Date()` object
const now = new Date();
// Check-Check: See all `Date()` methods and properties
console.log( now );


/************
GET the Data
************/
// Get current month
const gotMonth = now.getMonth();
// Get current day of the month
let gotDayOfMonth = now.getDate();
// Get current year
const gotYear = now.getFullYear();
// Get current day of the week
const gotDayOfWeek = now.getDay();

/************
Get DOM Elements
************/

const month = document.querySelector('.month');

const date = document.querySelector('.dayOfMonth');

const year = document.querySelector('.year');

const day = document.querySelector('.dayOfWeek');

/************
SET the Data
************/
month.textContent = allTheMonths[gotMonth];

date.textContent = gotDayOfMonth;

year.textContent = gotYear;

day.textContent = allTheDays[gotDayOfWeek];