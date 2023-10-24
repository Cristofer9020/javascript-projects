const monthElement = document.getElementById("month")
const dayWeekElement = document.getElementById("day-week")
const dayMonthElement = document.getElementById("day-month")
const yearElement = document.getElementById("year")

const date = new Date()
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

monthElement.textContent = months[date.getMonth()]
dayWeekElement.textContent = days[date.getDay()]
dayMonthElement.textContent = date.getDate()
yearElement.textContent = date.getFullYear()