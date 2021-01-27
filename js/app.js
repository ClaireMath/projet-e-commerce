const stringifyCourses = JSON.stringify(COURSES);

const parseCourses = JSON.parse(localStorage.getItem("panier"));

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

const input = document.querySelector("input");

const listArticles = document.querySelectorAll('.course__item');

const listTitles = document.querySelectorAll('h4');

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
