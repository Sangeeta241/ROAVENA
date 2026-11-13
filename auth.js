
// ======================================
// ROAVENA - CUSTOMER & OPERATOR AUTH
// ======================================

// EMAILJS CONFIGURATION
const EMAILJS_SERVICE_ID = "service_4qsoa1q";
const EMAILJS_TEMPLATE_ID = "template_54ufrqt";
const EMAILJS_PUBLIC_KEY = "rChFYjq6P-J6-iUet";

// STORAGE KEYS
const USERS_KEY = "roavena-users";
const SESSION_KEY = "roavena-session";

// OPERATOR CREDENTIALS
const OPERATOR_EMAIL = "operator@roavena.com";
const OPERATOR_PASSWORD = "Roavena@2026";

// OTP SETTINGS
const OTP_VALIDITY = 5 * 60 * 1000;
const OTP_MAX_ATTEMPTS = 5;


// ======================================
// COMMON FUNCTIONS
// ======================================

function getUsers() {
    return JSON.parse(localStorage.getItem(USERS_KEY) || "[]");
}

function createSalt() {
    const bytes = crypto.getRandomValues(new Uint8Array(16));

    return Array.from(bytes)
        .map(byte => byte.toString(16).padStart(2, "0"))
        .join("");
}

async function hashPassword(password, salt) {
    const data = new TextEncoder().encode(salt + password);
    const hash = await crypto.subtle.digest("SHA-256", data);

    return Array.from(new Uint8Array(hash))
        .map(byte => byte.toString(16).padStart(2, "0"))
        .join("");
}


// ======================================
// SIGNUP - EMAIL OTP
// ======================================

const signupForm = document.getElementById("signupForm");

if (signupForm) {

    emailjs.init({
        publicKey: EMAILJS_PUBLIC_KEY
    });

    let pendingSignup = null;
    let signupOTP = null;

    const signupMessage = document.getElementById("signupMessage");
    const otpMessage = document.getElementById("signupOtpMessage");
    const otpSection = document.getElementById("signupOtpSection");
    const signupButton = document.getElementById("signupButton");

    signupForm.addEventListener("submit", async function (event) {
        event.preventDefault();

        const name = document.getElementById("signupName").value.trim();
        const email = document.getElementById("signupEmail").value.trim().toLowerCase();
        const password = document.getElementById("signupPassword").value;
        const confirmPassword = document.getElementById("confirmPassword").value;

        if (password.length < 8) {
            signupMessage.textContent =
                "Password must contain at least 8 characters.";
            return;
        }

        if (password !== confirmPassword) {
            signupMessage.textContent = "Passwords do not match.";
            return;
        }

        if (getUsers().some(user => user.email === email)) {
            signupMessage.textContent =
                "This email is already registered. Please login.";
            return;
        }

        const otp = String(
            Math.floor(100000 + Math.random() * 900000)
        );

        pendingSignup = { name, email, password };

        signupButton.disabled = true;
        signupMessage.textContent = "Sending verification OTP...";

        try {
            await emailjs.send(
                EMAILJS_SERVICE_ID,
                EMAILJS_TEMPLATE_ID,
                {
                    to_email: email,
                    otp: otp
                }
            );

            signupOTP = {
                code: otp,
                email: email,
                expiresAt: Date.now() + OTP_VALIDITY,
                attempts: 0
            };

            otpSection.hidden = false;
            signupMessage.textContent =
                "OTP sent successfully. Please check your inbox.";

        } catch (error) {
            console.error("EmailJS Error:", error);
            signupMessage.textContent =
                "OTP could not be sent. Please check EmailJS configuration.";
        } finally {
            signupButton.disabled = false;
        }
    });


    // VERIFY SIGNUP OTP
    document.getElementById("verifySignupOtp")
        .addEventListener("click", async function () {

            const enteredOTP =
                document.getElementById("signupOtp").value.trim();

            if (!signupOTP || !pendingSignup) {
                otpMessage.textContent = "Please request an OTP first.";
                return;
            }

            if (Date.now() > signupOTP.expiresAt) {
                otpMessage.textContent =
                    "OTP expired. Please refresh and try signup again.";
                return;
            }

            if (signupOTP.attempts >= OTP_MAX_ATTEMPTS) {
                otpMessage.textContent =
                    "Too many incorrect attempts. Please restart signup.";
                return;
            }

            signupOTP.attempts++;

            if (enteredOTP !== signupOTP.code) {
                otpMessage.textContent = "Incorrect OTP. Try again.";
                return;
            }

            const users = getUsers();

            if (users.some(user => user.email === pendingSignup.email)) {
                otpMessage.textContent =
                    "This email is already registered. Please login.";
                return;
            }

            try {
                const salt = createSalt();
                const passwordHash = await hashPassword(
                    pendingSignup.password,
                    salt
                );

                users.push({
                    id: Date.now(),
                    name: pendingSignup.name,
                    email: pendingSignup.email,
                    salt: salt,
                    passwordHash: passwordHash,
                    role: "customer"
                });

                localStorage.setItem(USERS_KEY, JSON.stringify(users));

                signupOTP = null;
                pendingSignup = null;

                otpMessage.textContent =
                    "Email verified! Account created. Redirecting to login...";

                setTimeout(() => {
                    window.location.href = "login.html";
                }, 1200);

            } catch (error) {
                console.error(error);
                otpMessage.textContent =
                    "Account creation failed. Please try again.";
            }
        });
}


// ======================================
// CUSTOMER LOGIN - NO OTP
// ======================================

const loginForm = document.getElementById("loginForm");

if (loginForm) {

    loginForm.addEventListener("submit", async function (event) {
        event.preventDefault();

        const email = document.getElementById("loginEmail")
            .value.trim().toLowerCase();

        const password = document.getElementById("loginPassword").value;
        const message = document.getElementById("loginMessage");
        const button = loginForm.querySelector("button[type='submit']");

        const user = getUsers().find(item =>
            item.email === email && item.role === "customer"
        );

        if (!user) {
            message.textContent =
                "Account not found. Please sign up first.";
            return;
        }

        button.disabled = true;

        try {
            const enteredHash = await hashPassword(password, user.salt);

            if (enteredHash !== user.passwordHash) {
                message.textContent = "Incorrect password.";
                return;
            }

            sessionStorage.setItem(SESSION_KEY, JSON.stringify({
                email: user.email,
                role: "customer",
                name: user.name
            }));

            window.location.href = "dashboard.html";

        } catch (error) {
            console.error(error);
            message.textContent = "Login failed. Please try again.";
        } finally {
            button.disabled = false;
        }
    });
}


// ======================================
// OPERATOR LOGIN - SEPARATE PAGE
// ======================================

const operatorLoginForm =
    document.getElementById("operatorLoginForm");

if (operatorLoginForm) {

    operatorLoginForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const email = document.getElementById("operatorEmail")
            .value.trim().toLowerCase();

        const password =
            document.getElementById("operatorPassword").value;

        const message =
            document.getElementById("operatorLoginMessage");

        if (
            email === OPERATOR_EMAIL &&
            password === OPERATOR_PASSWORD
        ) {
            sessionStorage.setItem(SESSION_KEY, JSON.stringify({
                email: OPERATOR_EMAIL,
                role: "operator",
                name: "ROAVENA Operator"
            }));

            window.location.href = "operator-dashboard.html";
            return;
        }

        message.textContent = "Invalid operator email or password.";
    });
}


// ======================================
// LOGOUT
// ======================================

function roavenaLogout() {
    sessionStorage.removeItem(SESSION_KEY);
    window.location.href = "login.html";
}
