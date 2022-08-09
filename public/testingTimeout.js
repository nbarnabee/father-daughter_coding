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
    textBox2.classList.toggle("text-box-awake");
  };
  setTimeout(reminder, timeToReminder);
  modal.classList.toggle("modal-open");
  displayText();
};

function displayText() {
  textBox1.classList.toggle("text-box-awake");
  setTimeout(() => {
    textBox2.classList.toggle("text-box-awake");
  }, 4000);
}
