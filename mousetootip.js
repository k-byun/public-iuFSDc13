// Get the elements
const tooltip = document.getElementById("tooltip");
const hoverText = document.getElementById("hover-text");

// Add event listener to move tooltip with mouse
hoverText.addEventListener("mousemove", function (event) {
  const mouseX = event.clientX + 15; // Offset from mouse cursor
  const mouseY = event.clientY + 15; // Offset from mouse cursor

  tooltip.style.left = mouseX + "px"; // Position the tooltip near mouse X
  tooltip.style.top = mouseY + "px"; // Position the tooltip near mouse Y
});
