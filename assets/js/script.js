// 1. Display the current day at the top of the calender when a user opens the planner.

// Variable that holds the current day in the required format using moment.js function
var currentDay = moment().format('dddd, MMMM Do');
// append today's date to <p id="currentDay" class="lead">append here</p>
$( "#currentDay" ).append(currentDay);


// 2. Present timeblocks for standard business hours when the user scrolls down.
// 3. Color-code each timeblock based on past, present, and future when the timeblock is viewed.

// Variable that stores the current hour
var currentHourEl = moment().format('HH');
// var currentHourEl = '08';
console.log(currentHourEl)

// Create array with office times (these times can be altered to suit out of office times)
var officeTimes = ['9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM'];

// create variables that get time block hour by id
var timeBlock1HrEl = document.getElementById("timeBlockHour-1");
var timeBlock1HrEl = document.getElementById("timeBlockHour-2");
var timeBlock1HrEl = document.getElementById("timeBlockHour-3");
var timeBlock1HrEl = document.getElementById("timeBlockHour-4");
var timeBlock1HrEl = document.getElementById("timeBlockHour-5");
var timeBlock1HrEl = document.getElementById("timeBlockHour-6");
var timeBlock1HrEl = document.getElementById("timeBlockHour-7");
var timeBlock1HrEl = document.getElementById("timeBlockHour-8");
var timeBlock1HrEl = document.getElementById("timeBlockHour-9");

// re-asign variables with hour strings
// timeBlock1HrEl = '09';
// timeBlock2HrEl = '10';
// timeBlock3HrEl = '11';
// timeBlock4HrEl = '12';
// timeBlock5HrEl = '13';
// timeBlock6HrEl = '14';
// timeBlock7HrEl = '15';
// timeBlock8HrEl = '16';
// timeBlock9HrEl = '17';

// create array with hour strings
var timeBlockHrEl = [ '09', '10', '11', '12', '13', '14', '15', '16', '17'];

// for (var i = 0; i < timeBlockHrEl.length; i++) {
//         console.log(timeBlockHrEl[i]);
//     }

// append "officeTimes" to id #timeBlockHour-x frm officeTimes array
var TimeBlock9am = $( "#timeBlockHour-1" ).append(officeTimes[0]);
var TimeBlock10am = $( "#timeBlockHour-2" ).append(officeTimes[1]);
var TimeBlock11am = $( "#timeBlockHour-3" ).append(officeTimes[2]);
var TimeBlock12pm = $( "#timeBlockHour-4" ).append(officeTimes[3]);
var TimeBlock1pm = $( "#timeBlockHour-5" ).append(officeTimes[4]);
var TimeBlock2pm = $( "#timeBlockHour-6" ).append(officeTimes[5]);
var TimeBlock3pm = $( "#timeBlockHour-7" ).append(officeTimes[6]);
var TimeBlock4pm = $( "#timeBlockHour-8" ).append(officeTimes[7]);
var TimeBlock5pm = $( "#timeBlockHour-9" ).append(officeTimes[8]);

// create variables that get time blocks by id
var timeBlock1El = document.getElementById("timeBlock-1");
var timeBlock2El = document.getElementById("timeBlock-2");
var timeBlock3El = document.getElementById("timeBlock-3");
var timeBlock4El = document.getElementById("timeBlock-4");
var timeBlock5El = document.getElementById("timeBlock-5");
var timeBlock6El = document.getElementById("timeBlock-6");
var timeBlock7El = document.getElementById("timeBlock-7");
var timeBlock8El = document.getElementById("timeBlock-8");
var timeBlock9El = document.getElementById("timeBlock-9");

var timeBlockEl = [ timeBlock1El, timeBlock2El, timeBlock3El, timeBlock4El, timeBlock5El, timeBlock6El, timeBlock7El, timeBlock8El, timeBlock9El ];

for (var i = 0; i < timeBlockEl.length; i++) {

// add css classes to time blocks based on whether their 'hour string' is in the past, present of future when compared to the currentHourEl
if (currentHourEl > timeBlockHrEl[i]) {
        timeBlockEl[i].classList.add("past"); 
} else if (currentHourEl == timeBlockHrEl[i]) {
                timeBlockEl[i].classList.add("present");
        } else {
                timeBlockEl[i].classList.add("future");
        };
};

// timeBlock1El.classList.add("past");
// timeBlock2El.classList.add("present");
// timeBlock3El.classList.add("future");


// 4. Allow a user to enter an event when they click a timeblock

// 5. Save the event in local storage when the save button is clicked in that timeblock.

// variable to access the timeblock input
var timeBlock1Input = $("#timeBlock-1");
var timeBlock2Input = $("#timeBlock-2");
var timeBlock3Input = $("#timeBlock-3");
var timeBlock4Input = $("#timeBlock-4");
var timeBlock5Input = $("#timeBlock-5");
var timeBlock6Input = $("#timeBlock-6");
var timeBlock7Input = $("#timeBlock-7");
var timeBlock8Input = $("#timeBlock-8");
var timeBlock9Input = $("#timeBlock-9");
// variable to get the local storage Key as named according to the first object in the array "var officeTimes"
var timeBlock1Data = window.localStorage.getItem(officeTimes[0]);
var timeBlock2Data = window.localStorage.getItem(officeTimes[1]);
var timeBlock3Data = window.localStorage.getItem(officeTimes[2]);
var timeBlock4Data = window.localStorage.getItem(officeTimes[3]);
var timeBlock5Data = window.localStorage.getItem(officeTimes[4]);
var timeBlock6Data = window.localStorage.getItem(officeTimes[5]);
var timeBlock7Data = window.localStorage.getItem(officeTimes[6]);
var timeBlock8Data = window.localStorage.getItem(officeTimes[7]);
var timeBlock9Data = window.localStorage.getItem(officeTimes[8]);
// console.log(window.localStorage);
// Set the value for the input for id "#timeBlock-1" 
timeBlock1Input.val(timeBlock1Data);
timeBlock2Input.val(timeBlock2Data);
timeBlock3Input.val(timeBlock3Data);
timeBlock4Input.val(timeBlock4Data);
timeBlock5Input.val(timeBlock5Data);
timeBlock6Input.val(timeBlock6Data);
timeBlock7Input.val(timeBlock7Data);
timeBlock8Input.val(timeBlock8Data);
timeBlock9Input.val(timeBlock9Data);

