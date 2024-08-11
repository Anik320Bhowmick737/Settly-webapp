let initForm = document.querySelector("#Initialfill");
let GoBtn = document.querySelector(".numPerson");
let payelist = document.querySelector(".PayerList");
let allPayee = payelist.querySelectorAll(`.P`);
let allMoney = payelist.querySelectorAll(".Money");
let resetBtn = document.querySelector(".ResetBtn");
let Calc = document.querySelector(".Calculate");
let payeeP1 = document.querySelectorAll(".p1");
let payeeP2 = document.querySelectorAll(".p2");
let payeeP3 = document.querySelectorAll(".p3");
let payeeP4 = document.querySelectorAll(".p4");
let payeeP5 = document.querySelectorAll(".p5");
let payeeP6 = document.querySelectorAll(".p6");
let payeeP7 = document.querySelectorAll(".p7");
let payeeP8 = document.querySelectorAll(".p8");
let payeeP9 = document.querySelectorAll(".p9");
let payeeP10 = document.querySelectorAll(".p10");
let P1 = document.querySelector(".P1");
let P2 = document.querySelector(".P2");
let P3 = document.querySelector(".P3");
let P4 = document.querySelector(".P4");
let P5 = document.querySelector(".P5");
let P6 = document.querySelector(".P6");
let P7 = document.querySelector(".P7");
let P8 = document.querySelector(".P8");
let P9 = document.querySelector(".P9");
let P10 = document.querySelector(".P10");
let AllDropDownBtnSPE = document.querySelectorAll(".dropdownBtnSPE");
let AllDropDownBtnSPEx = document.querySelectorAll(".dropdownBtnSPEx");
let P1dropdownBtnSPE = document.querySelector(".P1.dropdownBtnSPE");
let P1dropdownBtnSPEx = document.querySelector(".P1.dropdownBtnSPEx");
let P2dropdownBtnSPE = document.querySelector(".P2.dropdownBtnSPE");
let P2dropdownBtnSPEx = document.querySelector(".P2.dropdownBtnSPEx");
let P3dropdownBtnSPE = document.querySelector(".P3.dropdownBtnSPE");
let P3dropdownBtnSPEx = document.querySelector(".P3.dropdownBtnSPEx");
let P4dropdownBtnSPE = document.querySelector(".P4.dropdownBtnSPE");
let P4dropdownBtnSPEx = document.querySelector(".P4.dropdownBtnSPEx");
let P5dropdownBtnSPE = document.querySelector(".P5.dropdownBtnSPE");
let P5dropdownBtnSPEx = document.querySelector(".P5.dropdownBtnSPEx");
let P6dropdownBtnSPE = document.querySelector(".P6.dropdownBtnSPE");
let P6dropdownBtnSPEx = document.querySelector(".P6.dropdownBtnSPEx");
let P7dropdownBtnSPE = document.querySelector(".P7.dropdownBtnSPE");
let P7dropdownBtnSPEx = document.querySelector(".P7.dropdownBtnSPEx");
let P8dropdownBtnSPE = document.querySelector(".P8.dropdownBtnSPE");
let P8dropdownBtnSPEx = document.querySelector(".P8.dropdownBtnSPEx");
let P9dropdownBtnSPE = document.querySelector(".P9.dropdownBtnSPE");
let P9dropdownBtnSPEx = document.querySelector(".P9.dropdownBtnSPEx");
let P10dropdownBtnSPE = document.querySelector(".P10.dropdownBtnSPE");
let P10dropdownBtnSPEx = document.querySelector(".P10.dropdownBtnSPEx");
let drpdownBack = document.querySelector(".dropdown-menu-overlay");
let numPerson;
let flag = 0;
let resSection = document.querySelector(".ResultSection");
let personPayBtnAll = document.querySelectorAll(".PersonWillPayBtn");
let personPayTextAll = document.querySelectorAll(".PersonWillPayText");
let personPayTextOverlay = document.querySelector(".PersonWillPayTextOverlay");
let P1Exclicker = (event) => ExclickHandler(event, 0);
let P1Eclicker = (event) => EclickHandler(event, 0);
let P2Exclicker = (event) => ExclickHandler(event, 1);
let P2Eclicker = (event) => EclickHandler(event, 1);
let P3Exclicker = (event) => ExclickHandler(event, 2);
let P3Eclicker = (event) => EclickHandler(event, 2);
let P4Exclicker = (event) => ExclickHandler(event, 3);
let P4Eclicker = (event) => EclickHandler(event, 3);
let P5Exclicker = (event) => ExclickHandler(event, 4);
let P5Eclicker = (event) => EclickHandler(event, 4);
let P6Exclicker = (event) => ExclickHandler(event, 5);
let P6Eclicker = (event) => EclickHandler(event, 5);
let P7Exclicker = (event) => ExclickHandler(event, 6);
let P7Eclicker = (event) => EclickHandler(event, 6);
let P8Exclicker = (event) => ExclickHandler(event, 7);
let P8Eclicker = (event) => EclickHandler(event, 7);
let P9Exclicker = (event) => ExclickHandler(event, 8);
let P9Eclicker = (event) => EclickHandler(event, 8);
let P10Exclicker = (event) => ExclickHandler(event, 9);
let P10Eclicker = (event) => EclickHandler(event, 9);
let graphArray;
let resultGraph;
let payee = [
  payeeP1,
  payeeP2,
  payeeP3,
  payeeP4,
  payeeP5,
  payeeP6,
  payeeP7,
  payeeP8,
  payeeP9,
  payeeP10,
];

