// fonction pour ajouter au panier
function addToCart(e) {
    e.preventDefault();
    // je récupère l'élement parent de l'élément parent de la cible de l'évènement 
    // donc la div .course_item de mon bouton
    divOfClickedBtn = e.target.parentElement.parentElement;
    divOfClickedBtnData = {
        img: divOfClickedBtn.querySelector('img').src,
        title: divOfClickedBtn.querySelector('h4').textContent,
        price: divOfClickedBtn.querySelector('.discount').textContent,
        id: divOfClickedBtn.querySelector('a').getAttribute('data-id'),
        quantity: localStorage.getItem(divOfClickedBtn.querySelector('h4').textContent) ? JSON.parse(localStorage.getItem(divOfClickedBtn.querySelector('h4').textContent)).quantity + 1 : 1
    }
    srcOfImg = divOfClickedBtnData.img; divOfClickedBtn.querySelector("figure");
    courseName = divOfClickedBtnData.title;
    price = divOfClickedBtnData.price;
    let quantity = divOfClickedBtnData.quantity;
    idRemove = divOfClickedBtnData.id;
    // je récupère le table body :
    tbody = document.querySelector("tbody");

    if (quantity > 1) {
        let tdQuantity = document.querySelector("#tdQuantity");
        tdQuantity.innerHTML = quantity;
    } else {
        img = document.createElement('img')
        img.setAttribute("src", srcOfImg);
        // je créé une nouvelle ligne
        newLine = document.createElement("tr");
        // je créé 5 table data :
        tdImg = document.createElement("td");

        td1Name = document.createElement("td");
        td2Price = document.createElement("td");
        td3Qtity = document.createElement("td");
        td3Qtity.setAttribute("id", "tdQuantity");
        td4Remove = document.createElement("td");
        td4Remove.setAttribute("class", "red");

        // je donne un contenu à mes td (pour l'instant en dur):
        tdImg.appendChild(img);
        td1Name.textContent = courseName;
        td2Price.textContent = price;
        td3Qtity.textContent = quantity;
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
        /* td4Remove.addEventListener("click", removeFromCart); */
    }

    addArticleNotification(courseName);

    saveContentPanier(JSON.stringify(divOfClickedBtnData));
}



/* td4Remove.addEventListener("click", function removeFromCart3() {

    if (quantity === 1) {
        localStorage.removeItem(divOfClickedBtnData.title);
        this.parentElement.remove();
    } else {
        quantity = quantity - 1;
        td3Qtity.innerText = quantity;
        localStorage.setItem(divOfClickedBtnData.title, JSON.stringify(divOfClickedBtnData));
    }

    deleteArticleNotification(divOfClickedBtnData.title);

}); */