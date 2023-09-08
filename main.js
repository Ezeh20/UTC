const UTC = document.getElementById("utc")
const DAY = document.getElementById("day")

const date = new Date()
const daysOfTheWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
DAY.textContent = ` ${daysOfTheWeek[date.getDay()]}`

function getUtcTime() {
    const utcTime = new Date();
    utcTime.setMinutes(utcTime.getMinutes() - utcTime.getTimezoneOffset())
    const time = utcTime.toISOString().slice(11, -1)
    UTC.textContent = `${time}`
}
getUtcTime();
setInterval(getUtcTime, 100);


