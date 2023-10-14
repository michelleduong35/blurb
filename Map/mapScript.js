//selects all markers
const markers = document.querySelectorAll("#map .marker");

//Makes each marker reveal the description of the country on click
for (let marker of markers) {
  marker.addEventListener("click", () => {
    const country = marker.getAttribute("id");
    const card = document.querySelector("#" + country + " .card");
    if (card.classList.contains("hidden")) {
      card.classList.remove("hidden")
    } else {
      card.classList.add("hidden");
    }
  });
}