let PExclicker = [
  P1Exclicker,
  P2Exclicker,
  P3Exclicker,
  P4Exclicker,
  P5Exclicker,
  P6Exclicker,
  P7Exclicker,
  P8Exclicker,
  P9Exclicker,
  P10Exclicker,
];

let PEclicker = [
  P1Eclicker,
  P2Eclicker,
  P3Eclicker,
  P4Eclicker,
  P5Eclicker,
  P6Eclicker,
  P7Eclicker,
  P8Eclicker,
  P9Eclicker,
  P10Eclicker,
];

let showRes1 = (event) => showResult(event, 0);
let showRes2 = (event) => showResult(event, 1);
let showRes3 = (event) => showResult(event, 2);
let showRes4 = (event) => showResult(event, 3);
let showRes5 = (event) => showResult(event, 4);
let showRes6 = (event) => showResult(event, 5);
let showRes7 = (event) => showResult(event, 6);
let showRes8 = (event) => showResult(event, 7);
let showRes9 = (event) => showResult(event, 8);
let showRes10 = (event) => showResult(event, 9);

let showResAll = [
  showRes1,
  showRes2,
  showRes3,
  showRes4,
  showRes5,
  showRes6,
  showRes7,
  showRes8,
  showRes9,
  showRes10,
];

const eventHandlers = {
  exactUpdateResultHandlers: [],
  perUpdateResultHandlers: [],
};

function removeEventListener() {
  Calc.removeEventListener("click", getCalculation);
  for (let i = 0; i < 10; i++) {
    AllDropDownBtnSPEx[i].classList.remove("selected");
    AllDropDownBtnSPEx[i].removeEventListener("click", PExclicker[i]);
  }
  for (let i = 0; i < 10; i++) {
    AllDropDownBtnSPE[i].classList.remove("selected");
    AllDropDownBtnSPE[i].removeEventListener("click", PEclicker[i]);
  }

  for (let i = 0; i < 10; i++) {
    personPayBtnAll[i].addEventListener("click", showResAll[i]);
  }

  eventHandlers.exactUpdateResultHandlers.forEach(({ element, handler }) => {
    if (element) {
      element.removeEventListener("input", handler);
    }
  });

  eventHandlers.perUpdateResultHandlers.forEach(({ element, handler }) => {
    if (element) {
      element.removeEventListener("input", handler);
    }
  });
  eventHandlers.exactUpdateResultHandlers = [];
  eventHandlers.perUpdateResultHandlers = [];
}

