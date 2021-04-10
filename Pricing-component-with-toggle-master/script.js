const togglerBtn = document.getElementById("togglerBtn");
const cardPrice = document.querySelectorAll(".cardPrice");
const togglerItem = localStorage.getItem("toggler");
const body = document.body;

togglerBtn.addEventListener("click", function () {
  togglerBtn.classList.toggle("translation");

  cardPrice.forEach((price) => {
    price.classList.toggle("annualy");
  });
});

window.addEventListener("onkeypress", function (e) {
  if (e.code === 37) {
    console.log("Done");
  }
  console.log("done");
});
