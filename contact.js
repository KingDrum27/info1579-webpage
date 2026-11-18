/*
    Name: Camden Drumheller
    Date: 11/03/26
    Assignment: Module 08 Applied Programming Activity
    Quarter: 1st
    Instructor: Lisa Thoendel
*/

"use strict";

// Importing

// Variables

const submitButton = document.getElementById("submitButton");
const nameInput = document.getElementById("name");
const jobInput = document.getElementById("interest");
const phoneInput = document.getElementById("phone");
const output = document.getElementById("output");

const contacts = JSON.parse(localStorage.getItem("contacts")) || [];

// Dashboard of everything

const generateDashboard = () => {
  try {

    let name = nameInput.value;
    let job = jobInput.value;
    let phone = phoneInput.value

    contacts.push({
        name: name,
        job: job,
        phone: phone
    });

    localStorage.setItem("contacts", JSON.stringify(contacts));

    resetDashboard(nameInput, jobInput, phoneInput);

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

submitButton.addEventListener("click", generateDashboard);

const resetDashboard = (nameInput, jobInput, phoneInput) => {
  nameInput.value = "";
    jobInput.value = "";
  phoneInput.value = "";
};

