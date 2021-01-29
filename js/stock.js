let btnCart = document.querySelectorAll('.add-to-cart');

for (i = 0; i < btnCart.length; i++) {

    btnCart[i].addEventListener("click", function () {

        console.log(this.parentNode);

    })
}