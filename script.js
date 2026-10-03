/*
    Name: Camden Drumheller
    Date: 9/27/26
    Assignment: Module 03 Applied Programming Activity
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

// Calculate totalStudyHours

    let hoursPerWeek = 6;
    const totalStudyHours = calculateStudyHours(courseModules.length);

      function calculateStudyHours(modules, hoursPerModule = 6) {
        return ((modules * hoursPerModule));
      }

// Calculate daily studying

    let dailyStudyHours = (hoursPerWeek / 7);
    let dailyStudyMinutes = (dailyStudyHours * 60);

// Calculate daily studying with a rest day

    let adjustedDailyHours = (hoursPerWeek / 6);
    let adjustedDailyMinutes = (adjustedDailyHours * 60);

// Calculate course percentages

    const coursePercentComplete = calculatePercentComplete(completedModulesArray.length, courseModules.length);
    let coursePercentRemaining = ((totalModules - completedModulesArray.length) / totalModules) * 100;

      function calculatePercentComplete(completed, total) {
        return ((completed / total) * 100);
      }

// Calculate courseProgress: Function Expression

      const getCourseProgress = function(percentRemaining) {
  
        if (percentRemaining == 0){
          return "Finished!";
        }
        else if (percentRemaining >= 1 && percentRemaining < 25) {
          return "Almost Finished!";
        }
        else if (percentRemaining >= 25 && percentRemaining < 75) {
          return "Making Progress";
        }
        else if (percentRemaining >= 75 && percentRemaining <= 100) {
          return "Just Getting Started";
        }
        else {
          return "Invalid entry.";
        }
      }


// Calculate courseGrade: Arrow Function

      const getCourseGrade = (percentComplete) => {
        
        if (percentComplete < 60) {
          return "F";
        }
        else if (percentComplete >= 60 && percentComplete < 70) {
          return "D";
        }
        else if (percentComplete >= 70 && percentComplete < 80) {
          return "C";
        }
        else if (percentComplete >= 80 && percentComplete < 90) {
          return "B";
        }
        else if (percentComplete >= 90 && percentComplete <= 100) {
          return "A";
        }
        else {
          return "Invalid entry";
        }       
      }


      const displayModules = (modules) => {
        for (let i = 0; i < modules.length; i++) {
          display(`Module ${i + 1}`, modules[i]);
        }
      }

      const displayCompletedModules = (...modules) => {
        return modules.join(", ");
      }
      let completedModulesList = displayCompletedModules(...completedModulesArray);



// Variables

let studyDay;

// What day is it?

if (coursePercentComplete === 100) {
  studyDay = "Complete";
} 
else {
  studyDay = prompt("Enter the current day: ");
}

// Based on the day, what is the study plan?

const getStudyPlan = (studyDay) => {

let studyPlan;

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
return studyPlan;

}


// DISPLAY RESULTS

display("Welcome Message" , outputMessage);
display("My Name" , userName);
display("Enrolled" , isEnrolled);
display("Total Modules" , totalModules);
displayModules(courseModules);
display("Completed Modules", completedModulesList);
display("Total Study Hours" , totalStudyHours);
display("Daily Study Hours (7 days)" , dailyStudyHours.toFixed(2));
display("Daily Study Minutes (7 days)" , dailyStudyMinutes.toFixed(2));
display("Daily Study Hours (with rest day)" , adjustedDailyHours.toFixed(2));
display("Daily Study Minutes (with rest day)" , adjustedDailyMinutes.toFixed(2));


display("Percent Complete" , coursePercentComplete.toFixed(2) + "%");
display("Percent Remaining" , coursePercentRemaining.toFixed(2) + "%");


display("Current Progress", getCourseProgress(coursePercentRemaining));
display("Course Grade", getCourseGrade(coursePercentComplete));
display("Study Day", studyDay);
display("Study Plan", getStudyPlan(studyDay));