// script.js
document.addEventListener("DOMContentLoaded", () => {
    // اختيار الفورم و div الفيدباك
    const form = document.getElementById("registration-form");
    const feedbackDiv = document.getElementById("form-feedback");

    // حدث عند submit
    form.addEventListener("submit", (event) => {
        event.preventDefault(); // منع الفورم من الإرسال

        // جلب القيم من inputs مع trim
        const username = document.getElementById("username").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();

        // تهيئة المتغيرات للتحقق
        let isValid = true;
        let messages = [];

        // التحقق من اسم المستخدم
        if (username.length < 3) {
            isValid = false;
            messages.push("Username must be at least 3 characters long.");
        }

        // التحقق من الايميل
        if (!email.includes("@") || !email.includes(".")) {
            isValid = false;
            messages.push("Please enter a valid email address.");
        }

        // التحقق من الباسورد
        if (password.length < 8) {
            isValid = false;
            messages.push("Password must be at least 8 characters long.");
        }

        // عرض الفيدباك
        feedbackDiv.style.display = "block";
        if (isValid) {
            feedbackDiv.innerHTML = "Registration successful!";
            feedbackDiv.style.color = "#28a745";
        } else {
            feedbackDiv.innerHTML = messages.join("<br>");
            feedbackDiv.style.color = "#dc3545";
        }
    });
});
