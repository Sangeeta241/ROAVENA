
document.addEventListener("DOMContentLoaded", function () {
        let currentSession = null;

    try {
        currentSession = JSON.parse(
            sessionStorage.getItem("roavena-session") || "null"
        );
    } catch (error) {
        currentSession = null;
    }

    if (!currentSession || currentSession.role !== "customer" || !currentSession.email) {
        window.location.replace("login.html");
        return;
    }

    const customerEmail = currentSession.email.trim().toLowerCase();

    const bookingsList = document.getElementById("bookingsList");
    const emptyBookings = document.getElementById("emptyBookings");

    const totalBookings = document.getElementById("totalBookings");
    const totalDestinations = document.getElementById("totalDestinations");
    const totalSpending = document.getElementById("totalSpending");

    document.getElementById("year").textContent =
        new Date().getFullYear();

    function formatPrice(amount) {
        return "₹" + Math.round(Number(amount) || 0)
            .toLocaleString("en-IN");
    }

    function formatDate(date) {
        if (!date) return "Not specified";

        const parsed = new Date(date + "T00:00:00");

        if (Number.isNaN(parsed.getTime())) return "Not specified";

        return parsed.toLocaleDateString("en-IN", {
            day: "numeric",
            month: "short",
            year: "numeric"
        });
    }

    function displayValue(value) {
        if (!value) return "Not selected";

        return String(value)
            .replace(/[-_]/g, " ")
            .replace(/\b\w/g, letter => letter.toUpperCase());
    }

   function getReadableBookingName(booking, type) {

    const destination = String(booking.destination || "")
        .trim()
        .toLowerCase();

    const hotelNames = {
        manali: {
            "manali-h1": "Span Resort & Spa",
            "manali-h2": "Welcomhotel by ITC Hotels Hamsa",
            "manali-h3": "Storii by ITC Hotels Urvashi's Retreat"
        },
        goa: {
            "goa-h1": "Taj Fort Aguada Resort & Spa",
            "goa-h2": "Alila Diwa Goa",
            "goa-h3": "The Zuri White Sands Goa Resort & Casino"
        },
        jaipur: {
            "jaipur-h1": "ITC Rajputana, Jaipur",
            "jaipur-h2": "Samode Haveli",
            "jaipur-h3": "Rambagh Palace"
        },
        gangtok: {
            "gangtok-h1": "The Elgin Nor-Khill",
            "gangtok-h2": "Summit Norling Resort & Spa",
            "gangtok-h3": "Summit Ttakshang Residency Hotel & Spa"
        },
        rishikesh: {
            rishikesh1: "Neemrana's Glasshouse on The Ganges",
            rishikesh2: "Aloha On The Ganges",
            rishikesh3: "Ganga Kinare"
        },
        kashmir: {
            "kashmir-h1": "Taj Dal View, Srinagar",
            "kashmir-h2": "The Khyber Himalayan Resort & Spa",
            "kashmir-h3": "Hotel Akbar Sonamarg"
        },
        udaipur: {
            "udaipur-h1": "Taj Lake Palace",
            "udaipur-h2": "Trident Udaipur",
            "udaipur-h3": "The LaLiT Laxmi Vilas Palace"
        },
        darjeeling: {
            "darjeeling-h1": "MAYFAIR Hill Resort, Darjeeling",
            "darjeeling-h2": "Cedar Inn",
            "darjeeling-h3": "Taj Chia Kutir Resort & Spa"
        },
        munnar: {
            munnar1: "Munnar Mahal",
            munnar2: "The Fog Munnar Resort & Spa",
            munnar3: "Scenic, Munnar - IHCL SeleQtions"
        },
        meghalaya: {
            meghalaya1: "Polo Resort, Cherrapunji",
            meghalaya2: "Polo Towers, Shillong",
            meghalaya3: "Ri Kynjai – Serenity by the Lake"
        },
        varanasi: {
            varanasi1: "Taj Ganges, Varanasi",
            varanasi2: "BrijRama Palace",
            varanasi3: "Hotel Madin"
        },
        agra: {
            agra1: "Taj Agra",
            agra2: "ITC Mughal, Agra",
            agra3: "Courtyard by Marriott Agra"
        },
        jaisalmer: {
            jaisalmer1: "Storii by ITC Hotels, Jaisalmer",
            jaisalmer2: "Hotel Rang Niwas",
            jaisalmer3: "Heritage Haveli Jaisalmer"
        },
        andaman: {
            andaman1: "Taj Exotica Resort & Spa",
            andaman2: "Symphony Palms Beach Resort",
            andaman3: "SeaShell Havelock"
        },
        ooty: {
            ooty1: "Savoy, Ooty - IHCL SeleQtions",
            ooty2: "Fortune Resort Sullivan Court",
            ooty3: "Sinclairs Retreat Ooty"
        }
    };

    const localNames = {
        manali: {
            "manali-l1": "Local Sightseeing Cab",
            "manali-l2": "Bike Rental",
            "manali-l3": "Local Bus"
        },
        goa: {
            "goa-l1": "Private Cab",
            "goa-l2": "Scooter Rental",
            "goa-l3": "Local Bus"
        },
        jaipur: {
            "jaipur-l1": "City Sightseeing Cab",
            "jaipur-l2": "Auto Rickshaw",
            "jaipur-l3": "Local Bus"
        },
        gangtok: {
            "gangtok-l1": "Local Tourist Cab",
            "gangtok-l2": "Shared Taxi",
            "gangtok-l3": "Local Vehicle"
        },
        rishikesh: {
            "rishikesh-l1": "Local Sightseeing Cab",
            "rishikesh-l2": "Scooter Rental",
            "rishikesh-l3": "Auto Rickshaw"
        },
        kashmir: {
            "kashmir-l1": "Private Sightseeing Cab",
            "kashmir-l2": "Local Taxi",
            "kashmir-l3": "Shared Cab"
        },
        udaipur: {
            "udaipur-l1": "City Tour Cab",
            "udaipur-l2": "Auto Rickshaw",
            "udaipur-l3": "Scooter Rental"
        },
        darjeeling: {
            "darjeeling-l1": "Local Sightseeing Cab",
            "darjeeling-l2": "Shared Jeep",
            "darjeeling-l3": "Local Taxi"
        },
        munnar: {
            "munnar-l1": "Sightseeing Cab",
            "munnar-l2": "Jeep Safari",
            "munnar-l3": "Local Taxi"
        },
        meghalaya: {
            "meghalaya-l1": "Private Tour Cab",
            "meghalaya-l2": "Shared Taxi",
            "meghalaya-l3": "Local Vehicle"
        },
        varanasi: {
            "varanasi-l1": "City Tour Cab",
            "varanasi-l2": "Auto Rickshaw",
            "varanasi-l3": "E-Rickshaw"
        },
        agra: {
            "agra-l1": "City Sightseeing Cab",
            "agra-l2": "Auto Rickshaw",
            "agra-l3": "E-Rickshaw"
        },
        jaisalmer: {
            "jaisalmer-l1": "Desert Tour Jeep",
            "jaisalmer-l2": "Local Cab",
            "jaisalmer-l3": "Auto Rickshaw"
        },
        andaman: {
            "andaman-l1": "Island Cab",
            "andaman-l2": "Scooter Rental",
            "andaman-l3": "Local Bus"
        },
        ooty: {
            "ooty-l1": "Sightseeing Cab",
            "ooty-l2": "Scooter Rental",
            "ooty-l3": "Local Bus"
        }
    };

    const selection = type === "hotel"
        ? booking.hotelSelection
        : booking.localTransportSelection;

    if (type === "transport") {
        const names = {
            flight: "Flight",
            train: "Train",
            bus: "Intercity Bus",
            cab: "Private Cab"
        };

        return booking.transportName ||
            names[booking.transportSelection] ||
            displayValue(booking.transportSelection);
    }

    const nameMap = type === "hotel" ? hotelNames : localNames;

    return nameMap[destination]?.[selection] ||
        displayValue(selection);
}

    function escapeHTML(value) {
        return String(value ?? "").replace(/[&<>"']/g, character => ({
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;"
        })[character]);
    }

    function loadBookings() {

        let bookings = [];

        try {
            const allBookings = JSON.parse(
    localStorage.getItem("roavena-bookings") || "[]"
);

bookings = Array.isArray(allBookings)
    ? allBookings.filter(booking =>
        String(booking.customerEmail || "").trim().toLowerCase() === customerEmail
    )
    : [];

        } catch (error) {
            console.error("Unable to read bookings:", error);
        }

        bookings.sort((a, b) =>
            Number(b.bookingId || 0) - Number(a.bookingId || 0)
        );

        totalBookings.textContent = bookings.length;

        const destinations = new Set(
            bookings.map(booking =>
                String(booking.destination || "").toLowerCase()
            ).filter(Boolean)
        );

        totalDestinations.textContent = destinations.size;

        const spending = bookings.reduce((sum, booking) =>
            sum + (Number(booking.estimatedTotal) || 0), 0
        );

        totalSpending.textContent = formatPrice(spending);

        if (bookings.length === 0) {
            bookingsList.hidden = true;
            emptyBookings.hidden = false;
            return;
        }

        bookingsList.hidden = false;
        emptyBookings.hidden = true;

        bookingsList.innerHTML = bookings.map(booking => {

            const route =
                `${displayValue(booking.origin)} → ${displayValue(booking.destination)}`;

            const dates =
                `${formatDate(booking.departureDate)} – ${formatDate(booking.returnDate)}`;

            const bookingId =
                booking.bookingId || booking.id || "N/A";

            const travellers =
                `${booking.travellers || 1} Traveller(s)`;

            return `
                <article class="booking-card">

                    <div class="booking-card-header">
                        <div>
                            <h3>${escapeHTML(route)}</h3>
                            <p>Booking ID: ${escapeHTML(bookingId)}</p>
                        </div>

                        <span class="booking-status">
                            ${escapeHTML(booking.status || "Confirmed")}
                        </span>
                    </div>

                    <div class="booking-card-body">

                        <div class="booking-info-grid">

                            <div class="booking-info">
                                <span>Travel Dates</span>
                                <strong>${escapeHTML(dates)}</strong>
                            </div>

                            <div class="booking-info">
                                <span>Travellers</span>
                                <strong>${escapeHTML(travellers)}</strong>
                            </div>

                            <div class="booking-info">
                                <span>Trip Type</span>
                                <strong>${escapeHTML(displayValue(booking.tripType))}</strong>
                            </div>

                            <div class="booking-info">
                                <span>Hotel Selection</span>
                                <strong>${escapeHTML(booking.hotelName || getReadableBookingName(booking, "hotel"))}</strong>
                            </div>

                            <div class="booking-info">
                                <span>Intercity Transport</span>
                                <strong>${escapeHTML(booking.transportName || getReadableBookingName(booking, "transport"))}</strong>
                            </div>

                            <div class="booking-info">
                                <span>Local Transport</span>
                                <strong>${escapeHTML(booking.localTransportName || getReadableBookingName(booking, "local"))}</strong>
                            </div>

                        </div>

                        <div class="booking-card-footer">

                            <div class="booking-total">
                                <span>Estimated Trip Total</span>
                                <strong>${formatPrice(booking.estimatedTotal)}</strong>
                            </div>

                            <span class="booking-id">
                                Confirmed: ${escapeHTML(
                                    booking.confirmedAt
                                        ? new Date(booking.confirmedAt).toLocaleDateString("en-IN")
                                        : "Date unavailable"
                                )}
                            </span>

                        </div>

                    </div>

                    
                    <div class="booking-feedback">

                        <h4>Share Your Experience</h4>

                        <form class="feedback-form"
                              data-booking-id="${escapeHTML(bookingId)}">

                            <label>Rate your trip</label>

                            <select name="rating" required>
                                <option value="">Select rating</option>
                                <option value="5" ${booking.feedback?.rating == 5 ? "selected" : ""}>★★★★★ - Excellent</option>
                                <option value="4" ${booking.feedback?.rating == 4 ? "selected" : ""}>★★★★ - Very Good</option>
                                <option value="3" ${booking.feedback?.rating == 3 ? "selected" : ""}>★★★ - Good</option>
                                <option value="2" ${booking.feedback?.rating == 2 ? "selected" : ""}>★★ - Average</option>
                                <option value="1" ${booking.feedback?.rating == 1 ? "selected" : ""}>★ - Needs Improvement</option>
                            </select>

                            <label>Personal Trip Notes</label>

                            <textarea name="notes"
                                      placeholder="Write your experience or personal travel notes..."
                                      rows="3">${escapeHTML(booking.feedback?.notes || "")}</textarea>

                            <button type="submit">
                                Save Feedback
                            </button>

                            <p class="feedback-message">
                                ${booking.feedback ? "Feedback saved ✓" : ""}
                            </p>

                        </form>

                    </div>


                </article>
            `;

        }).join("");
    }

    
    // =====================================
    // SAVE TRIP FEEDBACK
    // =====================================

    bookingsList.addEventListener("submit", function (event) {

        const form = event.target.closest(".feedback-form");

        if (!form) return;

        event.preventDefault();

        const bookingId = form.dataset.bookingId;
        const rating = form.querySelector('[name="rating"]').value;
        const notes = form.querySelector('[name="notes"]').value.trim();

        if (!rating) return;

        let bookings = [];

        try {
            bookings = JSON.parse(
                localStorage.getItem("roavena-bookings") || "[]"
            );

            if (!Array.isArray(bookings)) bookings = [];

        } catch (error) {
            console.error("Unable to load bookings:", error);
            return;
        }

        const booking = bookings.find(item =>
    String(item.bookingId || item.id) === String(bookingId) &&
    String(item.customerEmail || "").trim().toLowerCase() === customerEmail
);

        if (!booking) return;

        booking.feedback = {
            rating: Number(rating),
            notes: notes,
            updatedAt: new Date().toISOString()
        };

        try {
            localStorage.setItem(
                "roavena-bookings",
                JSON.stringify(bookings)
            );

            loadBookings();

        } catch (error) {
            console.error("Unable to save feedback:", error);
            alert("Unable to save feedback. Please try again.");
        }

    });


    loadBookings();

});
