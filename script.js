/*
    Name: Camden Drumheller
    Date: 9/25/26
    Assignment: Module 02 Applied Programming Activity
    Quarter: 1st
    Instructor: Lisa Thoendel
*/

"use strict";

const display = (label, value) =>
  (document.getElementById("output").innerHTML += `${label}: ${value}<br>`);

// Variables

const courseModules = ["Module 1", "Module 2", "Module 3", "Module 4", "Module 5", "Module 6", "Module 7", "Module 8", "Module 9", "Module 10"];
const completedModulesArray = ["Module 1", "Module 2"];

const userName = "Camden";
let totalModules = 10;
let isEnrolled = true;

// Template Literal

let outputMessage = `Hello and Welcome, ${userName}`;

// Calculate

let hoursPerWeek = 6;
let totalStudyHours = (totalModules * hoursPerWeek);

// Calculate

let dailyStudyHours = (hoursPerWeek / 7);
let dailyStudyMinutes = (dailyStudyHours * 60);

// Calculate

let adjustedDailyHours = (hoursPerWeek / 6);
let adjustedDailyMinutes = (adjustedDailyHours * 60);

// Calculate

let completedModules = 2;
let coursePercentComplete = (completedModules / totalModules) * 100;
let coursePercentRemaining = ((totalModules - completedModules) / totalModules) * 100;

// DISPLAY RESULTS

// TODO: Display your results. Use the correct variables and avoid hard-coding the data below.
// TODO: Adjust all decimals to two places.

display("Welcome Message" , outputMessage);
display("My Name" , userName);
display("Enrolled" , isEnrolled);
display("Total Modules" , totalModules);
display("Total Study Hours" , totalStudyHours);
display("Daily Study Hours (7 days)" , dailyStudyHours.toFixed(2));
display("Daily Study Minutes (7 days)" , dailyStudyMinutes.toFixed(2));
display("Daily Study Hours (with rest day)" , adjustedDailyHours.toFixed(2));
display("Daily Study Minutes (with rest day)" , adjustedDailyMinutes.toFixed(2));

// TODO: Display your results with a % sign

display("Percent Complete" , coursePercentComplete.toFixed(2) + "%");
display("Percent Remaining" , coursePercentRemaining.toFixed(2) + "%");