/*
    Name: Camden Drumheller
    Date: 11/01/26
    Assignment: Module 07 Applied Programming Activity
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

const jokeContainer = document.getElementById("jokeContainer");
const quoteContainer = document.getElementById("quoteContainer");

const courseModules = [
    { moduleName: "Module 1", hoursRequired: 6, topic: "JavaScript fundamentals" },
    { moduleName: "Module 2", hoursRequired: 6, topic: "Conditionals, arrays" },
    { moduleName: "Module 3", hoursRequired: 8, topic: "Functions, scope, loops" },
    { moduleName: "Module 4", hoursRequired: 5, topic: "DOM" },
    { moduleName: "Module 5", hoursRequired: 5, topic: "Debugging, error handling" },
    { moduleName: "Module 6", hoursRequired: 6, topic: "APIs" },
    { moduleName: "Module 7", hoursRequired: 7, topic: "Objects, iterators" },
    { moduleName: "Module 8", hoursRequired: 6, topic: "Modular JS, code organization, final project planning" },
    { moduleName: "Module 9", hoursRequired: 7, topic: "Modern tools, final project development" },
    { moduleName: "Module 10", hoursRequired: 10, topic: "Final project, deployment" }
];
let totalModules = 10;

let hoursPerWeek = 6;

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
          listItem.textContent = modules[i].moduleName;
          list.appendChild(listItem);
        }
        return list;
      }

        const displayRemainingModules = remainingModules => {
          document.getElementById("remainingModulesList").appendChild(displayModules(remainingModules));
        }
      
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

          applyDashboardColor(coursePercentComplete);

          let adjustedDailyHours = (hoursPerWeek / 6);
          let adjustedDailyMinutes = (adjustedDailyHours * 60);

          let grade = getCourseGrade(coursePercentComplete);
          let progress = getCourseProgress(coursePercentRemaining);
          console.log("Grade: ", grade, "Progress: ", progress);

          let studyPlan = getStudyPlan(studyDay, adjustedDailyMinutes);

          displayDashboard(studentName, courseModules, completedModules, totalStudyHours, coursePercentComplete, coursePercentRemaining, grade, progress, studyDay, studyPlan, remainingHours);

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

        
// Dashboard display using HTML

      const displayDashboard = (studentName, courseModules, completedModules, totalStudyHours, percentComplete, percentRemaining, grade, progress, studyDay, studyPlan, remainingHours) => {

        output.innerHTML = `
        <div class="dashboard-card">

            <h2>My Study Dashboard</h2>

            <p><strong>Name:</strong> ${studentName}</p>

            <p><strong>Total Modules:</strong> ${courseModules.length}</p>

            <p><strong>Completed Modules:</strong> ${completedModules}</p>

            <p><strong>Total Study Hours:</strong> ${totalStudyHours}</p>

            <p><strong>Remaining Study Hours:</strong> ${remainingHours}</p>

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

      const getStudyPlan = (studyDay, adjustedDailyMinutes) => {

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

// Dashboard background color

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
        
// Resets all inputted values

      const resetDashboard = () => {
        console.log("Student Name: ", studentNameInput.value);
        console.log("Completed Modules: ", completedModulesInput.value);
        console.log("Study Day: ", studyDayInput.value);
        completedModulesInput.value = 0;
        studentNameInput.value = "";
        studyDayInput.value = "Monday";
        output.innerHTML = "";
        output.style.backgroundColor = "";
      }

// Event Listeners: Buttons

  generateButton.addEventListener("click", generateDashboard);
  resetButton.addEventListener("click", resetDashboard);

// Validates user inputs

      const validateInputs = (studentName, completedModules, studyDay) => {
        
        let errors = [];

        if (studentName.trim() === "") {
          errors.push(`<li>Please enter a name.</li>`);
        }

        if (completedModules < 0 || completedModules > 10) {
          errors.push(`<li>Completed modules must be between 0 and 10. </li>`);
        }

        if (studyDay === "") {
          errors.push(`<li>Please select a study day.</li>`);
        }

        if (errors.length > 0) {
          throw new Error(errors.join(""));
        }
      }

// All unit tests

      const runUnitTests = () => {
        console.assert(getCourseGrade(50) === "F", "F Grade test failed");
        console.assert(getCourseGrade(65) === "D", "D Grade test failed");
        console.assert(getCourseGrade(75) === "C", "C Grade test failed");
        console.assert(getCourseGrade(85) === "B", "B Grade test failed");
        console.assert(getCourseGrade(95) === "A", "A Grade test failed");

        console.assert(getStudyPlan("Monday", 60) === "Today is your rest day!", "Monday Day test failed");
        console.assert(getStudyPlan("Tuesday", 60) === `Today is your lab day! Study for 60.00 minutes today. `, "Tuesday Day test failed");
        console.assert(getStudyPlan("Wednesday", 60) === `Today is your applied programming activity day! Study for 60.00 minutes today. `, "Wednesday Day test failed");
        console.assert(getStudyPlan("Thursday", 60) === `Today is a work day! Study for 60.00 minutes today.`, "Thursday Day test failed");
        console.assert(getStudyPlan("Friday", 60) === `Today is a travel day! In the car, study for 60.00 minutes today.`, "Friday day test failed");
      }

// Start of API Work

// Fetches random joke

const getJoke = async () => {
  const response = await fetch("https://official-joke-api.appspot.com/random_joke");
  const data = await response.json();
  return data;
}

// Displays joke

const displayJoke = async () => {
  try {
    jokeContainer.innerHTML = "Loading joke...";
    const joke = await getJoke();
    jokeContainer.innerHTML = 
      `<p>${joke.setup}</p> 
      <p>${joke.punchline}</p>`;
  }
  catch (error) {
    jokeContainer.innerHTML = `Unable to load joke.`;
  }
}

displayJoke();

// Gets the quote

const getQuote = async () => {
  const response = await fetch("https://dummyjson.com/quotes/random");
  const data = await response.json();
  return data;
}

// Displays the quote

const displayQuote = async () => {
  try {
    quoteContainer.innerHTML = "Loading Quote...";
    const quote = await getQuote();
    quoteContainer.innerHTML = 
      `<p>${quote.quote}</p>
      <p>${quote.author}</p>`
  }
  catch (error) {
    quoteContainer.innerHTML = `Unable to load quote.`;
  }
}

displayQuote();