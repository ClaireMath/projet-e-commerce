function generateDynamicHTMLJson() {

    let a;
// je boucle dans ma liste de titres
    for (let i = 0; i < listTitles.length; i++) {
        a = i + 1;
        // je donne du contenu à mes titres, img, prix etc
        listTitles[i].textContent = COURSES[a].title;
        listImg[i].setAttribute("src", `img/courses/${COURSES[a].img}`)
        initialPrice[i].textContent = COURSES[a].initial_price + " €";
        listPrice[i].textContent = COURSES[a].price + " €";
        listStock[i].textContent = COURSES[a].stock;
    }

}

// au chargement de la page, j'execute ma fonction generateDynamicHTMLJson
window.addEventListener('DOMContentLoaded', generateDynamicHTMLJson);