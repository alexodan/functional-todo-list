import "../scss/global.scss";
import db from "../../db.json";
import { toTask } from "./task";
import { logIt } from "./utils";

function displayError(error, domEl) {
  const errorElement = domEl.querySelector(".new-task-error");
  errorElement.textContent = error;
}

document.addEventListener("DOMContentLoaded", () => {
  console.log("DB: ", db);
  const form = document.querySelector("form");

  form.addEventListener("submit", (e) => {
    console.log("e", e);
    e.preventDefault();
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);

    console.log("data: ", data);
    const task = toTask(data);
    task.cata(
      logIt((error) => displayError(error, form)),
      (task) => console.log("Task: ", task),
    );
  });
});
