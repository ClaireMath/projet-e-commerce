// popup quand ajout d'un article
function addArticleNotification(productTitle) {
    // je créé une div, je lui donne un id ainsi qu'une classe supplémentaire
    let testNotif = document.createElement('div');
    testNotif.id = "notification_container";
    testNotif.classList.add("animation-notification");

    // jen crée une autre à laquelle jajoute une classe
    let testNotifP = document.createElement('div');
    testNotifP.classList.add("content");

    // je créé un § et lui donne un contenu
    let testNotifP2 = document.createElement('p');
    testNotifP2.textContent = `${productTitle} a été ajouté au panier !`;
    
    // je greffe des enfants à mes éléments
    notificationColumn.appendChild(testNotif);
    testNotif.appendChild(testNotifP);
    testNotifP.appendChild(testNotifP2);

    // j'ajoute une animation de style pour que la notification s'efface apres un bref instant 
    setTimeout(function () { testNotif.style.transform = "translateX(50em)"; }, 3000);
    setTimeout(function () { testNotif.style.display = "none"; }, 5000);
}

// popup quand suppression d'un article
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