/*
    Name: Camden Drumheller
    Date: 9/27/26
    Assignment: Module 02 Applied Programming Activity
    Quarter: 1st
    Instructor: Lisa Thoendel
*/

"use strict";

const display = (label, value) =>
  (document.getElementById("output").innerHTML += `${label}: ${value}<br>`);

// Variables

const courseModules = ["Module 1", "Module 2", "Module 3", "Module 4", "Module 5", "Module 6", "Module 7", "Module 8", "Module 9", "Module 10"];
const completedModulesArray = ["Module 1", "Module 2", "Module 3"];

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

const coursePercentComplete = calculatePercentComplete(completedModules, courseModules);
let coursePercentRemaining = ((totalModules - completedModules) / totalModules) * 100;

// New

function calculatePercentComplete(completedModules, totalModules) {
  return ((completedModules / totalModules) * 100);
}

// Calculate courseProgress

let courseProgress;

if (coursePercentRemaining == 0){
  courseProgress = "Finished!";
}
else if (coursePercentRemaining >= 1 && coursePercentRemaining < 25) {
  courseProgress = "Almost Finished!";
}
else if (coursePercentRemaining >= 25 && coursePercentRemaining < 75) {
  courseProgress = "Making Progress";
}
else if (coursePercentRemaining >= 75 && coursePercentRemaining <= 100) {
  courseProgress = "Just Getting Started";
}
else {
  courseProgress = "Invalid entry.";
}

// Calculate courseGrade

let courseGrade;

if (coursePercentComplete < 60) {
  courseGrade = "F";
}
else if (coursePercentComplete >= 60 && coursePercentComplete < 70) {
  courseGrade = "D";
}
else if (coursePercentComplete >= 70 && coursePercentComplete < 80) {
  courseGrade = "C";
}
else if (coursePercentComplete >= 80 && coursePercentComplete < 90) {
  courseGrade = "B";
}
else if (coursePercentComplete >= 90 && coursePercentComplete <= 100) {
  courseGrade = "A";
}
else {
  courseGrade = "Invalid entry";
}

// Variables

let studyPlan;
let studyDay;

// What day is it?

if (coursePercentComplete === 100) {
  studyDay = "Complete";
} 
else {
  studyDay = prompt("Enter the current day: ");
}

// Based on the day, what is the study plan?

switch (studyDay) {
  case "Sunday":
    studyPlan = `Today is your study day! Study for ${adjustedDailyMinutes.toFixed(2)} minutes today`;
  break;

  case "Monday":
    studyPlan = "Today is your rest day!";
    break;
  case "Tuesday":
    studyPlan = `Today is your lab day! Study for ${adjustedDailyMinutes.toFixed(2)} minutes today. `;
    break;

  case "Wednesday":
    studyPlan = `Today is your applied programming activity day! Study for ${adjustedDailyMinutes.toFixed(2)} minutes today. `;
    break;

  case "Thursday":
    studyPlan = `Today is a work day! Study for ${adjustedDailyMinutes.toFixed(2)} minutes today.`;
    break;

  case "Friday":
    studyPlan = `Today is a travel day! In the car, study for ${adjustedDailyMinutes.toFixed(2)} minutes today.`;
    break;

  case "Saturday":
    studyPlan = `Today is another study day! Study for ${adjustedDailyMinutes.toFixed(2)} minutes today`;
    break;

  case "Complete":
    studyPlan = "Course Completed!";
    break;

  default:
    studyPlan = "Invalid Day.";
    break;
}

// DISPLAY RESULTS

display("Welcome Message" , outputMessage);
display("My Name" , userName);
display("Enrolled" , isEnrolled);
display("Total Modules" , totalModules);
display("Total Study Hours" , totalStudyHours);
display("Daily Study Hours (7 days)" , dailyStudyHours.toFixed(2));
display("Daily Study Minutes (7 days)" , dailyStudyMinutes.toFixed(2));
display("Daily Study Hours (with rest day)" , adjustedDailyHours.toFixed(2));
display("Daily Study Minutes (with rest day)" , adjustedDailyMinutes.toFixed(2));


display("Percent Complete" , coursePercentComplete.toFixed(2) + "%");
display("Percent Remaining" , coursePercentRemaining.toFixed(2) + "%");


display("Current Progress", courseProgress);
display("Course Grade", courseGrade);
display("Study Day", studyDay);
display("Study Plan", studyPlan);