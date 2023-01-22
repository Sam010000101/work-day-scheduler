// 1. Display the current day at the top of the calender when a user opens the planner.
// ------------------------------------------------------------------------------------
// Variable referencing the current day in the required format using Moment.js function
var currentDay = moment().format('dddd, MMMM Do');
// Today's date appended to DOM element <p id="currentDay" class="lead">append here</p> using JQuery
$( "#currentDay" ).append(currentDay);
// ------------------------------------------------------------------------------------

// 2. Present timeblocks for standard business hours when the user scrolls down.
//      &
// 3. Color-code each timeblock based on past, present, and future when the timeblock is viewed.
// ------------------------------------------------------------------------------------

// Variable referencing the current hour from Moment.js 
var currentHourEl = moment().format('HH');
// // Set the time hour here to test the asignment of classes relating to current time (i.e. 'trick' the app into thinking it's a paticular hour of the day)
// var currentHourEl = '08';
// console.log(currentHourEl)

// Create array with office times (these times can be altered to suit the user. NB. Be sure to change the hour strings in timeBlockHrEl to match this variable)
var officeTimes = ['9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM'];

// Append "officeTimes" to their respective id #timeBlockHour-X
var TimeBlock9am = $( "#timeBlockHour-1" ).append(officeTimes[0]);
var TimeBlock10am = $( "#timeBlockHour-2" ).append(officeTimes[1]);
var TimeBlock11am = $( "#timeBlockHour-3" ).append(officeTimes[2]);
var TimeBlock12pm = $( "#timeBlockHour-4" ).append(officeTimes[3]);
var TimeBlock1pm = $( "#timeBlockHour-5" ).append(officeTimes[4]);
var TimeBlock2pm = $( "#timeBlockHour-6" ).append(officeTimes[5]);
var TimeBlock3pm = $( "#timeBlockHour-7" ).append(officeTimes[6]);
var TimeBlock4pm = $( "#timeBlockHour-8" ).append(officeTimes[7]);
var TimeBlock5pm = $( "#timeBlockHour-9" ).append(officeTimes[8]);

// Create variables that get time blocks by their id
var timeBlock1El = document.getElementById("timeBlock-1");
var timeBlock2El = document.getElementById("timeBlock-2");
var timeBlock3El = document.getElementById("timeBlock-3");
var timeBlock4El = document.getElementById("timeBlock-4");
var timeBlock5El = document.getElementById("timeBlock-5");
var timeBlock6El = document.getElementById("timeBlock-6");
var timeBlock7El = document.getElementById("timeBlock-7");
var timeBlock8El = document.getElementById("timeBlock-8");
var timeBlock9El = document.getElementById("timeBlock-9");

// Create array that references "getElementById" for each time block id
var timeBlockEl = [ timeBlock1El, timeBlock2El, timeBlock3El, timeBlock4El, timeBlock5El, timeBlock6El, timeBlock7El, timeBlock8El, timeBlock9El ];

// Create array containing hour strings in chronological order
var timeBlockHrEl = [ '09', '10', '11', '12', '13', '14', '15', '16', '17'];

// Iterate through the timeBlockEl array 
for (var i = 0; i < timeBlockEl.length; i++) {
// add css classes to time blocks based on whether the corresponding 'hour string' is in the past, present or future when compared to the currentHourEl
if (currentHourEl > timeBlockHrEl[i]) {
        timeBlockEl[i].classList.add("past"); 
} else if (currentHourEl == timeBlockHrEl[i]) {
                timeBlockEl[i].classList.add("present");
        } else {
                timeBlockEl[i].classList.add("future");
        };
};


// 4. Allow a user to enter an event when they click a timeblock
//      &
// 5. Save the event in local storage when the save button is clicked in that timeblock.

// Variables to access the timeblock save buttons
var timeBlock1Btn = document.getElementById("timeBlock-1-Btn");
var timeBlock2Btn = document.getElementById("timeBlock-2-Btn");
var timeBlock3Btn = document.getElementById("timeBlock-3-Btn");
var timeBlock4Btn = document.getElementById("timeBlock-4-Btn");
var timeBlock5Btn = document.getElementById("timeBlock-5-Btn");
var timeBlock6Btn = document.getElementById("timeBlock-6-Btn");
var timeBlock7Btn = document.getElementById("timeBlock-7-Btn");
var timeBlock8Btn = document.getElementById("timeBlock-8-Btn");
var timeBlock9Btn = document.getElementById("timeBlock-9-Btn");

