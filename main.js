// import _ from'https://cdn.jsdelivr.net/npm/@tailwindcss/browser@';

const name = document.querySelector('#input-name');
const qUnumber = document.querySelector('#input-add-num');
const Phone = document.querySelector('#phone-number');
const collage = document.querySelector('#collage');
const computerNumber = document.querySelector('#computer-number');
let popup = document.querySelector('.pop-up');
let form = document.querySelector('.form-section');

function Submit() {
    popup.style.display = "grid";

    setInterval(()=>{
        history.go(-1)
        popup.style.display = "none";
    },5000);
}