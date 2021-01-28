function saveContentPanier(product) {

    localStorage.setItem(JSON.parse(product).title, product);

}

function displayPanier() {

    const listParentPanier = document.querySelector("tbody");

    for (let i = 0; i < localStorage.length; i++) {

        let value = JSON.parse(localStorage.getItem(localStorage.key(i)));

        let tr = document.createElement('tr');

        listParentPanier.appendChild(tr);

        //Création du td img
        let tdImg = document.createElement('td');
        let contentImg = document.createElement('img');
        contentImg.setAttribute("src", `${value.img}`)

        tdImg.appendChild(contentImg);

        tr.appendChild(tdImg);

        //Création du td title
        let tdTitle = document.createElement('td');
        tdTitle.textContent = value.title;
        tdTitle.setAttribute("class", "test");

        tr.appendChild(tdTitle);

        //Création du td price
        let tdPrice = document.createElement('td');
        tdPrice.textContent = `${value.price}`;

        tr.appendChild(tdPrice);

        //Création du td quantity
        let tdQuantity = document.createElement('td');
        tdQuantity.textContent = `${value.quantity}`;
        tdQuantity.setAttribute("id", "tdQuantity");

        tr.appendChild(tdQuantity);

        //Création du td delete
        let tdDelete = document.createElement('td');
        tdDelete.setAttribute("class", "red");
        tdDelete.textContent = `X`;
        tdDelete.setAttribute("id", value.id);

        tr.appendChild(tdDelete);

        tdDelete.addEventListener("click", function removeFromCart2() {

            courseName = this.parentElement.querySelector(".test").textContent;

            if (value.quantity === 1) {
                localStorage.removeItem(value.title);
                this.parentElement.remove();
            } else {
                value.quantity = value.quantity - 1;
                tdQuantity.innerText = value.quantity;
                localStorage.setItem(value.title, JSON.stringify(value));
            }

            deleteArticleNotification(courseName);

        });

    }
}


window.addEventListener('DOMContentLoaded', displayPanier);