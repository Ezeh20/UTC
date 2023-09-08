const UTC = document.getElementById("utc")
const DAY = document.getElementById("day")

const date = new Date()
const daysOfTheWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
DAY.textContent = `Day : ${daysOfTheWeek[date.getDay()]}`

function getUtcTime() {
    const utcTime = new Date();
    const time = utcTime.getTime();
    UTC.textContent = `UTC Time : ${time}`
}
setInterval(getUtcTime, 1);


