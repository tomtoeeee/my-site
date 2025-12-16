
/*
let name = document.getElementById("name");
//let age = document.getElementById("age");
let email = document.getElementById("email");
let message = document.getElementById("message");
let inputs = document.querySelectorAll("input, textarea");

//let form = document.querySelector("form");
let button = document.getElementById("button");

let sideBar = document.getElementById("side-bar");
let allowForm = true;


let form = document.querySelector("form");

form.addEventListener("submit", function (e) {
    e.preventDefault(); // 🔥 КРИТИЧЕСКИ ВАЖНО
    sendForm();
});

function sendForm() {
    for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].value.trim() === "") {
            alert("Заполните все поля");
            return;
        }
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
    .then(res => res.json())
    .then(data => {
        if (data.ok) {
            inputs.forEach(input => input.value = "");
            form.innerHTML = "<h1>Сообщение отправлено!</h1>";
        } else {
            alert(data.error || "Ошибка");
        }
    })
    .catch(err => {
        console.error(err);
        alert("Ошибка соединения с сервером");
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
*/

const form = document.getElementById("form");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !message) {
    alert("Введите имя и сообщение");
    return;
  }

  try {
    const response = await fetch("http://localhost:3000/send-message", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        message,
      }),
    });

    const data = await response.json();

    if (data.success) {
      alert("Сообщение отправлено!");
      form.reset();
    } else {
      alert("Ошибка отправки :(");
    }
  } catch (err) {
    console.error(err);
    alert("Сервер недоступен...");
  }
});