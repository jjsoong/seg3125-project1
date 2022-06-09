const serviceSelect = document.getElementById("service_select");
const controllerSelect = document.getElementById("controller_select");
const dateInput = document.getElementById("date_input");

// Times for dates arrays here:
const availableTimeSlots = [new Date(2022, 5, 10, 12, 45),
                            new Date(2022, 5, 10, 14, 15)];
// ...

serviceSelect.addEventListener("input", (event) => {
    var priceText = document.getElementById("price_text");

    switch (event.target.value) {
        case "exterior_cleaning":
            priceText.innerHTML = "$8.99";
            break;
        
        case "interior_cleaning":
            priceText.innerHTML = "$20.99"
            break;

        case "joystick_repair":
            priceText.innerHTML = "$15.99"
            break;

        default:
            priceText.innerHTML = "";
            break;
    }
});

controllerSelect.addEventListener("input", (event) => {
    var textInput = document.getElementById("other_controller_input");

    if (event.target.value == "other") {
        textInput.className = "form-select";
    } else {
        textInput.className = "form-select d-none";
        textInput.value = "";
    }
});

dateInput.addEventListener("input", (event) => {
    var timeInput = document.getElementById("time_select");
    var selectedDate = new Date(`${event.target.value}T12:00`);
    var inHTML = "";

    for (var i = 0; i < availableTimeSlots.length; i++) {
        if (dateEquals(selectedDate, availableTimeSlots[i])) {
            var hours = availableTimeSlots[i].getHours();
            var minutes = availableTimeSlots[i].getMinutes();
            inHTML = inHTML + `<option value="${hours}${minutes}">${hours}:${minutes}</option>`;
        }
    }

    timeInput.innerHTML = inHTML;
});

function dateEquals(d1, d2) {
    if (!(d1 instanceof Date && d2 instanceof Date)) {
        console.log("Non-date values errornously entered.");
        return false;
    }

    // console.log(d1.getDate() === d2.getDate());
    // console.log(d1.getMonth() === d2.getMonth());
    // console.log(d1.getFullYear() === d2.getFullYear());

    return (d1.getDate() === d2.getDate() &&
            d1.getMonth() === d2.getMonth() &&
            d1.getFullYear() === d2.getFullYear());
}