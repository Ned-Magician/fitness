// ANIMATION GLASS FOR NAVES MENUE

let navLink1 = document.querySelectorAll(".nav-link")[0];
let navLink2 = document.querySelectorAll(".nav-link")[1];
let navLink3 = document.querySelectorAll(".nav-link")[2];
let navLink4 = document.querySelectorAll(".nav-link")[3];
let hell = document.createElement("span");
// mouseleave FOR ANIMATION
navLink1.addEventListener("mouseleave", () => {
  navLink1.removeChild(hell);
});
navLink2.addEventListener("mouseleave", () => {
  navLink2.removeChild(hell);
});
navLink3.addEventListener("mouseleave", () => {
  navLink3.removeChild(hell);
});
navLink4.addEventListener("mouseleave", () => {
  navLink4.removeChild(hell);
});
// mouseenter FOR ANIMATION
navLink1.addEventListener("mouseenter", () => {
  let hello = navLink1.appendChild(hell);
  hello.classList.add("glass-animation");
});
navLink2.addEventListener("mouseenter", () => {
  let hello = navLink2.appendChild(hell);
  hello.classList.add("glass-animation");
});
navLink3.addEventListener("mouseenter", () => {
  let hello = navLink3.appendChild(hell);
  hello.classList.add("glass-animation");
});
navLink4.addEventListener("mouseenter", () => {
  let hello = navLink4.appendChild(hell);
  hello.classList.add("glass-animation");
});

//------------  HPVER CARDS ----------
let cards = document.querySelectorAll(".card-hover");
const hovering1 = document.querySelector(".hovering1");
const hovering2 = document.querySelector(".hovering2");
const hovering3 = document.querySelector(".hovering3");

// function hovering() {
//   for (let i = 0; i < cards.length; i++) {
//     cards[i].addEventListener("mouseenter", function (event) {
//       if (event.target == hovering1) {
//         cards[i].classList.add("hover-target");
//         cards[i].nextElementSibling.classList.add("hover-not-target");
//         cards[i].nextElementSibling.nextElementSibling.classList.add(
//           "hover-not-target"
//         );
//       }
//       if (event.target == hovering2) {
//         cards[i].matches("hovering1").classList.add("hover-target");
//         cards[i].previousElementSibling.classList.add("hover-not-target");
//         cards[i].nextElementSibling.classList.add("hover-not-target");
//       }
//       if (event.target == hovering3) {
//         cards[i].matches("hovering1").classList.add("hover-target");
//         cards[i].previousElementSibling.classList.add("hover-not-target");
//         cards[i].previousElementSibling.previousElementSibling.classList.add(
//           "hover-not-target"
//         );
//       }
//     });
//   }
// }
// hovering();
// function hoveringOut() {
//   for (let i = 0; i < cards.length; i++) {
//     cards[i].addEventListener("mouseleave", function (event) {
//       if (event.target == hovering1) {
//         cards[i].classList.remove("hover-target");
//         cards[i].nextElementSibling.classList.remove("hover-not-target");
//         cards[i].nextElementSibling.nextElementSibling.classList.remove(
//           "hover-not-target"
//         );
//       }
//       if (event.target == hovering2) {
//         cards[i].classList.remove("hover-target");
//         cards[i].previousElementSibling.classList.remove("hover-not-target");
//         cards[i].nextElementSibling.classList.remove("hover-not-target");
//       }
//       if (event.target == hovering3) {
//         cards[i].classList.remove("hover-target");
//         cards[i].previousElementSibling.classList.remove("hover-not-target");
//         cards[i].previousElementSibling.previousElementSibling.classList.remove(
//           "hover-not-target"
//         );
//       }
//     });
//   }
// }
// hoveringOut();

hovering1.addEventListener("mouseenter", function (event) {
  hovering1.classList.add("hover-target");
  hovering1.nextElementSibling.classList.add("hover-not-target");
  hovering1.nextElementSibling.nextElementSibling.classList.add(
    "hover-not-target"
  );
});
hovering1.addEventListener("mouseleave", function (event) {
  hovering1.classList.remove("hover-target");
  hovering1.nextElementSibling.classList.remove("hover-not-target");
  hovering1.nextElementSibling.nextElementSibling.classList.remove(
    "hover-not-target"
  );
});

hovering2.addEventListener("mouseenter", function (event) {
  hovering2.classList.add("hover-target");
  hovering2.nextElementSibling.classList.add("hover-not-target");
  hovering2.previousElementSibling.classList.add("hover-not-target");
});
hovering2.addEventListener("mouseleave", function (event) {
  hovering2.classList.remove("hover-target");
  hovering2.nextElementSibling.classList.remove("hover-not-target");
  hovering2.previousElementSibling.classList.remove("hover-not-target");
});

hovering3.addEventListener("mouseenter", function (event) {
  hovering3.classList.add("hover-target");
  hovering3.previousElementSibling.classList.add("hover-not-target");
  hovering3.previousElementSibling.previousElementSibling.classList.add(
    "hover-not-target"
  );
});
hovering3.addEventListener("mouseleave", function (event) {
  hovering3.classList.remove("hover-target");
  hovering3.previousElementSibling.classList.remove("hover-not-target");
  hovering3.previousElementSibling.previousElementSibling.classList.remove(
    "hover-not-target"
  );
});
