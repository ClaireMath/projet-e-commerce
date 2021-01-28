console.log(COURSES);

let cartes = document.querySelectorAll(".course__item");
console.log(cartes);

let btn,
  imageSrcValue,
  srcOfImg,
  courseName,
  price,
idRemove,
img,
  divOfClickedBtn,
  divOfClickedBtnData,
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
  // fonction pour ajouter au panier
  function addToCart(e) {
      // je récupère l'élement parent de l'élément parent de la cible de l'évènement 
      // donc la div .course_item de mon bouton
    divOfClickedBtn = e.target.parentElement.parentElement;
    divOfClickedBtnData = {
    img:    divOfClickedBtn.querySelector('img').src,
    title:  divOfClickedBtn.querySelector('h4').textContent,
    price:  divOfClickedBtn.querySelector('.discount').textContent,
    id:     divOfClickedBtn.querySelector('a').getAttribute('data-id')
  }
    srcOfImg = divOfClickedBtnData.img; divOfClickedBtn.querySelector("figure");
    img = document.createElement('img')
    img.setAttribute("src", srcOfImg);
    courseName = divOfClickedBtnData.title;
    price = divOfClickedBtnData.price;
    idRemove = divOfClickedBtnData.id;
      // je récupère le table body :
      tbody = document.querySelector("tbody");
      // je créé une nouvelle ligne
      newLine = document.createElement("tr");
      // je créé 5 table data :
      tdImg = document.createElement("td");

      td1Name = document.createElement("td");
      td2Price = document.createElement("td");
      td3Qtity = document.createElement("td");
      td4Remove = document.createElement("td");
      td4Remove.setAttribute("class", "red");

      // je donne un contenu à mes td (pour l'instant en dur):
      tdImg.appendChild(img);
      td1Name.textContent = courseName;
      td2Price.textContent = price;
      td3Qtity.textContent = "1";
      td4Remove.textContent = "X";
      td4Remove.setAttribute("id", idRemove);
      // j'ajoute mes cases à ma ligne
      newLine.appendChild(tdImg);
      newLine.appendChild(td1Name);
      newLine.appendChild(td2Price);
      newLine.appendChild(td3Qtity);
      newLine.appendChild(td4Remove);

      // j'ajoute ma ligne à mon table body
      tbody.appendChild(newLine);
      // localStorage.setItem("article : ", "");
      td4Remove.addEventListener("click", removeFromCart);
    }
    function removeFromCart(e) {
        console.log(td4Remove);
         e.target.parentElement.remove();
        // newLine;
      }
    
    // je créé la pop-up pour confirmer l'ajout de l'article :
    // popUp = document.createElement("p");
    // popUpText = "Votre cours a bien été ajouté au panier!";
    // // je donne un contenu à ma popUp
    // popUp.textContent = popUpText;
    // // je lui donne une classe
    // popUp.setAttribute("class", "appearBriefly");

    // console.log("je suis dans la fonction addtocart");
  

 








































































































const stringifyCourses = JSON.stringify(COURSES);

const parseCourses = JSON.parse(localStorage.getItem("panier"));

const buttonNotif = document.getElementById("test-notif");

const body = document.querySelector('body');

const notificationColumn = document.getElementById('notification_column');

const input = document.querySelector("input");

const listArticles = document.querySelectorAll('.course__item');

const listTitles = document.querySelectorAll('h4');

const listImg = document.querySelectorAll('.course_img > img');

const initialPrice = document.querySelectorAll('.price');

const listPrice = document.querySelectorAll('.discount');

const listStock = document.querySelectorAll('.stock');

