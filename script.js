// 1
var clickerFooter = document.getElementsByTagName("footer");
var clicks = 0;
for ( i = 0 ; i < clickerFooter.length; i++) {
  clickerFooter[i].addEventListener("click", function onFooterClick(){
    console.log(`clique n°${clicks += 1}`);
 });
}

// 2
var clickHamburgerMenu = document.getElementsByClassName("navbar-toggler");
clickHamburgerMenu[0].addEventListener("click", function onMenuClick(){
  document.getElementById("navbarHeader").classList.toggle("collapse");
});


// 3
var editButton = document.getElementsByClassName("btn-outline-secondary");
editButton[0].addEventListener("click", function onBtnEditClick(){
  document.getElementsByClassName("card-text")[0].style.color = "red";
});

// 4
var editButton1 = document.getElementsByClassName("btn-outline-secondary");
var textColor = document.getElementsByClassName("card-text")[1]
editButton1[1].addEventListener("click", function onBtnEditClick(){
  if (textColor.style.color === 'green'){
  textColor.style.color = "black";
  }else {
  textColor.style.color = "green";
  }
});

// 5 
var navbar = document.getElementsByClassName("navbar");
var body = document.getElementsByClassName("col-sm-8");

navbar[0].addEventListener("dblclick", function menuToggle() {
    document.styleSheets[0].disabled = true | false;
});

body[0].addEventListener("dblclick", function menuToggle() {
    window.location.reload();
});

// 6 
var btnView = document.getElementsByClassName("btn-success");

for(let l = 0; l < btnView.length; l++){
btnView[l].addEventListener("mouseover", function MouseBtnView(){ 
  
  if (document.getElementsByClassName("card-text")[l].classList.toggle("collapse") === false){
    document.getElementsByClassName("card-img-top")[l].style.width = "100%";
  } else {
    document.getElementsByClassName("card-img-top")[l].style.width = "20%";
  }
});
}

// 7

var firstCard = document.getElementsByClassName("row");
var buttonLast = document.getElementsByClassName("btn-secondary");
buttonLast[0].addEventListener("click", function(){
firstCard[1].prepend(document.getElementsByClassName("col-md-4")[5]);
})

// 8 
var btnPrime = document.getElementsByClassName("btn-primary");

btnPrime[0].addEventListener("click", function BtnPrime(){
  btnPrime[0].removeAttribute("href");
  firstCard[1].append(document.getElementsByClassName("col-md-4")[0]);
})








