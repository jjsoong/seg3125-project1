const nameInput = document.getElementById("name_input");
const emailInput = document.getElementById("email_input");
const serviceSelect = document.getElementById("service_select");
const controllerSelect = document.getElementById("controller_select");
const otherInput = document.getElementById("other_controller_input");
const dateInput = document.getElementById("date_input");
const timeSelect = document.getElementById("time_select");
const bookingForm = document.getElementById("booking_form");

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
    if (event.target.value == "other") {
        otherInput.className = "form-select";
    } else {
        otherInput.className = "form-select d-none";
        otherInput.value = "";
    }
});

dateInput.addEventListener("input", (event) => {
    var selectedDate = new Date(`${event.target.value}T12:00`);
    var inHTML = "";

    for (var i = 0; i < availableTimeSlots.length; i++) {
        if (dateEquals(selectedDate, availableTimeSlots[i])) {
            var hours = availableTimeSlots[i].getHours();
            var minutes = availableTimeSlots[i].getMinutes();

            if (hours > 12) {
                inHTML = inHTML + `<option value="${hours-12}${minutes}">${hours-12}:${minutes} p.m.</option>`;
            } else {
                inHTML = inHTML + `<option value="${hours}${minutes}">${hours}:${minutes} a.m.</option>`;
            }
        }
    }

    timeSelect.innerHTML = inHTML;
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

bookingForm.onsubmit = function formSubmit(event) {
    var confirmRow = document.getElementById("confirm_row");
    var confirmationRow = document.getElementById("confirmation_row");
    var formHeading = document.getElementById("form_heading");

    confirmRow.className = "row my-4 d-none";
    confirmationRow.className = "row my-4";
    formHeading.innerHTML = "Confirmation of Appointment";

    nameInput.disabled = true;
    emailInput.disabled = true;
    serviceSelect.disabled = true;
    controllerSelect.disabled = true;
    otherInput.disabled = true;
    dateInput.disabled = true;
    timeSelect.disabled = true;

    event.preventDefault();
}