function signup() {
    var email = document.getElementById("semail").value
    var password = document.getElementById("spass").value
    var recovery = document.getElementById('sremail').value
    localStorage.setItem('Email', email)
    localStorage.setItem('Password', password)
    localStorage.setItem('Re-email', recovery)

    alert("Sign-up successful!");
    location.href = './signin.html'
}

function signin() {
    var email = document.getElementById('lemail').value
    var password = document.getElementById('lpass').value
    if (localStorage.getItem('Email') === email && localStorage.getItem('Password') === password) {
        location.href = "./welcome.html";
    } else {
        alert("Invalid Email or Password! Please try again.");
    }
}

var loggedInUser = localStorage.getItem('Email');

if (loggedInUser) {
    document.getElementById('displayEmail').innerText = "Logged in as: " + loggedInUser;
} else {
    document.getElementById('displayEmail').innerText = "Logged in as: Guest";
}








