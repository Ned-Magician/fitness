let navLink1=document.querySelectorAll(".nav-link")[0],navLink2=document.querySelectorAll(".nav-link")[1],navLink3=document.querySelectorAll(".nav-link")[2],navLink4=document.querySelectorAll(".nav-link")[3],hell=document.createElement("span");navLink1.addEventListener("mouseleave",(()=>{navLink1.removeChild(hell)})),navLink2.addEventListener("mouseleave",(()=>{navLink2.removeChild(hell)})),navLink3.addEventListener("mouseleave",(()=>{navLink3.removeChild(hell)})),navLink4.addEventListener("mouseleave",(()=>{navLink4.removeChild(hell)})),navLink1.addEventListener("mouseenter",(()=>{navLink1.appendChild(hell).classList.add("glass-animation")})),navLink2.addEventListener("mouseenter",(()=>{navLink2.appendChild(hell).classList.add("glass-animation")})),navLink3.addEventListener("mouseenter",(()=>{navLink3.appendChild(hell).classList.add("glass-animation")})),navLink4.addEventListener("mouseenter",(()=>{navLink4.appendChild(hell).classList.add("glass-animation")}));let cards=document.querySelectorAll(".card-hover");const hovering1=document.querySelector(".hovering1"),hovering2=document.querySelector(".hovering2"),hovering3=document.querySelector(".hovering3");hovering1.addEventListener("mouseenter",(function(e){hovering1.classList.add("hover-target"),hovering1.nextElementSibling.classList.add("hover-not-target"),hovering1.nextElementSibling.nextElementSibling.classList.add("hover-not-target")})),hovering1.addEventListener("mouseleave",(function(e){hovering1.classList.remove("hover-target"),hovering1.nextElementSibling.classList.remove("hover-not-target"),hovering1.nextElementSibling.nextElementSibling.classList.remove("hover-not-target")})),hovering2.addEventListener("mouseenter",(function(e){hovering2.classList.add("hover-target"),hovering2.nextElementSibling.classList.add("hover-not-target"),hovering2.previousElementSibling.classList.add("hover-not-target")})),hovering2.addEventListener("mouseleave",(function(e){hovering2.classList.remove("hover-target"),hovering2.nextElementSibling.classList.remove("hover-not-target"),hovering2.previousElementSibling.classList.remove("hover-not-target")})),hovering3.addEventListener("mouseenter",(function(e){hovering3.classList.add("hover-target"),hovering3.previousElementSibling.classList.add("hover-not-target"),hovering3.previousElementSibling.previousElementSibling.classList.add("hover-not-target")})),hovering3.addEventListener("mouseleave",(function(e){hovering3.classList.remove("hover-target"),hovering3.previousElementSibling.classList.remove("hover-not-target"),hovering3.previousElementSibling.previousElementSibling.classList.remove("hover-not-target")}));
//# sourceMappingURL=style.js.map