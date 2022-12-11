// var hello = "hello";
// console.log(hello);

// 1. Display the current day at the top of the calender when a user opens the planner.

// Variable that holds the current day in the required format using moment.js function
var currentDay = moment().format('dddd, MMMM Do');
// console.log(currentDay);

// append today's date to <p id="currentDay"
$( "#currentDay" ).append(currentDay);


// variable that holds the current hour using moment.js function
var currentHour = moment().format("HH");
console.log(currentHour);

// Create Autofresh function for current hour (check every minute)


// create variables that get time blocks by id
var timeBlock1El = document.getElementById("timeBlock-1");
var timeBlock2El = document.getElementById("timeBlock-2");
var timeBlock3El = document.getElementById("timeBlock-3");

// add css classes to time blocks

timeBlock1El.classList.add("past");
timeBlock2El.classList.add("present");
timeBlock3El.classList.add("future");

// target timeBlocks & check current hour against timeblock hour


// -   if planner hour is in past (i.e. lower/less than current hour) then grey (.past)

        // append extra class to form-control

// -   if planner hour is at the present (i.e equal to current hour) then red (.present)

// -   if planner hour is in the future (i.e. greater than the current hour) then green (.future)




