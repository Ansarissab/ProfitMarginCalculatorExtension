document.addEventListener("DOMContentLoaded", function () {
  const sellingPriceInput = document.getElementById("sellingPrice");
  const costPriceInput = document.getElementById("costPrice");

  [sellingPriceInput, costPriceInput].forEach((input) => {
    input.addEventListener("input", handleInput);
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "z") {
      applyZoomEffect();
    }
  });
});

function handleInput() {
  const sellingPrice = parseFloat(
    document.getElementById("sellingPrice").value
  );
  const costPrice = parseFloat(document.getElementById("costPrice").value);

  if (!isNaN(sellingPrice) && !isNaN(costPrice)) {
    calculateMargins(sellingPrice, costPrice);
  }
}

function calculateMargins(sellingPrice, costPrice) {
  const margins = [
    10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100,
  ];
  const resultContainer = document.getElementById("result");
  resultContainer.innerHTML = "";

  margins.forEach((margin) => {
    const calculatedMargin = calculateMargin(sellingPrice, margin);
    const resultElement = document.createElement("div");
    resultElement.textContent = `Profit : $${calculatedMargin.toFixed(
      2
    )} = ${margin}% Margin`;
    resultContainer.appendChild(resultElement);

    resultElement.addEventListener("mouseover", function () {
      resultElement.classList.add("zoomEffect");
    });

    resultElement.addEventListener("mouseout", function () {
      resultElement.classList.remove("zoomEffect");
    });
  });
}

function calculateMargin(sellingPrice, marginPercentage) {
  const costPrice = sellingPrice / (1 + marginPercentage / 100);
  return sellingPrice - costPrice;
}

function applyZoomEffect() {
  const resultElements = document.querySelectorAll("#result div");
  resultElements.forEach((element) => {
    element.classList.add("zoomEffect");
  });

  setTimeout(() => {
    resultElements.forEach((element) => {
      element.classList.remove("zoomEffect");
    });
  }, 1000);
}
