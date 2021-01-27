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

function saveContentPanier() {

    localStorage.setItem("panier", stringifyCourses)
}

function displayPanier() {

    const listParentPanier = document.querySelector("tbody");

    for (const [key, value] of Object.entries(parseCourses)) {

        let tr = document.createElement('tr');

        listParentPanier.appendChild(tr);

        //Création du td img
        let tdImg = document.createElement('td');
        let contentImg = document.createElement('img');
        contentImg.setAttribute("src", `img/courses/${value.img}`)

        tdImg.appendChild(contentImg);

        tr.appendChild(tdImg);

        //Création du td title
        let tdTitle = document.createElement('td');
        let contentTitle = document.createElement('p');
        contentTitle.textContent = value.title;

        tdTitle.appendChild(contentTitle);

        tr.appendChild(tdTitle);

        //Création du td price
        let tdPrice = document.createElement('td');
        let contentPrice = document.createElement('p');
        contentPrice.textContent = `${value.price}€`;

        tdPrice.appendChild(contentPrice);

        tr.appendChild(tdPrice);

        //Création du td price
        let tdQuantity = document.createElement('td');
        let contentQuantity = document.createElement('p');
        contentQuantity.textContent = `1`;

        tdQuantity.appendChild(contentQuantity);

        tr.appendChild(tdQuantity);

        //Création du td delete
        let tdDelete = document.createElement('td');
        let contentDelete = document.createElement('button');
        contentDelete.textContent = `x`;

        tdDelete.appendChild(contentDelete);

        tr.appendChild(tdDelete);
    }
}

displayPanier();

input.addEventListener('keyup', searchArticle);

function searchArticle() {
    const filter = input.value;

    for (i = 0; i < listArticles.length; i++) {

        titleValue = listTitles[i].innerText;

        if (titleValue.indexOf(filter) > -1) {
            listArticles[i].style.display = "flex";
        } else {
            listArticles[i].style.display = "none";
        }

    }
}

function addArticleNotification(productTitle) {

    let testNotif = document.createElement('div');
    testNotif.id = "notification_container";
    testNotif.classList.add("animation-notification");

    let testNotifP = document.createElement('div');
    testNotifP.classList.add("content");

    let testNotifP2 = document.createElement('p');
    testNotifP2.textContent = `${productTitle} a été ajouté au panier !`;

    notificationColumn.appendChild(testNotif);
    testNotif.appendChild(testNotifP);
    testNotifP.appendChild(testNotifP2);

    setTimeout(function () { testNotif.style.transform = "translateX(50em)"; }, 3000);
    setTimeout(function () { testNotif.style.display = "none"; }, 5000);
}

function deleteArticleNotification(productTitle) {

    let testNotif = document.createElement('div');
    testNotif.id = "notification_container";
    testNotif.classList.add("animation-notification");

    let testNotifP = document.createElement('div');
    testNotifP.classList.add("content");

    let testNotifP2 = document.createElement('p');
    testNotifP2.textContent = `${productTitle} a été supprimé du panier !`;

    notificationColumn.appendChild(testNotif);
    testNotif.appendChild(testNotifP);
    testNotifP.appendChild(testNotifP2);

    setTimeout(function () { testNotif.style.transform = "translateX(50em)"; }, 3000);
    setTimeout(function () { testNotif.style.display = "none"; }, 5000);
}

function generateDynamicHTMLJson() {

    let a;

    for (let i = 0; i < listTitles.length; i++) {
        a = i + 1;
        listTitles[i].textContent = parseCourses[a].title;
        listImg[i].setAttribute("src", `img/courses/${parseCourses[a].img}`)
        initialPrice[i].textContent = parseCourses[a].initial_price + " €";
        listPrice[i].textContent = parseCourses[a].price + " €";
        listStock[i].textContent = parseCourses[a].stock;
    }


}

generateDynamicHTMLJson();