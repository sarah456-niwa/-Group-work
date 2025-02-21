document.getElementById("timeForm").addEventListener("submit", function(event) {
    event.preventDefault();
    let time12 = document.getElementById("timeInput").value;
    document.getElementById("output").textContent = convertTo24Hour(time12);
});

function convertTo24Hour(time12) {
    let [time, modifier] = time12.split(" ");
    let [hours, minutes] = time.split(":");

    if (modifier === "PM" && hours !== "12") {
        hours = String(parseInt(hours, 10) + 12);
    } else if (modifier === "AM" && hours === "12") {
        hours = "00";
    }

    return `${hours}:${minutes}`;
}