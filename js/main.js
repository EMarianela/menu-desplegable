const $openClose = document.getElementById("menu-check");
    $aside = document.getElementById("aside");

    $openClose.addEventListener("click", () =>{
       $aside.classList.toggle("desplegar");
    })