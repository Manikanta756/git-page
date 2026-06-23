function validateForm() {
    let username = document.getElementById("username").value;

    if (username === "") {
        alert("Username cannot be empty");
    } else {
        alert("Valid Input");
    }
}