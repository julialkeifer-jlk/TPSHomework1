function updateDateTime()
{
    const now = new Date();
    document.getElementById("datetime").textContent = now.toLocaleString();
}

updateDateTime();
setInterval(updateDateTime, 1000);

//used https://stackoverflow.com/questions/23994748/display-the-current-date-and-time-using-html-and-javascript-with-scrollable-effe