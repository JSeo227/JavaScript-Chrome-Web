const dates = document.getElementById("dates");
const clock = document.getElementById("clock");

setInterval(() => {
    const today = new Date()

    const year = today.getFullYear()
    const month = String(today.getMonth()+1).padStart(2, "0");
    const date =  String(today.getDate()).padStart(2, "0");

    const hours = String(today.getHours()).padStart(2, "0")
    const minutes = String(today.getMinutes()).padStart(2, "0")
    const seconds = String(today.getSeconds()).padStart(2, "0")
    
    dates.innerText = `${year}.${month}.${date}.`
    clock.innerText = `${hours}:${minutes}:${seconds}`;
    
}, 1000);





