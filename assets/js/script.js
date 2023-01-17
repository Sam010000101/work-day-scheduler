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
// variable to get the local storage Key as named according to the first object in the array "var officeTimes"
var timeBlock1Data = window.localStorage.getItem(officeTimes[0]);
// console.log(window.localStorage);
// Set the value for the input for id "#timeBlock-1" 
timeBlock1Input.val(timeBlock1Data);

// variable to access the timeblock button
var timeBlock1Btn = document.getElementById("timeBlock-1-Btn");
// Event listener for the timeblock button to 
timeBlock1Btn.addEventListener("click", addAnswerToLocalStorage);
// Function to add input to local storage
function addAnswerToLocalStorage() {
        let value = timeBlock1Input.val();
        // Set Time block input key to #timeBlock-1" input and name it according to the first object in the array "var officeTimes"
localStorage.setItem(officeTimes[0], value);
}
// var lastInput = localStorage.getItem("timeBlock-1");

// Use a for loop for the above to work for all input fields

var timeBlock1Input = $("#timeBlock-1");
var timeBlock2Input = $("#timeBlock-2");
var timeBlock3Input = $("#timeBlock-3");
var timeBlock4Input = $("#timeBlock-4");
var timeBlock5Input = $("#timeBlock-5");
var timeBlock6Input = $("#timeBlock-6");
var timeBlock7Input = $("#timeBlock-7");
var timeBlock8Input = $("#timeBlock-8");
var timeBlock9Input = $("#timeBlock-9");

var timBlockInput = [ timeBlock1Input, timeBlock2Input, timeBlock3Input, timeBlock4Input, timeBlock5Input, timeBlock6Input, timeBlock7Input, timeBlock8Input, timeBlock9Input];








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