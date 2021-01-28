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
  tbody,
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

/* function removeFromCart(e) {
    divOfClickedBtnData = {
        img: divOfClickedBtn.querySelector('img').src,
        title: divOfClickedBtn.querySelector('h4').textContent,
        price: divOfClickedBtn.querySelector('.discount').textContent,
        id: divOfClickedBtn.querySelector('a').getAttribute('data-id')
    }
    courseName = divOfClickedBtnData.title;
    e.target.parentElement.remove();
    // newLine;
    deleteArticleNotification(courseName);

}
 */

btnViderPanier = document.getElementById("empty-cart");
btnViderPanier.addEventListener("click", viderPanier);

function viderPanier(e) {
  //let papa=e.target.parentElement;
  allCartLines = tbody.querySelectorAll("tr");
  for (let i = 0; i < allCartLines.length; i++) {
    allCartLines[i].remove();
  }
}
