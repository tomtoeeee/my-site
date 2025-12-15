let name = document.getElementById("name");
//let age = document.getElementById("age");
let email = document.getElementById("email");
let message = document.getElementById("message");
let inputs = document.querySelectorAll("input, textarea");

let form = document.querySelector("form");
let button = document.getElementById("button");

let sideBar = document.getElementById("side-bar");
let allowForm = true;


function sendForm() {
    allowForm = true;
    
    //
    for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].value === "") {
            allowForm = false;
            break;
        }
    }

    if (!allowForm) {
    alert("Заполните все поля");
    return;
    }       
   
    fetch("http://localhost:3000/send", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name: name.value,
            email: email.value,
            message: message.value
        })
    })
    .then(res => {
        if (!res.ok) {
            throw new Error("Ошибка сервера");
        }
        return res.json();
    })
    .then(data => {
        if (data.ok) {
            for (let k = 0; k < inputs.length; k++) {
                inputs[k].value = "";
            }
            form.innerHTML = "<h1>Сообщение отправлено!</h1>";
            button.style.display = "none";
        } else {
            alert("Ошибка: " + (data.error || "неизвестная"));
        }
    })
    .catch(err => {
        console.error("Fetch error:", err);
        alert("Что-то пошло не так");
    });
}





function openSideBar() {

}

function closeSideBar() {

}

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
}
  