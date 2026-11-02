// Validates user inputs

        export const validateInputs = (studentName, completedModules, studyDay) => {
        
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

        export const runUnitTests = () => {
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