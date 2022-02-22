const bill = document.querySelector("#bill");

bill.addEventListener("keyup", (event) => {
    console.log(event.target.value);
});

const numberOfPeople = document.querySelector("#number-of-people");

numberOfPeople.addEventListener("keyup", (event) => {
    console.log(event.target.value);
});

const tipSelection = document.getElementsByClassName(".tip-selection");

console.log(tipSelection);
