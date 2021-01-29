// j'ajoute un écouteur d'events sur mon input, l'event c'est quand la touche remonte (donc quand on a appuyé sur une touche)
input.addEventListener('keyup', searchArticle);

function searchArticle() {
    // je récup la valeur de mon input
    const filter = input.value.toUpperCase();
    // je boucle dans mes cartes :
    for (i = 0; i < listArticles.length; i++) {

        // je recup le contenu de chacun des titres
        titleValue = listTitles[i].innerText;
            // si c'est supérieur à -1 c'est que la valeur à eté trouvée, donc j'affiche la carte
        if (titleValue.indexOf(filter) > -1) {
            listArticles[i].style.display = "flex";
        } else {
            // sinon, je lui mets un display none pour la cacher
            listArticles[i].style.display = "none";
        }

    }
}
