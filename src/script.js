

let display = document.getElementById("display");
let historyDiv = document.getElementById("history-list");

function append(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = "";
}

function calculate() {
  try {
    let expression = display.value;
    let result = eval(expression); 
    display.value = result;

    addToHistory(expression, result);
  } catch (e) {
    display.value = "Помилка";
  }
}

function addToHistory(expression, result) {
  let p = document.createElement("li");
  let br = document.createElement("br");
  br.textContent = "\n";
  p.textContent = `${expression} = ${result}`;
  p.classList.add("history-item");
  historyDiv.appendChild(p);
  historyDiv.appendChild(br);
}

document.addEventListener("DOMContentLoaded", () => {
  const overlay = document.getElementById("loading-overlay");
  if (!overlay) return;
  overlay.classList.add("show");
});

window.addEventListener("load", () => {
  const overlay = document.getElementById("loading-overlay");
  if (!overlay) return;
  overlay.classList.add("hide");
  setTimeout(() => overlay.classList.remove("show", "hide"), 3000);
});
function showLoading() {
  const overlay = document.getElementById("loading-overlay");
  if (overlay) overlay.classList.add("show");
}

function hideLoading() {
  const overlay = document.getElementById("loading-overlay");
  if (overlay) {
    overlay.classList.add("hide");
    setTimeout(() => overlay.classList.remove("show", "hide"), 250);
  }
}

async function calculate() {
  try {
    showLoading();
    await new Promise(r => setTimeout(r, 200)); 
    const expression = display.value;
    const result = eval(expression);
    display.value = result;
    addToHistory(expression, result);
  } catch (e) {
    display.value = "Помилка";
  } finally {
    hideLoading();
  }
}
document.addEventListener("DOMContentLoaded", () => {
  const overlay = document.getElementById("background-overlay");
  if (overlay) {
    overlay.classList.add("show");
  }
});
window.addEventListener("load", () => {
  const overlay = document.getElementById("background-overlay");
  if (overlay) {
    overlay.classList.add("hide");
    setTimeout(() => overlay.classList.remove("show", "hide"), 2000);
  }});