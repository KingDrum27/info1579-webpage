/*
    Name: Camden Drumheller
    Date: 10/11/26
    Assignment: Module 04 Applied Programming Activity
    Quarter: 1st
    Instructor: Lisa Thoendel
*/

"use strict";

// Variables

const studentNameInput = document.getElementById("studentName");
const completedModulesInput = document.getElementById("completedModules");
const studyDayInput = document.getElementById("studyDay");
const generateButton = document.getElementById("generateButton");
const resetButton = document.getElementById("resetButton");
const output = document.getElementById("output");

const courseModules = ["Module 1", "Module 2", "Module 3", "Module 4", "Module 5", "Module 6", "Module 7", "Module 8", "Module 9", "Module 10"];
let totalModules = 10;

let hoursPerWeek = 6;

let adjustedDailyHours = (hoursPerWeek / 6);
let adjustedDailyMinutes = (adjustedDailyHours * 60);

// Calculate totalStudyHours

      function calculateStudyHours(modules, hoursPerModule = 6) {
        return ((modules * hoursPerModule));
      }

// Calculate course percentages

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

// Display total modules: arrow function

      const displayModules = (modules) => {

        let list = document.createElement("ul");

        for (let i = 0; i < modules.length; i++) {
          let listItem = document.createElement("li");
          listItem.textContent = modules[i];
          list.appendChild(listItem);
        }
        return list;
      }

        const displayRemainingModules = (completedModules) => {
          let remainingModules = courseModules.slice(completedModules);
          document.getElementById("remainingModulesList").appendChild(displayModules(remainingModules));
        }
      
      const generateDashboard = () => {

        let studentName = studentNameInput.value;
        let completedModules = Number(completedModulesInput.value);
        let studyDay = studyDayInput.value;

        let totalStudyHours = calculateStudyHours(courseModules.length);
        let coursePercentComplete = calculatePercentComplete(completedModules, courseModules.length);
        let coursePercentRemaining = ((totalModules - completedModules) / totalModules) * 100;

        applyDashboardColor(coursePercentComplete);

        let dailyStudyHours = (hoursPerWeek / 7);
        let dailyStudyMinutes = (dailyStudyHours * 60);

        let grade = getCourseGrade(coursePercentComplete);
        let progress = getCourseProgress(coursePercentRemaining);

        let studyPlan = getStudyPlan(studyDay);

        displayDashboard(studentName, courseModules, completedModules, totalStudyHours, coursePercentComplete, coursePercentRemaining, grade, progress, studyDay, studyPlan);
        displayRemainingModules(completedModules);
      }

      const displayDashboard = (studentName, courseModules, completedModules, totalStudyHours, percentComplete, percentRemaining, grade, progress, studyDay, studyPlan) => {

        output.innerHTML = `
        <div class="dashboard-card">

            <h2>My Study Dashboard</h2>

            <p><strong>Name:</strong> ${studentName}</p>

            <p><strong>Total Modules:</strong> ${courseModules.length}</p>

            <p><strong>Completed Modules:</strong> ${completedModules}</p>

            <p><strong>Total Study Hours:</strong> ${totalStudyHours}</p>

            <p><strong>Percent Complete:</strong> ${percentComplete.toFixed(0)}%</p>

            <p><strong>Percent Remaining:</strong> ${percentRemaining.toFixed(0)}%</p>

            <p><strong>Current Grade:</strong> ${grade}</p>

            <p><strong>Progress Status:</strong> ${progress}</p>

            <p><strong>Study Day:</strong> ${studyDay}</p>

            <p><strong>Today's Plan:</strong> ${studyPlan}</p>

            <p><strong>Remaining Modules</strong><div id="remainingModulesList"></div></p>

        </div>`;
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

      const applyDashboardColor = (percentComplete) => {
        if(percentComplete >= 75) {
          output.style.backgroundColor = ("#d4edda");
        }
        else if(percentComplete >= 25) {
          output.style.backgroundColor = ("#fff3cd");
        }
        else {
          output.style.backgroundColor = ("#f8d7da");
        }
      }
        
const resetDashboard = () => {
  completedModulesInput.value = 0;
  studentNameInput.value = "";
  studyDayInput.value = "Monday";
  output.innerHTML = "";
  output.style.backgroundColor = "";
}

generateButton.addEventListener("click", generateDashboard);
resetButton.addEventListener("click", resetDashboard);