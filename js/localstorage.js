function saveContentPanier(product) {

    localStorage.setItem(JSON.parse(product).title, product);

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
        console.log(`source de l'image du local storage${value.img}`);
        contentImg.setAttribute("src", `${value.img}`)

        tdImg.appendChild(contentImg);

        tr.appendChild(tdImg);

        //Création du td title
        let tdTitle = document.createElement('td');
        tdTitle.textContent = value.title;
        tdTitle.setAttribute("class", "test");

        tr.appendChild(tdTitle);

        //Création du td price
        let tdPrice = document.createElement('td');
        tdPrice.textContent = `${value.price}`;

        tr.appendChild(tdPrice);

        //Création du td quantity
        let tdQuantity = document.createElement('td');
        tdQuantity.textContent = `${value.quantity}`;
        tdQuantity.setAttribute("id", "tdQuantity");

        tr.appendChild(tdQuantity);

        //Création du td delete
        let tdDelete = document.createElement('td');
        tdDelete.setAttribute("class", "red");
        tdDelete.textContent = `X`;
        tdDelete.setAttribute("id", value.id);

        tr.appendChild(tdDelete);

        tdDelete.addEventListener("click", function removeFromCart2() {

            courseName = this.parentElement.querySelector(".test").textContent;

            if (value.quantity === 1) {
                localStorage.removeItem(value.title);
                this.parentElement.remove();
            } else {
                value.quantity = value.quantity - 1;
                tdQuantity.innerText = value.quantity;
                localStorage.setItem(value.title, JSON.stringify(value));
            }

            deleteArticleNotification(courseName);

        });

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