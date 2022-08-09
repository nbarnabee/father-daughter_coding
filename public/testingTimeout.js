/* -------  TESTING TIMEOUT ---------- */

const modalControllers = Array.from(
    document.getElementsByClassName("modal-control")
  ),
  modal = document.querySelector(".modal");

modalControllers.forEach((a) =>
  a.addEventListener("click", () => {
    modal.classList.toggle("modal-open");
  })
);

const textBox1 = document.querySelector(".text-box1"),
  textBox2 = document.querySelector(".text-box2");

document.querySelector(".set-reminder").onclick = () => {
  const timeToReminder = document.getElementById("reminder").value * 1000;
  const reminder = () => {
    alert("This is your reminder!");
    textBox1.classList.toggle("text-box-awake");
  };
  setTimeout(reminder, timeToReminder);
  modal.classList.toggle("modal-open");
  displayText();
};

function displayText() {
  textBox1.innerText =
    "Natively, JS can only 'do' one thing at a time. The neat thing about promises is that they allow us to overcome that limitation. Other functions (like the one that's causing this text to be displayed) can run while we wait for the timer function to resolve.";
  textBox1.classList.toggle("text-box-awake");
  setTimeout(() => {
    textBox2.classList.toggle("text-box-awake");
    displayText2();
  }, 6000);
}

function displayText2() {
  // textBox1.classList.toggle("text-box-awake");
  setTimeout(() => {
    textBox1.innerText =
      "You could also enter data into the forms and submit them while we continue to wait for the timer.  Without asynchronous programming, that wouldn't be possible.";
    // textBox1.classList.toggle("text-box-awake");
    textBox2.classList.toggle("text-box-awake");
  }, 5000);
}
