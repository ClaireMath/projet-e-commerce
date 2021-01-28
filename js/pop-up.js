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

document.getElementById("testButton").addEventListener('click', addArticleNotification)