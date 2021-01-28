







































































































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

