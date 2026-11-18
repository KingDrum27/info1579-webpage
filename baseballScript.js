/*
    Name: Camden Drumheller
    Date: 11/03/26
    Assignment: Module 08 Applied Programming Activity
    Quarter: 1st
    Instructor: Lisa Thoendel
*/

"use strict";

// Importing


import { baseballWorkout } from "./baseball.js";

// Variables

const generateButton = document.getElementById("generateButton");
const resetButton = document.getElementById("resetButton");
const output = document.getElementById("output");
const workoutInput = document.getElementById("workout");

// Dashboard of everything

const generateDashboard = () => {
  try {

    let workout = workoutInput.value;

    let selectedWorkout = baseballWorkout.find(bball => {
        return bball.Day === workout;
    })


    // Creates lists from courseModules array

    // ---------

    validateInputs({workout});

    console.log("Workout: ", workout);

    displayDashboard(output, selectedWorkout);

  } catch (error) {
    output.innerHTML = `

              <div class="dashboard-card">
                <h2>Error</h2>
                <ul>${error.message}</ul>
              </div>`;

    output.style.backgroundColor = "#f8d7da";
  }
};

// Event Listeners: Buttons

generateButton.addEventListener("click", generateDashboard);
resetButton.addEventListener("click", () =>
  resetDashboard(
    output,
    workoutInput,
  ),
);

const displayDashboard = (output, selectedWorkout) => {
    output.innerHTML = `
    <div class="dashboard-card">
      <h2>Baseball Workout Dashboard</h2>
      <p><strong>Selected Workout:</strong> ${selectedWorkout.Day}</p>

        <h3>Throwing</h3>
        <ul>${selectedWorkout.Throwing.map((throws) => `<li> ${throws} </li>`).join("")}</ul>

        <h4>WaterBagWork</h4>
        <ul>${selectedWorkout.WaterBagWork.map((work) => `<li> ${work} </li>`).join("")}</ul>

        <h5>WeightRoomSession</h5>
        <ul>${selectedWorkout.WeightRoomSession.map((room) => `<li> ${room} </li>`).join("")}</ul>

        <h6>Running</h6>
        <ul>${selectedWorkout.Running.map((run) => `<li> ${run} </li>`).join("")}</ul>

    </div>
  `;
};

const resetDashboard = (output, workoutInput) => {
  workoutInput.value = "";
  output.innerHTML = "";
  output.style.backgroundColor = "";
};

const validateInputs = ({workout = ""}) => {
    let errors = [];

  if (workout === "") {
    errors.push(`<li>Please enter a workout day.</li>`);
  }

  if (errors.length > 0) {
    throw new Error(errors.join(""));
  }
};