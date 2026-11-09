/*
    Name: Camden Drumheller
    Date: 11/03/26
    Assignment: Module 08 Applied Programming Activity
    Quarter: 1st
    Instructor: Lisa Thoendel
*/

"use strict";

// Calculate course percentages

export function calculatePercentComplete(completed, total) {
  return (completed / total) * 100;
}

// Calculate totalStudyHours

export function calculateStudyHours(modules, hoursPerModule = 6) {
  return modules * hoursPerModule;
}

// Calculate courseGrade: Arrow Function

export const getCourseGrade = (percentComplete) => {
  if (percentComplete < 60) {
    return "F";
  } else if (percentComplete >= 60 && percentComplete < 70) {
    return "D";
  } else if (percentComplete >= 70 && percentComplete < 80) {
    return "C";
  } else if (percentComplete >= 80 && percentComplete < 90) {
    return "B";
  } else if (percentComplete >= 90 && percentComplete <= 100) {
    return "A";
  } else {
    return "Invalid entry";
  }
};

// Calculate courseProgress: Function Expression

export const getCourseProgress = function (percentRemaining) {
  if (percentRemaining == 0) {
    return "Finished!";
  } else if (percentRemaining >= 1 && percentRemaining < 25) {
    return "Almost Finished!";
  } else if (percentRemaining >= 25 && percentRemaining < 75) {
    return "Making Progress";
  } else if (percentRemaining >= 75 && percentRemaining <= 100) {
    return "Just Getting Started";
  } else {
    return "Invalid entry.";
  }
};

// Based on the day, what is the study plan?

export const getStudyPlan = (studyDay, adjustedDailyMinutes) => {
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
};
