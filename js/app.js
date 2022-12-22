//NUM ODD OR EVEN     ********

// let num = 51

// if(num % 2 == 0){
//     console.log(num+" is an even number");
// } else{
//     console.log(num+" is an odd number");
// }

// NUM POSITIVE OR NEGATIVE   ********

// let num = -50;

// if(num > 0){
//     console.log(num+" Positive number")
// } else{
//     console.log(num+" Negative number")
// }

// FUNCTION     *********

// function checer(){
//     let num = -50;

//     if(num > 0){
//     console.log(num+" Positive number")
//     } else{
//     console.log(num+" Negative number")
//     }
// }

// checer();
// checer();
// checer();
// checer();

// FUNCTION DECLARE () PASS ARGUMENT    *******

// function checer(value){
//     let num = value;

//     if(num > 0){
//     console.log(num+" Positive number")
//     } else{
//     console.log(num+" Negative number")
//     }
// }


// checer(-23)

// RESULT   **********

// let math = 50;
// let eng = 50;
// let bangla = 50;
// let ict = 50;

// let result = math + eng + bangla + ict
// console.log(result)

// function getResult(mathNum, engNum, banglaNum, ictNum, userName){
//     let math = mathNum;
//     let eng = engNum;
//     let bangla = banglaNum;
//     let ict = ictNum;
//     let name = userName;
//     let result = math + eng + bangla + ict
//     console.log(name + " your result is " + result)
// }

// getResult(40, 60, 50, 50, 'harvay');
// getResult(50, 100, 80,75, 'sahed');


// BILL SPLITING


// function   billAmount(billTk, tipTk = 0, peoples = 1){
//     let bill = billTk;
//     let tip = tipTk;
//     let numberOfPeople = peoples;
//     let totalBill = bill + tip

//     let perPeopleBill = totalBill / numberOfPeople;

//     console.log("Per Person Bill is " + perPeopleBill);
// }

// billAmount(1000, 100,);

// EVENTS

// let btn = document.querySelector(".btn");

// // console.log(btn)

// let textArea = document.querySelector(".text");
// // alert('hlw')
// function alertMe() {
//     textArea.innerHTML = "Welcome to JS"
//     textArea.style.fontSize = '50px';
//     textArea.style.color = 'green'
// }
// btn.addEventListener('click', alertMe);

// SIDEBAR

let btn = document.querySelector("nav button")

let sidebar = document.querySelector('aside.sidebar')

function sidebarMenu(){
    sidebar.classList.toggle('active');
}


btn.addEventListener('click', sidebarMenu)