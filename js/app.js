const stringifyCourses = JSON.stringify(COURSES);

const parseCourses = JSON.parse(localStorage.getItem("panier"));

const buttonNotif = document.getElementById("test-notif");

const body = document.querySelector("body");

const notificationColumn = document.getElementById("notification_column");

const input = document.querySelector("input");

const listArticles = document.querySelectorAll(".course__item");

const listTitles = document.querySelectorAll("h4");

const listImg = document.querySelectorAll(".course_img > img");

const initialPrice = document.querySelectorAll(".price");

const listPrice = document.querySelectorAll(".discount");

const listStock = document.querySelectorAll(".stock");

const deleteButton = document.querySelectorAll('.red')

/* console.log(COURSES); */

let cartes = document.querySelectorAll(".course__item");
/* console.log(cartes); */

let btn,
  imageSrcValue,
  srcOfImg,
  courseName,
  price,
  idRemove,
  img,
  divOfClickedBtn,
  divOfClickedBtnData,
  btnViderPanier,
  allCartLines,
  newLine,
  td0style,
  td1Name,
  td2Price,
  td3Qtity,
  td4Remove,
  popUp,
  popUpText,
  imgCarte,
  myXremove;

// Je boucle dans mes cartes
for (let i = 0; i < cartes.length; i++) {
  // pour chaque carte, je récupère le lien (a) et je le mets dans la variable btn
  btn = cartes[i].querySelector("a");
  // je mets un écouteur d'évènement sur mon lien qui lancera la fonction addToCart au click
  btn.addEventListener("click", addToCart);
}

function removeFromCart(e) {
    //boite de dialogue de type confirm :
    if ( confirm( "Etes-vous sûr de vouloir supprimer ce cours ?" ) ) {
        // Code à éxécuter si le l'utilisateur clique sur "OK"

        courseName = this.parentElement.querySelector(".test").textContent;
        if (value.quantity === 1) {
                localStorage.removeItem(value.title);
                this.parentElement.remove();
              } else {
                value.quantity = value.quantity - 1;
                tdQuantity.innerText = value.quantity;
                localStorage.setItem(value.title, JSON.stringify(value));
              }
        //données de la div mère du bouton cliqué : 
    divOfClickedBtnData = {
    img: divOfClickedBtn.querySelector("img").src,
    title: divOfClickedBtn.querySelector("h4").textContent,
    price: divOfClickedBtn.querySelector(".discount").textContent,
    id: divOfClickedBtn.querySelector("a").getAttribute("data-id"),
  };
  courseName = divOfClickedBtnData.title;
  // on supprime l'élement parent de la cible de l'event (donc du bouton)
  e.target.parentElement.remove();
  // on appel la fonction pour générer la popup
  deleteArticleNotification(courseName);
    } else {
        return
    }
  
}
// je récup mon bouton
btnViderPanier = document.getElementById("empty-cart");
// je lui mets un event au click
btnViderPanier.addEventListener("click", viderPanier);

function viderPanier(e) {
    // boite de dialogue pour confirmer de vider le panier
    if ( confirm( "Etes-vous sûr de vouloir vider le panier ?" ) ) {
        // Code à éxécuter si le l'utilisateur clique sur "OK"
  // je récup toutes les lignes de mon table body pour pouvoir boucler dedans :
  allCartLines = tbody.querySelectorAll("tr");
  for (let i = 0; i < allCartLines.length; i++) {
      // je supprime chacune des lignes
    allCartLines[i].remove();
  }
}
  else {
      return
  }
}
