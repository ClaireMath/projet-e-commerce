console.log(COURSES);

let cartes = document.querySelectorAll(".course__item");
console.log(cartes);



// Je boucle dans mes cartes
for (let i = 0; i < cartes.length; i++) {
    // pour chaque carte, je récupère le lien et je le mets dans la variable btn
let btn = cartes[i].querySelector("a");
// je mets un écouteur d'évènement sur mon lien qui lancera la fonction addTCart au click
btn.addEventListener('click', addToCart);
}; 

// fonction pour ajouter au panier
function addToCart() {
    // je récupère le table body :
    let tbody = document.querySelector('tbody');
    // je créé une nouvelle ligne
    let newLine = document.createElement('tr');
    // je créé 4 table data (le premier c'est juste pour que ce soit beau):
    let td0style = document.createElement('td');
    let td1Name = document.createElement('td');
    let td2Price = document.createElement('td');
    let td3Qtity = document.createElement('td');
    // je donne un contenu à mes td (pour l'instant en dur):
    td1Name.textContent = "JS";
    td2Price.textContent = "50 euros";
    td3Qtity.textContent = "1";

    // j'ajoute mes cases à ma ligne
    newLine.appendChild(td0style);
    newLine.appendChild(td1Name);
    newLine.appendChild(td2Price);
    newLine.appendChild(td3Qtity);
    
    // j'ajoute ma ligne à mon table body
    tbody.appendChild(newLine);
    // localStorage.setItem("article : ", "");
console.log('je suis dans la fonction addtocart');
}