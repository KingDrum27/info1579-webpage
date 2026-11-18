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

const generateButton = document.getElementById("generateButton");
const output = document.getElementById("output");

// Dashboard of everything

const generateDashboard = () => {
  try {

    const contacts = JSON.parse(localStorage.getItem("contacts")) || [];

    displayDashboard(output, contacts);

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


const displayDashboard = (output, contacts) => {
    output.innerHTML = `
    <div class="dashboard-card">
      <h2>Contact Logs</h2>

      ${contacts.map((contact) => `

        <div class="contacts entry" >
        <h4>Name: ${contact.name}</h4>
        <h4>Career Interest: ${contact.job}</h4>
        <h4>Phone Number: ${contact.phone}</h4>
        <br></br>

        </div>`).join("")
      }
    </div>
  `;
};