// Event listener for the timeblock save buttons, each button will trigger the respective function when 'clicked'
timeBlock1Btn.addEventListener("click", addAnswerToLocalStorageBlock1);
timeBlock2Btn.addEventListener("click", addAnswerToLocalStorageBlock2);
timeBlock3Btn.addEventListener("click", addAnswerToLocalStorageBlock3);
timeBlock4Btn.addEventListener("click", addAnswerToLocalStorageBlock4);
timeBlock5Btn.addEventListener("click", addAnswerToLocalStorageBlock5);
timeBlock6Btn.addEventListener("click", addAnswerToLocalStorageBlock6);
timeBlock7Btn.addEventListener("click", addAnswerToLocalStorageBlock7);
timeBlock8Btn.addEventListener("click", addAnswerToLocalStorageBlock8);
timeBlock9Btn.addEventListener("click", addAnswerToLocalStorageBlock9);

// Functions to set the inputs to local storage
function addAnswerToLocalStorageBlock1() {

        let value1 = timeBlock1Input.val();
localStorage.setItem(officeTimes[0], value1);
};

function addAnswerToLocalStorageBlock2() {

        let value2 = timeBlock2Input.val();
localStorage.setItem(officeTimes[1], value2);
};

function addAnswerToLocalStorageBlock3() {

        let value3 = timeBlock3Input.val();
localStorage.setItem(officeTimes[2], value3);
};

function addAnswerToLocalStorageBlock4() {

        let value4 = timeBlock4Input.val();
localStorage.setItem(officeTimes[3], value4);
};

function addAnswerToLocalStorageBlock5() {

        let value5 = timeBlock5Input.val();
localStorage.setItem(officeTimes[4], value5);
};

function addAnswerToLocalStorageBlock6() {

        let value6 = timeBlock6Input.val();
localStorage.setItem(officeTimes[5], value6);
};

function addAnswerToLocalStorageBlock7() {

        let value7 = timeBlock7Input.val();
localStorage.setItem(officeTimes[6], value7);
};

function addAnswerToLocalStorageBlock8() {

        let value8 = timeBlock8Input.val();
localStorage.setItem(officeTimes[7], value8);
};

function addAnswerToLocalStorageBlock9() {

        let value9 = timeBlock9Input.val();
localStorage.setItem(officeTimes[8], value9);
};


// Variables to get the timeblock inputs using jQuery equivalent of vanilla js "document.getElementById"
var timeBlock1Input = $("#timeBlock-1");
var timeBlock2Input = $("#timeBlock-2");
var timeBlock3Input = $("#timeBlock-3");
var timeBlock4Input = $("#timeBlock-4");
var timeBlock5Input = $("#timeBlock-5");
var timeBlock6Input = $("#timeBlock-6");
var timeBlock7Input = $("#timeBlock-7");
var timeBlock8Input = $("#timeBlock-8");
var timeBlock9Input = $("#timeBlock-9");

// Variables to get the stored input values from local storage, fires after page reload
var timeBlock1Data = window.localStorage.getItem(officeTimes[0]);
var timeBlock2Data = window.localStorage.getItem(officeTimes[1]);
var timeBlock3Data = window.localStorage.getItem(officeTimes[2]);
var timeBlock4Data = window.localStorage.getItem(officeTimes[3]);
var timeBlock5Data = window.localStorage.getItem(officeTimes[4]);
var timeBlock6Data = window.localStorage.getItem(officeTimes[5]);
var timeBlock7Data = window.localStorage.getItem(officeTimes[6]);
var timeBlock8Data = window.localStorage.getItem(officeTimes[7]);
var timeBlock9Data = window.localStorage.getItem(officeTimes[8]);
// console.log(window.localStorage.getItem(officeTimes[0]));
// console.log(window.localStorage);

// Set the value of each time block input to the corresponding value set in local storage, fires after page reload
timeBlock1Input.val(timeBlock1Data);
timeBlock2Input.val(timeBlock2Data);
timeBlock3Input.val(timeBlock3Data);
timeBlock4Input.val(timeBlock4Data);
timeBlock5Input.val(timeBlock5Data);
timeBlock6Input.val(timeBlock6Data);
timeBlock7Input.val(timeBlock7Data);
timeBlock8Input.val(timeBlock8Data);
timeBlock9Input.val(timeBlock9Data);
console.log(timeBlock1Input.val());
// console.log(timeBlock1Data);

