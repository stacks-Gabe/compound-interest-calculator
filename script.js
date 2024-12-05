const principleInput = document.querySelector("#principle");
const aprInput = document.querySelector("#apr");
const yearsInput = document.querySelector("#years");
const periodInput = document.querySelector("#period");

const accumulated = document.querySelector("#accumulated");
const result = document.querySelector("#result");

principleInput.addEventListener("input", calculate);
aprInput.addEventListener("input", calculate);
yearsInput.addEventListener("input", calculate);
periodInput.addEventListener("input", calculate);

aprInput.addEventListener("input", display);

function calculate(e) {
  const p = Number(principleInput.value);
  const a = Number(aprInput.value) / 100;
  const y = Number(yearsInput.value);
  const pr = Number(periodInput.value);

  const r = p * (1 + a / pr) ** (pr * y);
  result.value = Math.round(r).toFixed(2);
}

function display() {
  accumulated.value = aprInput.value;
}
