function saveContentPanier(product) {

    localStorage.setItem(`product-${localStorage.length}`, product);

    /* console.log(JSON.parse(localStorage.getItem(localStorage.key(0)))); */

}
// je recup mon tbody
const listParentPanier = document.querySelector("tbody");
function displayPanier() {
    // je boucle dans le local storage
    for (let i = 0; i < localStorage.length; i++) {

        let value = JSON.parse(localStorage.getItem(localStorage.key(i)));
// je créé mon tr
        let tr = document.createElement('tr');
// j'ajoute mon tr
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
        // j'ajoute un ecouteur d'event à mon bouton tddelete
        tdDelete.addEventListener("click", removeFromCartLS);

    }

    function removeFromCartLS(e) {
        if ( confirm( "Etes-vous sûr de vouloir supprimer ce cours ?" ) ) {
            // Code à éxécuter si le l'utilisateur clique sur "OK"
            // je supprime l'élément parent de la cible de l'event (donc du bouton)
        e.target.parentElement.remove();
    } else {
            // Code à éxécuter si l'utilisateur clique sur "Annuler" 
        return
        }
        
    }
    // meme chose mais pour supprimer le code généré grâce au local storage
    btnViderPanier.addEventListener("click", viderPanierLS);
}
function viderPanierLS(e) {
    // je boucle dans toutes les lignes du tableau
    allCartLinesLS = listParentPanier.querySelectorAll("tr");
    for (let i = 0; i < allCartLinesLS.length; i++) {
        // pour pouvoir les effacer une a une
      allCartLinesLS[i].remove();
    }
    // je vide mon local storage
    localStorage.clear();
  }

  // au chargement de la page, la fonction displayPanier s'execute
window.addEventListener('DOMContentLoaded', displayPanier);