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