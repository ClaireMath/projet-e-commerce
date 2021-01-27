function saveContentPanier() {

    const stringify = JSON.stringify(COURSES);

    localStorage.setItem("panier", stringify)
}

saveContentPanier();