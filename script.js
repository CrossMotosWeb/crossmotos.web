const promoBar = document.getElementById("promoBar");
const closePromo = document.getElementById("closePromo");

closePromo.addEventListener("click", (e) => {

    // EVITA ABRIR promociones.html
    e.preventDefault();

    // EVITA QUE EL CLICK SE PROPAGUE AL <a>
    e.stopPropagation();

    promoBar.style.opacity = "0";
    promoBar.style.transform = "translateX(-50%) translateY(-20px)";

    setTimeout(() => {

        promoBar.style.display = "none";

    }, 300);

});