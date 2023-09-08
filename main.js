const UTC = document.getElementById("utc")
const DAY = document.getElementById("day")



function getUtcTime() {
    const utcTime = new Date();
    const utc = utcTime.getTime()
    const daysOfTheWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    UTC.textContent = `UTC Time :  ${utc}`
    DAY.textContent = `Day of the week  : ${daysOfTheWeek[utcTime.getDay()]}`
}
setInterval(getUtcTime, 1000);