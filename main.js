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

// let Student = [
//     {
//         name : 'muhammad',
//         qunumber: '123456789',
//         phone:'123456789',
//         collage:'computer',
//         computerNumber:'01',
//         date:'2/5/25',
//         starTime:'10:00pm',
//         existTime:'11:00pm'

//     }
// ];
// function addStudent() {
//     Student.push(
//         {
//             name : 'muhammad',
//             qunumber: '123456789',
//             phone:'123456789',
//             collage:'computer',
//             computerNumber:'01',
//             date:'2/5/25',
//             starTime:'10:00pm',
//             existTime:'11:00pm'
//         }
//     )
// }
document.querySelector('#submit').addEventListener('click',()=> {
    const Name = document.querySelector('#input-name').value;
    const qUnumber = document.querySelector('#input-add-num').value;
    const Phone = document.querySelector('#phone-number').value;
    let Collage = document.querySelector('#collage');
    let ComputerNumber = document.querySelector('#computer-number');
    let collage = Collage.value;
    let computerNumber = ComputerNumber.value;

    if (Name ===""|| qUnumber ===""||Phone ==="" || collage ==="" || computerNumber === "") {
        // console.log('normal work');
        
        popup2.style.display = "grid";

        setInterval(() => {
            popup2.style.display = "none";
        },2000);

    }else{
        // addStudent();
        form.style.display = "none";
        home.style.display = "grid";
        console.log(Name);
        console.log(qUnumber);
        console.log(Phone);
        console.log(collage);
        console.log(computerNumber);
        
        }
        
})
