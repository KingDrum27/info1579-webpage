/*
    Name: Camden Drumheller
    Date: 11/02/26
    Assignment: Module 08 Applied Programming Activity
    Quarter: 1st
    Instructor: Lisa Thoendel
*/

"use strict";

// Importing

import {calculatePercentComplete, calculateStudyHours, getCourseGrade, getCourseProgress, getStudyPlan} from "./calculations.js";
import {validateInputs, runUnitTests} from "./validators.js";
import {resetDashboard, displayRemainingModules, applyDashboardColor, displayDashboard} from "./dashboard.js";
import {displayJoke, displayQuote} from "./api.js";
import {courseModules} from "./data.js";


// Variables

const studentNameInput = document.getElementById("studentName");
const completedModulesInput = document.getElementById("completedModules");
const studyDayInput = document.getElementById("studyDay");
const generateButton = document.getElementById("generateButton");
const resetButton = document.getElementById("resetButton");
const output = document.getElementById("output");

let totalModules = 10;

let hoursPerWeek = 6;

// Dashboard of everything

      const generateDashboard = () => {

        try {

          let studentName = studentNameInput.value;
          let completedModules = Number(completedModulesInput.value);
          let studyDay = studyDayInput.value;
          validateInputs(studentName, completedModules, studyDay);

          // Creates lists from courseModules array

          const moduleNames = courseModules.map(module => {
            return module.moduleName;
          })

          const remainingModules = courseModules.filter((module, index) => {
            return index >= completedModules;
          })

          const remainingHours = remainingModules.reduce((accumulator, currentValue) => {
            return accumulator + currentValue.hoursRequired;
          }, 0)

          // ---------

          console.log("Student Name: ", studentName);

          console.log(moduleNames);

          console.log("Completed Modules: ", completedModules);

          console.log("Study Day: ", studyDay);

          let totalStudyHours = calculateStudyHours(courseModules.length);

          let coursePercentComplete = calculatePercentComplete(completedModules, courseModules.length);
          console.log("Percent Complete: ", coursePercentComplete);

          let coursePercentRemaining = ((totalModules - completedModules) / totalModules) * 100;

          applyDashboardColor(coursePercentComplete, output);

          let adjustedDailyHours = (hoursPerWeek / 6);
          let adjustedDailyMinutes = (adjustedDailyHours * 60);

          let grade = getCourseGrade(coursePercentComplete);
          let progress = getCourseProgress(coursePercentRemaining);
          console.log("Grade: ", grade, "Progress: ", progress);

          let studyPlan = getStudyPlan(studyDay, adjustedDailyMinutes);

          displayDashboard(studentName, 
            courseModules, completedModules, totalStudyHours, 
            coursePercentComplete, coursePercentRemaining, grade, progress, 
            studyDay, studyPlan, remainingHours, output);

          displayRemainingModules(remainingModules);

          runUnitTests();

        } catch (error) {
          
            output.innerHTML = `

              <div class="dashboard-card">
                <h2>Error</h2>
                <ul>${error.message}</ul>
              </div>`;

            output.style.backgroundColor = "#f8d7da";

          }
      }

// Event Listeners: Buttons

  generateButton.addEventListener("click", generateDashboard);
  resetButton.addEventListener("click", () => 
    resetDashboard(studentNameInput, completedModulesInput, studyDayInput, output));

displayJoke();
displayQuote();