/*
    Name: Camden Drumheller
    Date: 11/17/26
    Assignment: Final Project JS
    Quarter: 1st
    Instructor: Lisa Thoendel
*/

"use strict";

// Importing

import { validateInputs, runUnitTests } from "./validators.js";

// Variables

const generateButton = document.getElementById("generateButton");
const resetButton = document.getElementById("resetButton");
const output = document.getElementById("output");
const careerInput = document.getElementById("career");

export const careerPaths = [

    {

        name: "Software Developer",

        skills: [ "Algorithms", "Architecture", "Debugging", "Databases", "Testing", "Logic"],

        resources: [ "roadmap.sh", "Harvard CS50", "NeetCode", "LeetCode", "Refactoring Guru"]

    },

   {

        name: "Web Developer",

        skills: [ "HTML", "CSS", "JS", "APIs", "Security"],

        resources: [ "MDN Web Docs", "freeCodeCamp", "The Odin Project", "web.dev"]

    },

    {

        name: "Game Developer",

        skills: [ "Physics", "Rendering", "Engines", "Shaders"],

        resources: [ "Unity Learn", "Godot Engine Docs", "GameDev.tv", "Game Programming Patterns"]

    },

];

// Dashboard of everything

const generateDashboard = () => {
  try {

    let career = careerInput.value;

    let selectedCareer = careerPaths.find(path => {
        return path.name === career;
    })

    validateInputs({
        career,
        nameVerification: false,
        modulesVerification: false,
        studyVerification: false,
        careerVerification: true, 

    });

    console.log("Career: ", career);

    displayDashboard(output, selectedCareer);

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
    careerInput,
  ),
);

const displayDashboard = (output, selectedCareer) => {
    output.innerHTML = `
    <div class="dashboard-card">
      <h2>Career Dashboard</h2>
      <p><strong>Selected Career:</strong> ${selectedCareer.name}</p>

        <h3>Skills</h3>
        <ul>${selectedCareer.skills.map((skill) => `<li> ${skill} </li>`).join("")}</ul>

        <h4>Resources</h4>
        <ul>${selectedCareer.resources.map((resource) => `<li> ${resource} </li>`).join("")}</ul>
    </div>
  `;
};

const resetDashboard = (output, careerInput) => {
  careerInput.value = "";
  output.innerHTML = "";
  output.style.backgroundColor = "";
};