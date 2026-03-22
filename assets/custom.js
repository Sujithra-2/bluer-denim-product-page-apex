function selectVariant(id) {
  document.getElementById("variant-id").value = id;
}

function toggleAccordion() {
  const content = document.querySelector(".accordion-content");
  content.style.display =
    content.style.display === "block" ? "none" : "block";
}