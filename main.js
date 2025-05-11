// import _ from'https://cdn.jsdelivr.net/npm/@tailwindcss/browser@';

let popup = document.querySelector('.pop-up');
let popup2 = document.querySelector('.pop-up2');
let form = document.querySelector('#form-section');
let home = document.querySelector('#home-section');
let exist= document.querySelector('#exist-section');

form.style.display = "none";
exist.style.display = "none";



// stgart button?=
let enterBtn = document.querySelector('.enter').addEventListener('click', () =>{
    setInterval(() => {
        popup.style.display = "none"
    },2000);
    popup.style.display = "grid"
    form.style.display = "grid"
    home.style.display = "none"
});

// exist button
const existBtn = document.querySelector('.exist').addEventListener('click', ()=>{
    exist.style.display = "grid";

});

let student = [
    {
        name : 'muhammad',
        qunumber: '123456789',
        phone:'123456789',
        collage:'computer',
        computerNumber:'01',
        date:'2/5/25',
        starTime:'10:00pm',
        existTime:'11:00pm'

    }
];

const Name = document.querySelector('#input-name').value;
const qUnumber = document.querySelector('#input-add-num').value;
const Phone = document.querySelector('#phone-number').value;
const collage = document.querySelector('#collage');
const computerNumber = document.querySelector('#computer-number');
// submit button
document.querySelector('#submit').addEventListener('click',()=> {
    if (Name ===""|| qUnumber ===""||Phone ==="" || collage.value ==="" || computerNumber.value === "") {
        // console.log('normal work');
        popup2.style.display = "grid";

        setInterval(() => {
            popup2.style.display = "none";
        },2000);

    }else{
        form.style.display = "none";
        home.style.display = "grid";

        console.log(student);
            
            
        }
        
})
