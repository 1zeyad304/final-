var car = document.querySelector('.cart');
function open_cart(){
    car.classList.toggle("active")
}
// script button dark mode.js
const toggleBtn = document.getElementById('toggleBtn');

toggleBtn.addEventListener('click', function() {
  document.body.classList.toggle('dark-mode');
});