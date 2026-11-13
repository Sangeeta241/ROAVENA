
// CUSTOMER LOGIN PROTECTION
const currentSession = JSON.parse(
    sessionStorage.getItem("roavena-session") || "null"
);

if (!currentSession || currentSession.role !== "customer") {
    window.location.replace("login.html");
} else {

document.addEventListener("DOMContentLoaded", function () {
/* =========================================
   ROAVENA — TRIP BUILDER JAVASCRIPT
========================================= */



    // 1. GET HTML ELEMENTS

    const tripForm = document.getElementById("tripForm");

    const originInput = document.getElementById("origin");
    const destinationInput = document.getElementById("destination");

    const startDate = document.getElementById("startDate");
    const endDate = document.getElementById("endDate");

    const travellersInput = document.getElementById("travellers");

    const submitButton = tripForm.querySelector(
        'button[type="submit"]'
    );


    // 2. SET CURRENT YEAR

    const yearElement = document.getElementById("year");

    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }


    // 3. DESTINATION DROPDOWN

    const destinationsList = [
    "Manali",
    "Goa",
    "Jaipur",
    "Gangtok",
    "Rishikesh",
    "Kashmir",
    "Udaipur",
    "Darjeeling",
    "Munnar",
    "Meghalaya",
    "Varanasi",
    "Agra",
    "Jaisalmer",
    "Andaman",
    "Ooty"
];

if (!destinationInput) {
    console.error("Destination dropdown not found!");
    return;
}

destinationInput.innerHTML = "";

const defaultOption = document.createElement("option");
defaultOption.value = "";
defaultOption.textContent = "Select your destination";
destinationInput.appendChild(defaultOption);

destinationsList.forEach(function (place) {
    const option = document.createElement("option");
    option.value = place;
    option.textContent = place;
    destinationInput.appendChild(option);
});              

console.log("ROAVENA destinations loaded:", destinationInput.options.length - 1);


    // 4. DESTINATION AUTO-FILL

    const urlParams = new URLSearchParams(window.location.search);

    let selectedDestination =
        urlParams.get("destination") ||
        urlParams.get("place") ||
        ROAVENAStorage.getItem("roavena-selected-destination") ||
        "";

    const selectedTrip = ROAVENAStorage.getJSON(
        "roavena-selected-trip"
    );

    if (selectedTrip && selectedTrip.destination) {
        selectedDestination = selectedTrip.destination;
    }

    if (destinationsList.includes(selectedDestination)) {

        destinationInput.value = selectedDestination;

        ROAVENAStorage.setItem(
            "roavena-selected-destination",
            selectedDestination
        );

    } else {

        destinationInput.value = "";

    }

    destinationInput.addEventListener("change", function () {

        ROAVENAStorage.setItem(
            "roavena-selected-destination",
            destinationInput.value
        );

    });


    // 5. MINIMUM DEPARTURE DATE

    function getLocalDate() {

        const today = new Date();

        const year = today.getFullYear();

        const month = String(
            today.getMonth() + 1
        ).padStart(2, "0");

        const day = String(
            today.getDate()
        ).padStart(2, "0");

        return `${year}-${month}-${day}`;
    }

    startDate.min = getLocalDate();
    endDate.min = getLocalDate();


    // 6. DATE VALIDATION

    startDate.addEventListener("change", function () {

        const selectedStartDate = startDate.value;

        endDate.min = selectedStartDate || getLocalDate();

        if (
            endDate.value &&
            endDate.value <= selectedStartDate
        ) {

            endDate.value = "";

            showMessage(
                "Please select a return date after your departure date.",
                "error"
            );

        }

    });


    endDate.addEventListener("change", function () {

        if (
            startDate.value &&
            endDate.value <= startDate.value
        ) {

            endDate.setCustomValidity(
                "Return date must be after your departure date."
            );

        } else {

            endDate.setCustomValidity("");

        }

    });


    // 7. CALCULATE TRIP DURATION

    function calculateDuration(start, end) {

        const startTime = new Date(start + "T00:00:00");

        const endTime = new Date(end + "T00:00:00");

        const difference =
            endTime.getTime() - startTime.getTime();

        return Math.round(
            difference / (1000 * 60 * 60 * 24)
        );

    }


    // 8. STATUS MESSAGE

    const statusMessage = document.createElement("div");

    statusMessage.id = "tripStatus";

    statusMessage.setAttribute("role", "status");

    statusMessage.style.marginTop = "18px";
    statusMessage.style.fontSize = "13px";
    statusMessage.style.fontWeight = "600";
    statusMessage.style.textAlign = "center";

    tripForm.querySelector(
        ".form-submit-area"
    ).appendChild(statusMessage);


    function showMessage(message, type) {

        statusMessage.textContent = message;

        statusMessage.style.color =
            type === "error" ? "#b43b32" : "#173f35";

    }


    // 9. FORM SUBMISSION

    tripForm.addEventListener("submit", function (event) {

        event.preventDefault();

        statusMessage.textContent = "";

        if (!tripForm.reportValidity()) {
            return;
        }

        const origin = originInput.value.trim();

        const destination = destinationInput.value.trim();

        const departure = startDate.value;

        const returning = endDate.value;

        const travellers = Number(travellersInput.value);


        if (!origin || !destinationsList.includes(destination)) {

            showMessage(
                "Please enter your starting city and select a valid destination.",
                "error"
            );

            return;

        }


        if (
            departure < getLocalDate() ||
            returning <= departure
        ) {

            showMessage(
                "Please select valid travel dates.",
                "error"
            );

            return;

        }


        if (
            !Number.isInteger(travellers) ||
            travellers < 1 ||
            travellers > 30
        ) {

            showMessage(
                "Please enter between 1 and 30 travellers.",
                "error"
            );

            return;

        }


        // COLLECT ACTIVITIES

        const selectedActivities = Array.from(
            tripForm.querySelectorAll(
                'input[name="activities"]:checked'
            )
        ).map(function (activity) {

            return activity.value;

        });


        // COLLECT TRIP DETAILS

        const tripDetails = {

            id: Date.now(),

            origin: origin,

            destination: destination,

            departureDate: departure,

            returnDate: returning,

            duration: calculateDuration(
                departure,
                returning
            ),

            travellers: travellers,

            tripType: document.getElementById("tripType").value,

            transport: document.getElementById("transport").value,

            accommodation: document.getElementById("accommodation").value,

            budget: document.getElementById("budget").value,

            activities: selectedActivities,

            specialRequests: document.getElementById(
                "specialRequests"
            ).value.trim(),

            createdAt: new Date().toISOString()

        };


        // SAVE TRIP

        const saved = ROAVENAStorage.setCustomerJSON(
    "trip-draft",
    tripDetails
);

        if (saved) {

            ROAVENAStorage.setItem(
                "roavena-selected-destination",
                destination
            );

            showMessage(
                "Your trip details have been saved successfully!",
                "success"
            );

            submitButton.textContent = "Trip Saved ✓";

        } else {

            showMessage(
                "Unable to save your trip. Please try again.",
                "error"
            );

        }

    });


    // 10. RESTORE PREVIOUSLY SAVED TRIP

    const trip = ROAVENAStorage.getCustomerJSON(
    "trip-draft"
);

    if (trip) {

        if (trip.origin) {
            originInput.value = trip.origin;
        }

        if (destinationsList.includes(trip.destination)) {
            destinationInput.value = trip.destination;
        }

        if (trip.departureDate) {
            startDate.value = trip.departureDate;
        }

        if (trip.returnDate) {
            endDate.value = trip.returnDate;
            endDate.min = trip.departureDate;
        }

        if (trip.travellers) {
            travellersInput.value = trip.travellers;
        }

        if (trip.tripType) {
            document.getElementById("tripType").value = trip.tripType;
        }

        if (trip.transport) {
            document.getElementById("transport").value = trip.transport;
        }

        if (trip.accommodation) {
            document.getElementById("accommodation").value = trip.accommodation;
        }

        if (trip.budget) {
            document.getElementById("budget").value = trip.budget;
        }

        if (trip.activities) {

            trip.activities.forEach(function (activity) {

                const checkbox = tripForm.querySelector(
                    `input[name="activities"][value="${activity}"]`
                );

                if (checkbox) {
                    checkbox.checked = true;
                }

            });

        }

        if (trip.specialRequests) {
            document.getElementById("specialRequests").value =
                trip.specialRequests;
        }

    }

    });
}
