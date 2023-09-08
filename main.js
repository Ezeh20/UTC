const UTC = document.getElementById("utc")
const DAY = document.getElementById("day")

const date = new Date()
const daysOfTheWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];


DAY.textContent = `${daysOfTheWeek[date.getDay()]}`;
UTC.textContent = date.getTime();