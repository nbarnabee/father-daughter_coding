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

document.querySelector(".set-reminder").onclick = () => {
  const timeToReminder = document.getElementById("reminder").value * 1000;
  const reminder = () => {
    alert("This is your reminder!");
  };
  setTimeout(reminder, timeToReminder);
  modal.classList.toggle("modal-open");
};
