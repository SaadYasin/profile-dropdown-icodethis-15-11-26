function createAddAccountTooltip() {
  const button = document.getElementById("plus_btn");
  if (!button) return;

  const tooltip = document.createElement("span");
  tooltip.textContent = "Add Account";
  tooltip.setAttribute("role", "tooltip");
  tooltip.hidden = true;
  Object.assign(tooltip.style, {
    position: "absolute",
    top: "calc(100% + 10px)",
    left: "50%",
    transform: "translateX(-50%)",
    padding: "8px 18px",
    color: "#fff",
    backgroundColor: "#0f0f0f",
    borderRadius: "8px",
    boxShadow: "0 8px 18px rgba(0, 0, 0, 0.3)",
    fontSize: "12px",
    lineHeight: "1.25",
    whiteSpace: "nowrap",
    zIndex: "10",
    pointerEvents: "none",
  });

  const pointer = document.createElement("span");
  Object.assign(pointer.style, {
    position: "absolute",
    top: "-5px",
    left: "50%",
    width: "10px",
    height: "10px",
    backgroundColor: "#111",
    transform: "translateX(-50%) rotate(45deg)",
  });
  tooltip.append(pointer);
  button.append(tooltip);

  const showTooltip = () => {
    tooltip.hidden = false;
  };
  const hideTooltip = () => {
    tooltip.hidden = true;
  };

  button.addEventListener("mouseenter", showTooltip);
  button.addEventListener("mouseleave", hideTooltip);
  button.addEventListener("focus", showTooltip);
  button.addEventListener("blur", hideTooltip);
}

createAddAccountTooltip();
