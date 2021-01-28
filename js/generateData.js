function generateDynamicHTMLJson() {

    let a;

    for (let i = 0; i < listTitles.length; i++) {
        a = i + 1;
        listTitles[i].textContent = COURSES[a].title;
        listImg[i].setAttribute("src", `img/courses/${COURSES[a].img}`)
        initialPrice[i].textContent = COURSES[a].initial_price + " €";
        listPrice[i].textContent = COURSES[a].price + " €";
        listStock[i].textContent = COURSES[a].stock;
    }

}

window.addEventListener('DOMContentLoaded', generateDynamicHTMLJson);