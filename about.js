const aboutMeObject = {
    name: "Camden",
    currentJob: "Lawn Mowing",
    hobbies: ["Baseball", "Gaming", "Coding", "Eating", "Star Wars"],
    skills: ["Hardworking", "Dedicated", "Focused", "Strong", "Athlete"]
}

/*
    Name: Camden Drumheller
    Date: 11/03/26
    Assignment: Module 08 Applied Programming Activity
    Quarter: 1st
    Instructor: Lisa Thoendel
*/

"use strict";

// Importing

import { displayJoke, displayQuote } from "./api.js";

// Variables

const output = document.getElementById("output");

// Dashboard of everything

const generateDashboard = () => {
  try {

    let meTopics = aboutMeObject;

    displayDashboard(output, meTopics)

  } catch (error) {
    output.innerHTML = `

              <div class="dashboard-card">
                <h2>Error</h2>
                <ul>${error.message}</ul>
              </div>`;

    output.style.backgroundColor = "#f8d7da";
  }
};


const displayDashboard = (output, meTopics) => {
    output.innerHTML = `
    <div class="dashboard-card">
      <h2>All About Me</h2>

      <h3>My Name is ${meTopics.name}</h3>

        <h4>Current Job</h4>
        <p>${meTopics.currentJob}</p>

        <h4>Hobbies</h4>
        <ul>${meTopics.hobbies.map((hobby) => `<li> ${hobby} </li>`).join("")}</ul>

        <h4>Skills</h4>
        <ul>${meTopics.skills.map((skill) => `<li> ${skill} </li>`).join("")}</ul>
    </div>
  `;
};

generateDashboard();

displayJoke();
displayQuote();