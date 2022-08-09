/* ------ FUN WITH FORMS ----- */

document.querySelector("button").addEventListener("click", submitData);
document.getElementById("second-form").onsubmit = sendData;
const name = document.getElementById("name"),
  email = document.getElementById("email"),
  message = document.getElementById("message"),
  returnMessage = document.querySelector(".return-message");

// Form 1 - using async/await

async function submitData() {
  try {
    const response = await fetch("/handler", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: name.value,
        email: email.value,
        message: message.value,
      }),
    });
    const data = await response.json();
    if (data.response === "success") {
      alert("Message received!");
      document.getElementById("first-form").reset();
    }
  } catch (error) {
    console.log(error);
  }
}

// Form 2 - promise chaining

function sendData(event) {
  event.preventDefault();
  console.log("Function firing");
  const data = new FormData(document.getElementById("second-form"));
  const dataToSend = Array.from(data);
  const reallyDataToSend = {};
  dataToSend.forEach((a) => (reallyDataToSend[a[0]] = a[1]));
  fetch("/handler", {
    method: "POST",
    headers: { "Content-Type": "multipart/form-data" },
    body: data,
  })
    .then((response) => response.json())
    .then((message) => {
      if (message.response === "success") {
        alert("Message received!");
        document.getElementById("second-form").reset();
      } else alert("Failure!");
    })
    .catch((error) => console.log(error));
}
