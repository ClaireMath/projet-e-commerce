function saveContentPanier(product) {

    localStorage.setItem(`product-${localStorage.length}`, product);

    /* console.log(JSON.parse(localStorage.getItem(localStorage.key(0)))); */

}
const listParentPanier = document.querySelector("tbody");
function displayPanier() {

    for (let i = 0; i < localStorage.length; i++) {

        let value = JSON.parse(localStorage.getItem(localStorage.key(i)));

        let tr = document.createElement('tr');

        listParentPanier.appendChild(tr);

        //Création du td img
        let tdImg = document.createElement('td');
        let contentImg = document.createElement('img');
        contentImg.setAttribute("src", `${value.img}`)

        tdImg.appendChild(contentImg);

        tr.appendChild(tdImg);

        //Création du td title
        let tdTitle = document.createElement('td');
        tdTitle.textContent = value.title;

        tr.appendChild(tdTitle);

        //Création du td price
        let tdPrice = document.createElement('td');
        tdPrice.textContent = `${value.price}`;

        tr.appendChild(tdPrice);

        //Création du td price
        let tdQuantity = document.createElement('td');
        tdQuantity.textContent = `1`;

        tr.appendChild(tdQuantity);

        //Création du td delete
        let tdDelete = document.createElement('td');
        tdDelete.setAttribute("class", "red");
        tdDelete.textContent = `X`;
        tdDelete.setAttribute("id", value.id);

        tr.appendChild(tdDelete);
        tdDelete.addEventListener("click", removeFromCartLS);

    }

    function removeFromCartLS(e) {
        if ( confirm( "Etes-vous sûr de vouloir supprimer ce cours ?" ) ) {
            // Code à éxécuter si le l'utilisateur clique sur "OK"
        e.target.parentElement.remove();
    } else {
            // Code à éxécuter si l'utilisateur clique sur "Annuler" 
        return
        }
        
    }
    btnViderPanier.addEventListener("click", viderPanierLS);
}
function viderPanierLS(e) {
    allCartLinesLS = listParentPanier.querySelectorAll("tr");
    for (let i = 0; i < allCartLinesLS.length; i++) {
      allCartLinesLS[i].remove();
    }
    localStorage.clear();
  }

window.addEventListener('DOMContentLoaded', displayPanier);