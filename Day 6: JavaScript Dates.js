// Objective

// In this challenge, we learn about JavaScript Dates. Check out the attached tutorial for more details.

// Task

// Given a date string, dateString, in the format MM/DD/YYYY, find and return the day name for that date. Each day name must be one of the following strings: Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, or Saturday. For example, the day name for the date 12/07/2016 is Wednesday.




function getDayName(dateString) {
    let dayName;
    // Write your code here
    switch(new Date(dateString).getDay()) {
        case 0:
            dayName = "Sunday";
            break;
        case 1:
            dayName = "Monday";
            break;
        case 2:
            dayName = "Tuesday";
            break;
        case 3:
            dayName = "Wednesday";
            break;
        case 4:
            dayName = "Thursday";
            break;
        case 5:
            dayName = "Friday"; 
            break;
        case 6:
            dayName = "Saturday";
            break;
        }
    
    return dayName;
}
