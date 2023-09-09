const UTC = document.querySelector('[data-testid="currentUTCTime"]')
const DAY = document.querySelector('[data-testid="currentDayOfTheWeek"]')


function getDay() {
    const date = new Date();
    const daysOfTheWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const day = daysOfTheWeek[date.getDay()]
    return day;
}
DAY.textContent = `${getDay()}`

function getUtcTime() {
    const utcTime = new Date();
    const utc = utcTime.getTime();
    UTC.textContent = `${utc}`;
}

setInterval(getUtcTime, 1);