const form = document.querySelector("#form");
const gherkinTextarea = document.querySelector("#gherkin");
const outputTextarea = document.querySelector("#output");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const gherkin = gherkinTextarea.value;
  const stepDefinitions = convertToCypressStepDefinitions(gherkin);
  outputTextarea.value = stepDefinitions;
});

function convertToCypressStepDefinitions(gherkin) {
  const steps = gherkin.split("\n");
  let stepDefinitions = "";

  steps.forEach((step) => {
    if (step.trim().startsWith("Given")) {
      stepDefinitions += `Given('${step.trim().substring(6)}', () => {\n  \n});\n\n`;
    } else if (step.trim().startsWith("When")) {
      stepDefinitions += `When('${step.trim().substring(5)}', () => {\n  \n});\n\n`;
    } else if (step.trim().startsWith("Then")) {
      stepDefinitions += `Then('${step.trim().substring(4)}', () => {\n  \n});\n\n`;
    } else if (step.trim().startsWith("And")) {
      stepDefinitions += `And('${step.trim().substring(3)}', () => {\n  \n});\n\n`;
    } else if (step.trim().startsWith("But")) {
      stepDefinitions += `But('${step.trim().substring(2)}', () => {\n  \n});\n\n`;
    } else {
      stepDefinitions += `TEST ${step}\n`;
    }
  });
  return stepDefinitions;
}

document.querySelector("#copy").onclick = function () {
  document.querySelector("#output").select();
  document.execCommand("copy");
};

//test
