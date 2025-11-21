// Saat halaman dimuat
window.onload = function () {
    let nama = prompt("Masukkan nama kamu:");

    // Jika user tidak mengisi, kasih default
    if (!nama) {
        nama = "Guest";
    }

    // Tampilkan di halaman
    const title = document.getElementById("welcome-speech");
    if (title) {
        title.textContent = `${nama}`;
    }
};

const btnSubmit = document.getElementById("btn-submit")
btnSubmit.addEventListener("click", function () {
   
})

let name = document.getElementById("name-input").value;
let email = document.getElementById("email-input").value;
let message = document.getElementById("message-input").value;
/// Function to validate the contact form
function validateForm() {
    /// Initialize variables to store form input values

    /// Check if any field is empty and alert the user
    if (name === "" || email === "" || message === "") {
        /// If any field is empty, alert the user
        alert("Please fill in all fields.");
    } else {
        /// If all fields are filled, thank the user
        alert("Thank you for your message, " + name + "!");
    }
}