function attachOldModal() {
  allPayee.forEach(function (section) {
    section.onclick = (event) => {
      event.stopPropagation();
      section.querySelector(".dropdown-menu").style.display = "block";
      drpdownBack.style.display = "block";
      if (
        section.querySelector(".dropdownBtnSPE").classList.contains("selected")
      )
        flag = 0;
      if (
        section.querySelector(".dropdownBtnSPEx").classList.contains("selected")
      ) {
        const amountInput = section.querySelector(".amount .Money");
        const payeeInputs = section.querySelectorAll(".Payees .Money");
        if (getDiff(amountInput, payeeInputs) == 0) flag = 0;
      }
    };
  });

  window.onclick = function (event) {
    allPayee.forEach(function (section) {
      if (!section.contains(event.target) && flag == 0) {
        section.querySelector(".dropdown-menu").style.display = "none";
        drpdownBack.style.display = "none";
      }
    });
    flag = 1;
  };
}
onStart();
function onStart() {
  flag = 1;
  resSection.style.display = "none";
  resetBtn.classList.add("hide");
  Calc.classList.add("hide");
  for (let i = 0; i < 10; i++) {
    if (allPayee[i].classList.contains("show")) {
      allPayee[i].classList.remove("show");
    }
  }
  for (let i = 0; i < 10; i++) {
    personPayBtnAll[i].style.display = "none";
  }

  removeEventListener();
  for (let index = 0; index < 10; index++) {
    for (let i = 0; i < 10; i++) {
      payee[index][i].classList.add("hide");
    }
  }
  for (let i = 0; i < 110; i++) {
    allMoney[i].value = 0;
  }

  document.querySelectorAll(".P").forEach((section) => {
    const resultDiv = section.querySelector(".result");
    if (resultDiv) {
      resultDiv.textContent = "";
    }
  });
  setUpEventListener();
  attachOldModal();
}
// Dont allow user giving negative inputs
document.querySelectorAll(".Money").forEach(function (input) {
  input.addEventListener("input", function (event) {
    value = event.target.value;
    if (value < 0) {
      value = 0;
    }
    if (value > 9000) {
      value = 9000;
    }
    event.target.value = value;
  });
});
function getDiff(totalAmt, payeeInputs) {
  let totalPayees = 0;
  payeeInputs.forEach((input) => {
    totalPayees += parseFloat(input.value) || 0;
  });
  totalPayees = parseFloat(totalPayees.toFixed(2));
  let TotalAmount = parseFloat((parseFloat(totalAmt.value) || 0).toFixed(2));
  return TotalAmount - totalPayees;
}
function resultUpdateForExact(index) {
  const section = document.querySelectorAll(".P")[index];
  if (!section) return;
  const amountInput = section.querySelector(".amount .Money");
  const payeeInputs = section.querySelectorAll(".Payees .Money");
  for (let i = 0; i < numPerson; i++) {
    graphArray[i][index] = 0;
  }
  AllDropDownBtnSPEx[index].classList.add("selected");
  resultDiv = section.querySelector(".result");
  if (amountInput.value) {
    updateResult();
    for (let i = 0; i < numPerson; i++) {
      graphArray[i][index] = 0;
    }
  }
  function updateResult() {
    for (let i = 0; i < numPerson; i++) {
      graphArray[i][index] = 0;
    }
    const remaining = getDiff(amountInput, payeeInputs);
    if (remaining === 0) {
      flag = 0;
      if (resultDiv.classList.contains("addError"))
        resultDiv.classList.remove("addError");
      resultDiv.classList.add("addCorrect");
    } else {
      flag = 1;
      if (resultDiv.classList.contains("addCorrect"))
        resultDiv.classList.remove("addCorrect");
      resultDiv.classList.add("addError");
    }

    resultDiv.textContent = `Remaining: ${remaining.toFixed(2)}`;
    //console.log(resultDiv);
  }

  eventHandlers.exactUpdateResultHandlers.push(updateResult);

  eventHandlers.exactUpdateResultHandlers.push({
    element: amountInput,
    handler: updateResult,
  });
  amountInput.addEventListener("input", updateResult);

  payeeInputs.forEach((input) => {
    eventHandlers.exactUpdateResultHandlers.push({
      element: input,
      handler: updateResult,
    });
    input.addEventListener("input", updateResult);
  });
}

function resultUpdateForPer(index) {
  const section = document.querySelectorAll(".P")[index];
  const amountInput = section.querySelector(".amount .Money");
  const resultDiv = section.querySelector(".result");
  for (let i = 0; i < numPerson; i++) {
    graphArray[i][index] = 0;
  }
  if (amountInput.value) {
    updateResult();
  }
  function updateResult() {
    const amount = parseFloat(amountInput.value).toFixed(2) || 0;
    resultDiv.textContent = `Per person: ${(amount / numPerson).toFixed(2)}`;
    for (let i = 0; i < numPerson; i++) {
      graphArray[i][index] = parseFloat((amount / numPerson).toFixed(2));
    }
    if (resultDiv.classList.contains("addError"))
      resultDiv.classList.remove("addError");
    resultDiv.classList.add("addCorrect");
    flag = 0;
  }
  eventHandlers.perUpdateResultHandlers.push({
    element: amountInput,
    handler: updateResult,
  });
  amountInput.addEventListener("input", updateResult);
}

