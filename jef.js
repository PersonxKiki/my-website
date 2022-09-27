let userInput = document.getElementById("user")
let passwordInput = document.getElementById("pwd")

document.getElementById("btn").addEventListener("click", function(e) {
    if(userInput.value == "admin" && passwordInput.value == "admin"){
        location.href = "/index.html"
    }else {
        alert("Invalid credentials!")
    }
})