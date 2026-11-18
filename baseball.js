/*
    Name: Camden Drumheller
    Date: 11/17/26
    Assignment: Final Project JS
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

export const baseballWorkout = [

    {
        Day: "Sunday",
        Throwing: ["60 ft", "Light", "40 baseballs"],
        WaterBagWork: ["Pitching Routine", "Water bag"],
        WeightRoomSession: ["Nothing"],
        Running: ["Nothing"]
    },

    {
        Day: "Monday",
        Throwing: ["90 ft", "Light", "60 baseballs"],
        WaterBagWork: ["Pitching Routine", "Water bag"],
        WeightRoomSession: ["Legs"],
        Running: ["Challenge Day", "On the Baseball Field"]
    },

    {
        Day: "Tuesday",
        Throwing: ["120 ft", "Medium", "60 baseballs"],
        WaterBagWork: ["Pitching Routine"],
        WeightRoomSession: ["Arms", "After school Baseball"],
        Running: ["Hills"]
    },

    {
        Day: "Wednesday",
        Throwing: ["90 ft", "Medium", "50 baseballs"],
        WaterBagWork: ["Pitching Routine", "Water bag"],
        WeightRoomSession: ["Nothing"],
        Running: ["Pro Agility", "Testing"]
    },

    {
        Day: "Thursday",
        Throwing: ["150 ft", "Long Toss", "80 baseballs"],
        WaterBagWork: ["Pitching Routine", "Water bag", "Water Ball"],
        WeightRoomSession: ["Legs", "After School Baseball"],
        Running: ["Nothing"]
    },

    {
        Day: "Friday",
        Throwing: ["120 ft", "Heavy", "50 baseballs"],
        WaterBagWork: ["Pitching Routine", "Water bag"],
        WeightRoomSession: ["Arms"],
        Running: ["Nothing"]
    },

    {
        Day: "Saturday",
        Throwing: ["Rest Day"],
        WaterBagWork: ["Pitching Routine", "Water bag"],
        WeightRoomSession: ["Nothing"],
        Running: ["Nothing"]
    },

]

// Dashboard of everything

const generateDashboard = () => {
  try {

    let workout = workoutInput.value;

    let selectedWorkout = baseballWorkout.find(bball => {
        return bball.Day === workout;
    })

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

        <h5>Throwing</h5>
        <ul>${selectedWorkout.Throwing.map((throws) => `<li> ${throws} </li>`).join("")}</ul>

        <h5>WaterBagWork</h5>
        <ul>${selectedWorkout.WaterBagWork.map((work) => `<li> ${work} </li>`).join("")}</ul>

        <h5>WeightRoomSession</h5>
        <ul>${selectedWorkout.WeightRoomSession.map((room) => `<li> ${room} </li>`).join("")}</ul>

        <h5>Running</h5>
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