initForm.addEventListener("submit", function (event) {
  event.preventDefault();
  numPerson = parseInt(initForm.querySelector("#quantity").value, 10);
  console.log(numPerson);
  graphArray = Array.from({ length: numPerson }, () =>
    Array(numPerson).fill(0)
  );
  //console.log(graphArray);
  for (let i = 0; i < numPerson; i++) {
    if (!allPayee[i].classList.contains("show")) {
      allPayee[i].classList.add("show");
    }
  }
  resetBtn.classList.remove("hide");
  Calc.classList.remove("hide");
  initForm.classList.add("hide");
});

resetBtn.addEventListener("click", () => {
  initForm.querySelector("#quantity").value = 3;
  onStart();
  initForm.classList.remove("hide");
});

async function GetFinalArray(graph) {
  try {
    const response = await fetch("/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(graph),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const result = await response.json();
    console.log(result);
    return result;
  } catch (error) {
    console.error("Error:", error);
  }
}
async function getCalculation() {
  for (let i = 0; i < numPerson; i++) {
    for (let j = 0; j < numPerson; j++) {
      if (parseFloat(payee[i][j].querySelector(".payee").value) != 0) {
        graphArray[j][i] = parseFloat(
          (parseFloat(payee[i][j].querySelector(".payee").value) || 0).toFixed(
            2
          )
        );
      }
    }
  }
  console.log(graphArray);
  try {
    resultGraph = await GetFinalArray(graphArray); // Wait for the result
    handleResult(); // Call handleResult only after resultGraph is set
  } catch (error) {
    console.error("Error fetching final array:", error);
  }
  handleResult();
}

function EclickHandler(event, index) {
  //console.log(AllDropDownBtnSPE);
  AllDropDownBtnSPE[index].classList.add("selected");
  AllDropDownBtnSPEx[index].classList.remove("selected");
  for (let i = 0; i < numPerson; i++) {
    payee[index][i].classList.add("hide");
    payee[index][i].querySelector(".payee").value = 0;
  }
  resultUpdateForPer(index);
}

function ExclickHandler(event, index) {
  flag = 1;
  AllDropDownBtnSPE[index].classList.remove("selected");
  //AllDropDownBtnSPEx[index].classList.add("selected");
  for (let i = 0; i < numPerson; i++) {
    payee[index][i].classList.remove("hide");
  }
  resultUpdateForExact(index);
}

function setUpEventListener() {
  for (let i = 0; i < 10; i++) {
    AllDropDownBtnSPEx[i].addEventListener("click", PExclicker[i]);
  }

  for (let i = 0; i < 10; i++) {
    AllDropDownBtnSPE[i].addEventListener("click", PEclicker[i]);
  }
  Calc.addEventListener("click", getCalculation);
}

function showResult(event, index) {
  console.log(personPayTextAll[index].querySelectorAll(".get")[9].innerHTML);
  for (let i = 0; i < numPerson; i++) {
    if (i != index) {
      personPayTextAll[index].querySelectorAll(".get")[
        i
      ].innerHTML += `: ${resultGraph[index][i].toFixed(2)}`;
      personPayTextAll[index].querySelectorAll(".get")[i].style.display =
        "block";
    }
  }
  personPayTextAll[index].style.display = "block";
  personPayTextOverlay.style.display = "block";
  console.log("working");
  window.onclick = function (event) {
    if (
      !personPayTextAll[index].contains(event.target) &&
      !personPayBtnAll[index].contains(event.target)
    ) {
      for (let i = 0; i < numPerson; i++) {
        if (i != index)
          personPayTextAll[index].querySelectorAll(".get")[
            i
          ].innerHTML = `Person ${i + 1}`;
        personPayTextAll[index].querySelectorAll(".get")[i].style.display =
          "none";
      }
      personPayTextAll[index].style.display = "none";
      personPayTextOverlay.style.display = "none";
    }
  };
}

function handleResult() {
  Calc.classList.add("hide");
  Calc.removeEventListener("click", getCalculation);
  for (let i = 0; i < 10; i++) {
    if (allPayee[i].classList.contains("show")) {
      allPayee[i].classList.remove("show");
    }
  }
  resSection.style.display = "block";
  for (let i = 0; i < numPerson; i++) {
    personPayBtnAll[i].style.display = "block";
    personPayBtnAll[i].addEventListener("click", showResAll[i]);
  }
}
