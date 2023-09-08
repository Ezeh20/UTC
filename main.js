const UTC = document.getElementById("utc")
const DAY = document.getElementById("day")



function getUtcTime() {
    const utcTime = new Date();
    const day = utcTime.getDay() + 1
    utcTime.setHours(utcTime.getHours() + 1);;
    const watTime = utcTime.toUTCString();
    const daysOfTheWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    UTC.textContent = `UTC Time :  ${watTime}`
    DAY.textContent = `Today is  : ${daysOfTheWeek[utcTime.getDay()]}, the ${day}th day of the week.`
}
setInterval(getUtcTime, 1000);