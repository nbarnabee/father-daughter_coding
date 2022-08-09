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
      document.querySelector(".first-form-message").innerText =
        "Message received!";
      document.getElementById("first-form").reset();
    }
  } catch (error) {
    console.log(error);
  }
}

// Form 2 - promise chaining  (Note that Express cannot parse the FormData object, not even with express.urlencoded().  You must use a middleware like Multer)

function sendData(event) {
  event.preventDefault();
  const data = new FormData(document.getElementById("second-form"));
  console.log(data.has("name"));
  fetch("/otherHandler", {
    method: "POST",
    body: data,
  })
    .then((response) => response.json())
    .then((message) => {
      if (message.response === "success") {
        document.querySelector(".second-form-message").innerText =
          "Message received!";
        document.getElementById("second-form").reset();
      } else alert("Failure!");
    })
    .catch((error) => console.log(error));
}
