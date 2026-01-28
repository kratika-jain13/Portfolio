
window.onload = () => {
  document.getElementById("loader").style.display = "none";
};

// TYPING EFFECT
const texts = ["Frontend Developer","Web Designer"];
let count = 0;
let index = 0;
let isDeleting = false;
const typingElement = document.getElementById("typing-text");

function typeEffect(){
  if(!typingElement) return;

  if(!isDeleting && index < texts[count].length){
    typingElement.textContent += texts[count].charAt(index);
    index++;
    setTimeout(typeEffect,120);
  }
  else if(isDeleting && index > 0){
    typingElement.textContent = texts[count].substring(0,index-1);
    index--;
    setTimeout(typeEffect,60);
  }
  else{
    if(!isDeleting){
      isDeleting = true;
      setTimeout(typeEffect,1000);
    }else{
      isDeleting = false;
      count = (count + 1) % texts.length;
      setTimeout(typeEffect,300);
    }
  }
}
typeEffect();

// MOBILE MENU
function toggleMenu(){
  document.getElementById("nav-links").classList.toggle("show");
}

const themeBtn = document.getElementById("themeToggle");

function setThemeIcon(){
  if(document.body.classList.contains("dark")){
    themeBtn.textContent = "☀︎ ";      
    themeBtn.style.color = "#eae7db"; 
  }else{
    themeBtn.textContent = "☾ ";      
    themeBtn.style.color = "#4d2407"; 
  }
}

function toggleTheme(){
  document.body.classList.toggle("dark");

  if(document.body.classList.contains("dark")){
    localStorage.setItem("theme","dark");
  }else{
    localStorage.setItem("theme","light");
  }

  setThemeIcon();
}

// load saved mode
window.addEventListener("load",()=>{
  if(localStorage.getItem("theme")==="dark"){
    document.body.classList.add("dark");
  }
  setThemeIcon();
});

//  ANIMATION
const bars = document.querySelectorAll(".progress div");
window.addEventListener("scroll",()=>{
  bars.forEach(bar=>{
    if(bar.getBoundingClientRect().top < window.innerHeight){
      bar.style.width = bar.dataset.width;
    }
  });
});

// ICON + BUTTON ANIMATION 
const clickableItems = document.querySelectorAll(".social-icon, .btn");

clickableItems.forEach(item=>{
  item.addEventListener("click", function(e){
    e.preventDefault();

    const link = this.getAttribute("href");

    this.classList.add("dance");

    setTimeout(()=>{
      this.classList.remove("dance");
      if(link){
        window.open(link, "_blank"); 
      }
    }, 400);
  });
});
