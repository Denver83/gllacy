var link = document.querySelector(".select-item");
var popup = document.querySelector(".popup-sorting");
var basket = document.querySelector(".basket-catalog");
var bskt = document.querySelector(".basket-popup");



 link.addEventListener("click", function(event) {
 event.preventDefault();
 popup.classList.toggle("modal-content-show");
 });

 basket.addEventListener("click", function(event) {
 event.preventDefault();
 bskt.classList.toggle("basket-show");
 });
 
