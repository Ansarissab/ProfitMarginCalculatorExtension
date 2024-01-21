document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("calculateMargins")
    .addEventListener("click", calculateMargins);
});

function calculateMargins() {
  const sellingPrice = parseFloat(
    document.getElementById("sellingPrice").value
  );

  if (isNaN(sellingPrice)) {
    alert("Please enter a valid selling price.");
    return;
  }

  const margins = [
    10, 20, 25, 30, 35, 40, 45, 50, 60, 65, 70, 75, 80, 85, 90, 95, 100,
  ];
  const resultContainer = document.getElementById("result");
  resultContainer.innerHTML = "";

  margins.forEach((margin) => {
    const calculatedMargin = calculateMargin(sellingPrice, margin);
    const resultElement = document.createElement("div");
    resultElement.textContent = `${margin}% Margin: ${calculatedMargin.toFixed(
      2
    )}`;
    resultContainer.appendChild(resultElement);
  });
}

function calculateMargin(sellingPrice, marginPercentage) {
  const costPrice = sellingPrice / (1 + marginPercentage / 100);
  return sellingPrice - costPrice;
}
