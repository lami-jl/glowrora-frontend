window.onload = function() {

    setInterval(function() {
        const ora = new Date();
        document.getElementById("orologio").textContent = ora.toLocaleString();
    }, 1000);

}
document.querySelectorAll("button").forEach(btn => {
  btn.addEventListener("click", () => {
    alert("Prodotto aggiunto al carrello 🛒");
  });
});



