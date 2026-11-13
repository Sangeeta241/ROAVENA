
/* =========================================
   ROAVENA — CENTRAL STORAGE SYSTEM
========================================= */

const ROAVENAStorage = {

    // Get current logged-in customer
    getCurrentCustomer() {
        try {
            const session = JSON.parse(
                sessionStorage.getItem("roavena-session") || "null"
            );

            if (!session || session.role !== "customer" || !session.email) {
                return null;
            }

            return session.email.trim().toLowerCase();
        } catch (error) {
            return null;
        }
    },

    // Create customer-specific storage key
    customerKey(key) {
        const email = this.getCurrentCustomer();

        if (!email) return null;

        return `roavena-customer-${encodeURIComponent(email)}-${key}`;
    },

    // Customer-specific text storage
    setCustomerItem(key, value) {
        const scopedKey = this.customerKey(key);
        if (!scopedKey) return false;

        try {
            localStorage.setItem(scopedKey, value);
            return true;
        } catch (error) {
            console.error("Customer storage error:", error);
            return false;
        }
    },

    getCustomerItem(key) {
        const scopedKey = this.customerKey(key);
        if (!scopedKey) return null;

        try {
            return localStorage.getItem(scopedKey);
        } catch (error) {
            console.error("Customer storage error:", error);
            return null;
        }
    },

    setCustomerJSON(key, value) {
        return this.setCustomerItem(key, JSON.stringify(value));
    },

    getCustomerJSON(key) {
        const data = this.getCustomerItem(key);

        if (!data) return null;

        try {
            return JSON.parse(data);
        } catch (error) {
            console.error("Customer JSON error:", error);
            return null;
        }
    },

    removeCustomerItem(key) {
        const scopedKey = this.customerKey(key);
        if (!scopedKey) return false;

        try {
            localStorage.removeItem(scopedKey);
            return true;
        } catch (error) {
            console.error("Customer storage error:", error);
            return false;
        }
    },

    // Existing common storage methods — preserved
    setItem(key, value) {
        try {
            localStorage.setItem(key, value);
            return true;
        } catch (error) {
            console.error("Storage error:", error);
            return false;
        }
    },

    getItem(key) {
        try {
            return localStorage.getItem(key);
        } catch (error) {
            console.error("Storage error:", error);
            return null;
        }
    },

    setJSON(key, value) {
        try {
            localStorage.setItem(key, JSON.stringify(value));
            return true;
        } catch (error) {
            console.error("Storage error:", error);
            return false;
        }
    },

    getJSON(key) {
        try {
            const data = localStorage.getItem(key);
            return data ? JSON.parse(data) : null;
        } catch (error) {
            console.error("Unable to read stored data:", error);
            return null;
        }
    },

    removeItem(key) {
        try {
            localStorage.removeItem(key);
            return true;
        } catch (error) {
            console.error("Storage error:", error);
            return false;
        }
    }
};
