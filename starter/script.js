// var hello = "hello";
// console.log(hello);

var currentDay = moment().format('dddd, MMMM Do');

console.log(currentDay);

// append today's date to <p id="currentDay"

$( "#currentDay" ).append(currentDay);

// target background-color

// -   if planner hour is in past (i.e. lower/less than current hour) then grey (.past)

// -   if planner hour is at the present (i.e equal to current hour) then red (.present)

// -   if planner hour is in the future (i.e. greater than the current hour) then green (.future)