// variable to access the timeblock button
var timeBlock1Btn = document.getElementById("timeBlock-1-Btn");
var timeBlock2Btn = document.getElementById("timeBlock-2-Btn");
var timeBlock3Btn = document.getElementById("timeBlock-3-Btn");
var timeBlock4Btn = document.getElementById("timeBlock-4-Btn");
var timeBlock5Btn = document.getElementById("timeBlock-5-Btn");
var timeBlock6Btn = document.getElementById("timeBlock-6-Btn");
var timeBlock7Btn = document.getElementById("timeBlock-7-Btn");
var timeBlock8Btn = document.getElementById("timeBlock-8-Btn");
var timeBlock9Btn = document.getElementById("timeBlock-9-Btn");


// Event listener for the timeblock button to 
timeBlock1Btn.addEventListener("click", addAnswerToLocalStorageBlock1);
timeBlock2Btn.addEventListener("click", addAnswerToLocalStorageBlock2);
timeBlock3Btn.addEventListener("click", addAnswerToLocalStorageBlock3);
timeBlock4Btn.addEventListener("click", addAnswerToLocalStorageBlock4);
timeBlock5Btn.addEventListener("click", addAnswerToLocalStorageBlock5);
timeBlock6Btn.addEventListener("click", addAnswerToLocalStorageBlock6);
timeBlock7Btn.addEventListener("click", addAnswerToLocalStorageBlock7);
timeBlock8Btn.addEventListener("click", addAnswerToLocalStorageBlock8);
timeBlock9Btn.addEventListener("click", addAnswerToLocalStorageBlock9);



// let value3 = timeBlock3Input.val();
// let value4 = timeBlock4Input.val();
// let value5 = timeBlock5Input.val();
// let value6 = timeBlock6Input.val();
// let value7 = timeBlock7Input.val();
// let value8 = timeBlock8Input.val();
// let value9 = timeBlock9Input.val();

// Functions to add inputs to local storage
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



// localStorage.setItem(officeTimes[1], value2);
// localStorage.setItem(officeTimes[2], value3);
// localStorage.setItem(officeTimes[3], value4);
// localStorage.setItem(officeTimes[4], value5);
// localStorage.setItem(officeTimes[5], value6);
// localStorage.setItem(officeTimes[6], value7);
// localStorage.setItem(officeTimes[7], value8);
// localStorage.setItem(officeTimes[8], value9);



// // var lastInput = localStorage.getItem("timeBlock-1");

// // Use a for loop for the above to work for all input fields

// var timeBlock1Input = $("#timeBlock-1");
// var timeBlock2Input = $("#timeBlock-2");
// var timeBlock3Input = $("#timeBlock-3");
// var timeBlock4Input = $("#timeBlock-4");
// var timeBlock5Input = $("#timeBlock-5");
// var timeBlock6Input = $("#timeBlock-6");
// var timeBlock7Input = $("#timeBlock-7");
// var timeBlock8Input = $("#timeBlock-8");
// var timeBlock9Input = $("#timeBlock-9");

// var timeBlockInput = [ timeBlock1Input, timeBlock2Input, timeBlock3Input, timeBlock4Input, timeBlock5Input, timeBlock6Input, timeBlock7Input, timeBlock8Input, timeBlock9Input];

// for (var i = 0; i < timeBlockInput.length; i++) {
//         console.log(timeBlockInput[i]);
// }

// var timeBlock1Data = window.localStorage.getItem(officeTimes[0]);
// var timeBlock2Data = window.localStorage.getItem(officeTimes[1]);
// var timeBlock3Data = window.localStorage.getItem(officeTimes[2]);
// var timeBlock4Data = window.localStorage.getItem(officeTimes[3]);
// var timeBlock5Data = window.localStorage.getItem(officeTimes[4]);
// var timeBlock6Data = window.localStorage.getItem(officeTimes[5]);
// var timeBlock7Data = window.localStorage.getItem(officeTimes[6]);
// var timeBlock8Data = window.localStorage.getItem(officeTimes[7]);
// var timeBlock9Data = window.localStorage.getItem(officeTimes[8]);

// var timeBlockData = [ timeBlock1Data, timeBlock2Data, timeBlock3Data, timeBlock4Data, timeBlock5Data, timeBlock6Data, timeBlock7Data, timeBlock8Data, timeBlock9Data];

// for (var i = 0; i < timeBlockData.length; i++) {
//         console.log(timeBlockData[i]);
// }



// timeBlock1Input.textContent = lastInput.timeBlock1Input;

// console.log(localStorage);

// get most recent submission

// renderLastRegistered();

// function renderLastRegistered() {
//         timeBlock1Input = localStorage.getItem("timeBlock-1");

      
//         timeBlock1Input.textContent = timeBlock1Input;

//       }


// var timeBlock1Input = document.querySelector("#timeBlock-1");

// $( "#timeBlock-1-Btn").click(function() {
//         alert("Hey");
// });

// localStorage.setItem("timeBlock-1", timeBlock1Input);

// console.log("#timeBlock-1");
// console.log(value);

// console.log(timeBlock1Btn);
// console.log(timeBlock1Input);