const btnUp = document.querySelector('.up');

window.onscroll = function(){
  console.log(document.documentElement.scrollTop)
  if (document.documentElement.scrollTop > 230) {
    btnUp.style.visibility = "visible";
} else {
  btnUp.style.visibility = "hidden";
}
}
