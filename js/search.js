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
