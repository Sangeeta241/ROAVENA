
const authSession = JSON.parse(
    sessionStorage.getItem("roavena-session") || "null"
);

if (!authSession || authSession.role !== "operator") {
    window.location.replace("login.html");
} else {
document.addEventListener("DOMContentLoaded", function () {

    const list = document.getElementById("operatorBookingsList");
    const empty = document.getElementById("operatorEmpty");
    const search = document.getElementById("operatorSearch");
    const statusFilter = document.getElementById("operatorStatusFilter");

    document.getElementById("year").textContent =
        new Date().getFullYear();

    function getBookings() {
        try {
            const data = JSON.parse(
                localStorage.getItem("roavena-bookings") || "[]"
            );

            return Array.isArray(data) ? data : [];

        } catch (error) {
            console.error("Unable to read bookings:", error);
            return [];
        }
    }

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

    function safe(value) {
        return String(value ?? "").replace(/[&<>"']/g, char => ({
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;"
        })[char]);
    }

    function updateStats(bookings) {

        document.getElementById("opTotalBookings").textContent =
            bookings.length;

        const destinations = new Set(
            bookings.map(item => item.destination).filter(Boolean)
        );

        document.getElementById("opDestinations").textContent =
            destinations.size;

        const revenue = bookings.reduce((sum, item) =>
            sum + (Number(item.estimatedTotal) || 0), 0
        );

        document.getElementById("opRevenue").textContent =
            formatPrice(revenue);

        const feedbackCount = bookings.filter(item =>
            item.feedback && item.feedback.rating
        ).length;

        document.getElementById("opFeedback").textContent =
            feedbackCount;
    }

    function renderBookings() {

        const bookings = getBookings().sort((a, b) =>
            Number(b.bookingId || 0) - Number(a.bookingId || 0)
        );

        updateStats(bookings);

        const searchTerm = search.value.trim().toLowerCase();
        const selectedStatus = statusFilter.value;

        const filtered = bookings.filter(booking => {

            const searchable =
                `${booking.bookingId || booking.id || ""} ${booking.origin || ""} ${booking.destination || ""}`
                .toLowerCase();

            const matchesSearch = searchable.includes(searchTerm);

            const matchesStatus =
                selectedStatus === "all" ||
                (booking.status || "Confirmed") === selectedStatus;

            return matchesSearch && matchesStatus;
        });

        if (filtered.length === 0) {
            list.innerHTML = "";
            empty.hidden = false;
            return;
        }

        empty.hidden = true;

        list.innerHTML = filtered.map(booking => {

            const id = booking.bookingId || booking.id;
            const status = booking.status || "Confirmed";

            const feedback = booking.feedback;

            const statusClass =
                status.toLowerCase() === "pending" ? "pending" :
                status.toLowerCase() === "cancelled" ? "cancelled" : "";

            return `
                <article class="operator-booking-card">

                    <div class="operator-card-header">
                        <div>
                            <h3>
                                ${safe(booking.origin || "Unknown")}
                                → ${safe(booking.destination || "Unknown")}
                            </h3>

                            <p>Booking ID: ${safe(id)}</p>
                            <p class="operator-muted">Customer: Guest (name not collected)</p>
                        </div>

                        <span class="operator-status ${statusClass}">
                            ${safe(status)}
                        </span>
                    </div>

                    <div class="operator-details">

                        <div class="operator-detail">
                            <span>Travel Dates</span>
                            <strong>
                                ${safe(formatDate(booking.departureDate))}
                                – ${safe(formatDate(booking.returnDate))}
                            </strong>
                        </div>

                        <div class="operator-detail">
                            <span>Travellers</span>
                            <strong>${safe(booking.travellers || 1)}</strong>
                        </div>

                        <div class="operator-detail">
                            <span>Trip Type</span>
                            <strong>${safe(booking.tripType || "Not specified")}</strong>
                        </div>

                        <div class="operator-detail">
                            <span>Hotel</span>
                            <strong>${safe(booking.hotelName || "Not selected")}</strong>
                        </div>

                        <div class="operator-detail">
                            <span>Intercity Transport</span>
                            <strong>${safe(booking.transportName || "Not selected")}</strong>
                        </div>

                        <div class="operator-detail">
                            <span>Local Transport</span>
                            <strong>${safe(booking.localTransportName || "Not selected")}</strong>
                        </div>

                        <div class="operator-detail">
                            <span>Confirmed On</span>
                            <strong>
                                ${safe(
                                    booking.confirmedAt
                                        ? new Date(booking.confirmedAt).toLocaleDateString("en-IN")
                                        : "Not available"
                                )}
                            </strong>
                        </div>

                    </div>

                    <div class="operator-card-footer">

                        <div class="operator-total">
                            <span class="operator-muted">Estimated Trip Total</span>
                            <strong>${formatPrice(booking.estimatedTotal)}</strong>
                        </div>

                        <label>
                            <span class="operator-muted">Update Status</span><br>

                            <select class="operator-status-select"
                                    data-booking-id="${safe(id)}">

                                <option value="Confirmed" ${status === "Confirmed" ? "selected" : ""}>Confirmed</option>
                                <option value="Pending" ${status === "Pending" ? "selected" : ""}>Pending</option>
                                <option value="Cancelled" ${status === "Cancelled" ? "selected" : ""}>Cancelled</option>

                            </select>
                        </label>

                    </div>

                    <div class="operator-feedback">

                        <h4>Customer Feedback</h4>

                        ${
                            feedback
                                ? `
                                    <p><strong>Rating:</strong> ${"★".repeat(Math.max(0, Math.min(5, Number(feedback.rating) || 0)))}</p>
                                    <p>${safe(feedback.notes || "No written notes provided.")}</p>
                                `
                                : `<p>No feedback submitted yet.</p>`
                        }

                    </div>

                </article>
            `;

        }).join("");
    }

    list.addEventListener("change", function (event) {

        const select = event.target.closest(".operator-status-select");
        if (!select) return;

        const bookingId = select.dataset.bookingId;
        const bookings = getBookings();

        const booking = bookings.find(item =>
            String(item.bookingId || item.id) === String(bookingId)
        );

        if (!booking) return;

        booking.status = select.value;

        try {
            localStorage.setItem(
                "roavena-bookings",
                JSON.stringify(bookings)
            );

            renderBookings();

        } catch (error) {
            console.error("Unable to update booking status:", error);
            alert("Unable to update booking status.");
        }
    });

    search.addEventListener("input", renderBookings);
    statusFilter.addEventListener("change", renderBookings);

    window.addEventListener("storage", renderBookings);

    renderBookings();

});
}